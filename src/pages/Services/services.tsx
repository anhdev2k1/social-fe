import { useLocation, useNavigate } from "react-router-dom";
import Banner from "../../components/Banner/banner";
import style from "./services.module.scss";
import { useEffect, useState } from "react";
import { Post, postApi } from "../../apis/post.api";
import Loading from "../../components/Loading/loading";
const Services = () => {
  const location = useLocation();
  const { state } = location;
  const [listPost, setListPost] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    if (state?.service) {
      const getPostsInService = async () => {
        setLoading(true);
        const res = await postApi.getBySlug(state?.service?._id as string);
        setListPost(res.data!);
        setLoading(false);
      };
      getPostsInService();
    }
  }, [state?.service]);

  const navigate = useNavigate()
  const handleRedirectDetail = (post: Post) => {
    console.log(post);
    
    navigate(`/services/${state?.service?.slug}/${post?.slug}`, {
      state: {
        post: post
      }
    })
  }
  return (
    <div className={style.services}>
      <Banner
        heading={`Các dịch vụ chính`}
        description="9AM Media chúng tôi chuyên cung cấp các dịch vụ mạng xã hội"
      />
      <div className={style.service_container}>
        <div className={style.services_list}>
          {loading ? (
            <Loading />
          ) : listPost?.length > 0 ? (
            listPost.map((post) => {
              return (
                <div className={style.service_item}>
                  <div className={style.serivce_content}>
                    <h3 className={style.service_heading}>{post?.title}</h3>
                    <p className={style.service_desc}>{post?.description}</p>
                    <div className={style.button_main} onClick={() => handleRedirectDetail(post)}>Chi tiết</div>
                  </div>
                </div>
              );
            })
          ) : (
            <span>Không có bài đăng từ dịch vụ này!</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
