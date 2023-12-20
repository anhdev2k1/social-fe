import { useLocation } from "react-router-dom";
import Banner from "../Banner/banner";
import RelatedPost from "../RelatedPost/relatedPost";
import style from "./detail.module.scss";
import { useEffect, useState } from "react";
import { Post, postApi } from "../../apis/post.api";
import Loading from "../Loading/loading";
const Detail = () => {
  const location = useLocation();
  const { state } = location;
  const [postDetail, setPostDetail] = useState<Post>();
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    if (state?.post) {
      const getPostDetail = async () => {
        setLoading(true);
        const res = await postApi.getById(state?.post?._id as string);
        setPostDetail(res.data);
        setLoading(false);
      };
      getPostDetail();
    }
  }, [location]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        postDetail && (
          <>
            <Banner
              heading={postDetail?.title as string}
              description={postDetail?.description as string}
            />
            <div className={style.detail}>
              <div className={style.detail_container}>
                <div className={style.detail_flex}>
                  <div
                    className={style.detail_content}
                    dangerouslySetInnerHTML={{ __html: postDetail?.content }}
                  >
                  </div>
                  <RelatedPost serviceID={state?.post?.service_id._id} />
                </div>
              </div>
            </div>
          </>
        )
      )}
    </>
  );
};

export default Detail;
