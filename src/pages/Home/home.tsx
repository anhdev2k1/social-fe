import style from "./home.module.scss";
import images from "../../assets/images/index";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import 'swiper/css/autoplay';

import imagesInstance from "../../assets/images/index";

const Home = () => {
  return (
    <div className={style.main__inner}>
      <div className={style.box_padding}>
        <div className={style.container}>
          <div className={style.hero}>
            <div className={style.hero_left}>
              <h3 className={style.heading}>
                Đối tác Tiếp thị Lựa chọn của Bạn
              </h3>
              <h1 className={style.title}>
                Nhận tiếp thị truyền thông xã hội tốt nhất{" "}
                <p className={style.gradient}>với 9AM Media</p>
              </h1>
              <p className={style.desc}>
                Thách thức Giới Hạn, Định hình Tương Lai. MMO Advertising - Nơi
                Nảy sinh Ý tưởng, Kết nối Đam mê. Vượt qua Mọi Rào cản, Đồng
                Hành Chinh Phục Sự Thành Công!
              </p>

              <Link to="/services" className={style.btn_one}>
                <span>Bắt đầu thôi</span>
              </Link>
              <div className={style.clients}>
                <div className={style.imageClients}>
                  <img src={images.clients} alt="" />
                </div>
                <span>2360+ Satisfied Clients</span>
              </div>
            </div>
            <div className={style.hero_right}>
              <div className={style.hero_person}>
                <img src={images.person} alt="person image" />
              </div>
              <div className={style.hero_tiktok}>
                <img src={images.iconTiktok} alt="" />
              </div>

              <div className={style.hero_insta}>
                <img src={images.iconInsta} alt="" />
              </div>
              <div className={style.hero_face}>
                <img src={images.iconFace} alt="" />
              </div>
              <div className={style.hero_chart}>
                <img src={images.iconChart} alt="" />
              </div>
              <div className={style.hero_member}>
                <img src={images.iconMember} alt="" />
              </div>
              {/* <div className={style.bg_overlay}>
              <img src={images.bgDesign} alt="" />
            </div> */}
            </div>
          </div>
        </div>
        <div className={style.services}>
          <div className={style.container}>
            <h3 className={style.heading}>Những giải pháp tiếp thị tốt nhất</h3>
            <h2 className={style.title}>Dịch vụ nổi bật</h2>
            <p className={style.desc}>
              Chúng tôi tự hào là đối tác tiếp thị MMO hàng đầu, cung cấp dịch
              vụ vô song với chiến lược độc đáo và hiệu suất vượt trội. Được sự
              tin dùng của nhiều khách hàng, chúng tôi cam kết mang đến giải
              pháp tiếp thị tốt nhất để giúp doanh nghiệp của bạn nổi bật và
              phát triển.
            </p>
            <div className={style.services_list}>
              <div className={style.service_flex}>
                <div className={style.service_left}>
                  <img src={images.asset1} alt="" />
                  <h3 className={style.service_heading}>
                    Kiểm tra truyền thông
                  </h3>
                  <p className={style.service_desc}>
                    Bước đầu tốt nhất để tiến đến bước tiếp theo mà bạn nên thực
                    hiện trên các kênh truyền thông xã hội của mình.
                  </p>
                </div>
                <div className={style.service_right}>
                  <div className={style.serviceRight_item}>
                    <img src={images.asset5} alt="" />
                    <div className={style.service_title}>
                      <h3 className={style.service_heading}>
                        Quản lý truyền thông xã hội
                      </h3>
                      <p className={style.service_desc}>
                        Mọi thứ bạn cần để thành công mỗi tháng trên các kênh
                        của thương hiệu bạn.
                      </p>
                    </div>
                  </div>
                  <div className={style.serviceRight_item}>
                    <img src={images.asset2} alt="" />
                    <div className={style.service_title}>
                      <h3 className={style.service_heading}>
                        Quảng cáo trên mạng xã hội
                      </h3>
                      <p className={style.service_desc}>
                        Cách nhanh nhất để tạo ra nhiều doanh số bán hàng, lưu
                        lượng, nhận thức thương hiệu và tương tác.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={style.service_flex}>
                <div className={style.service_item}>
                  <img src={images.asset3} alt="" />
                  <h3 className={style.service_heading}>Tạo nội dung</h3>
                  <p className={style.service_desc}>
                    Làm cho Thương hiệu của Bạn Nổi Bật: Nâng cao Sản phẩm và
                    Thông điệp bằng Thiết kế Đồ họa để Đạt được Thành công trên
                    Mạng xã hội.
                  </p>
                </div>
                <div className={style.service_item}>
                  <img src={images.asset4} alt="" />
                  <h3 className={style.service_heading}>
                    Marketing Người Ảnh Hưởng
                  </h3>
                  <p className={style.service_desc}>
                    Mở Rộng Phạm Vi Truyền Thông Xã Hội, Tăng Cường Nhận Thức,
                    Tạo Tương Tác, Tăng Lưu Lượng, và Tăng Vọt Doanh Số Bán
                    Hàng.
                  </p>
                </div>
                <div
                  className={style.service_item}
                  style={{ backgroundColor: "red", color: "white" }}
                >
                  <img src={images.asset2} alt="" />
                  <h3 className={style.service_heading}>Tư vấn Nội dung</h3>
                  <p className={style.service_desc}>
                    Mở Rộng Phạm Vi Truyền Thông Xã Hội, Tăng Cường Nhận Thức,
                    Thúc Đẩy Tương Tác, Tăng Lưu Lượng, và Nâng Cao Doanh Số Bán
                    Hàng.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.about}>
          <div className={style.container}>
            <div className={style.about_flex}>
              <div className={style.about_left}>
                <img src={images.banner1} alt="" />
              </div>
              <div className={style.about_right}>
                <h3 className={style.heading}>Về chúng tôi</h3>
                <h1 className={style.title}>
                  Chiến lược truyền thông xã hội khiến khán giả muốn theo dõi và
                  tương tác với thương hiệu của bạn
                </h1>
                <button className={style.aboutBtn}>
                  <span>Đọc thêm</span>
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={style.container}>
          <div className={style.slogan}>
            <div className={style.slogan_overlay}></div>
            <div className={style.slogan_title}>
              <h1 className={style.slogan_heading}>
                Bạn đã sẵn sàng để phát triển chưa?
              </h1>
              <div className={style.slogan_btn}>
                <span>Làm việc cùng chúng tôi</span>{" "}
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </div>
            </div>
            <div className={style.slogan_img}>
              <img src={images.banner2} alt="" />
            </div>
          </div>
        </div>
        <div className={style.slider}>
          <h2>Cảm nhận khách hàng</h2>
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            // pagination={{ clickable: true }}
            className={style.slide_list}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide className={style.slide_item}>
              <img src={imagesInstance.review1} alt="" />
              <div className={style.slide_title}>
                <p className={style.slide_content}>
                  Mình sử dụng dịch vụ bên Long cũng gần 5 năm, cảm thấy chất
                  lượng dịch vụ rất tốt, và được sự tư vấn tận tình. Mình cảm
                  thấy rất hài lòng có thể đây là nơi an toàn nhất mỗi khi mình
                  cần sự hỗ trợ.
                </p>
                <p className={style.slide_name}>Tăng Thiên Kim</p>
                <p className={style.slide_desc}>Hot girl, người mẫu</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className={style.slide_item}>
              <img src={imagesInstance.review2} alt="" />
              <div className={style.slide_title}>
                <p className={style.slide_content}>
                  Số 1 về chất lượng, từ khi dùng dịch vụ bên Tiến Long Media,
                  doanh thu bán hàng tại shop mình tăng một cách bất ngờ. Mình
                  rất hài lòng về chất lượng dịch vụ và sự hỗ trợ nhiệt tình.
                </p>
                <p className={style.slide_name}>Dương Hoài Trâm</p>
                <p className={style.slide_desc}>
                  CEO/ Owner/ Founder NGŨ CỐC Gia Truyền 7 Vị NAVAN
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className={style.slide_item}>
              <img src={imagesInstance.review3} alt="" />
              <div className={style.slide_title}>
                <p className={style.slide_content}>
                  Từ khi sử dụng dịch dịch vụ tại Tiến Long Media để hỗ trợ công
                  việc. Thật tuyệt vời số lượng người biết đến mình tăng nhanh
                  hơn hẳn. Và mình cũng thuận lợi hơn khi làm việc cũng như sử
                  dụng các trang mạng xã hội.
                </p>
                <p className={style.slide_name}>Angela Tường Vy</p>
                <p className={style.slide_desc}>Idol Bigo live, Booking KOLs</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Home;
