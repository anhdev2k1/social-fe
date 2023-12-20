import { useEffect, useState } from "react";
import imagesInstance from "../../assets/images";
import style from "./relatedPost.module.scss";
import { Post, postApi } from "../../apis/post.api";
import convertDateTime from "../../utils/convertToDate";
import { useNavigate, useParams } from "react-router-dom";
const RelatedPost = ({ serviceID }: { serviceID: string }) => {
  const serviceSlug = useParams()
  
  const [relatedList, setRelatedList] = useState<Post[]>([]);
  useEffect(() => {
    if (serviceID) {
      const getRelatedList = async () => {
        const res = await postApi.getPostRelated(serviceID);
        setRelatedList(res.data!);
      };
      getRelatedList();
    }
  }, []);

  const navigate = useNavigate()
  const handleRedirectDetail = (post: Post) => {
    console.log(post);
    
    navigate(`/services/${serviceSlug.tag}/${post?.slug}`, {
      state: {
        post: post
      }
    })
  }
  return (
    <div className={style.related_post}>
      <h3 className={style.related_heading}>Bài viết liên quan</h3>
      <div className={style.related_list}>
        {relatedList?.length > 0 &&
          relatedList.map((item) => {
            return (
              <div className={style.related_item} onClick={() => handleRedirectDetail(item)}>
                <div className={style.relatedItem_img}>
                  <img src={imagesInstance.related} alt="" />
                </div>
                <div className={style.related_title}>
                  <p className={style.relatedTitle_heading}>{item?.title}</p>
                  <p className={style.relatedTitle_time}>{convertDateTime(item.updatedAt!)}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default RelatedPost;
