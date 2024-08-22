import imagesInstance from "../../assets/images";
import style from "./about.module.scss";
const About = () => {
  return (
    <div className={style.about}>
      <div className={style.container}>
        <div className={style.about_content}>
          <img src={imagesInstance.aboutme} alt="" />
          <h3 className={style.about_heading}>
            Tiến Long Media – địa chỉ cung cấp dịch vụ facebook, dịch vụ quảng cáo &
            dịch vụ thiết kế uy tín trên thị trường.
          </h3>

          <p>
            Dịch Vụ Facebook – Tiến Long Media chuyên cung cấp các dịch vụ mạng xã hội
            như: Facebook, Youtube, Google, Instagram,… Chúng tôi là giải pháp
            cho khách hàng kinh doanh mặt hàng online hướng tới người dùng tiềm
            năng, giúp tăng doanh số bán hàng và đẩy mạnh lượng người tương tác
            hiệu quả nhất. Tiến Long Media tự hào là đơn vị dịch vụ chuyên nghiệp, uy
            tín hàng đầu Việt Nam! Trang web được lên ý tưởng, thiết kế, quản lý
            và phát triển bởi Tiến Long Media.
          </p>
          <h3 className={style.about_heading}>
            Tiến Long Media có thể mang lại gì cho bạn ???
          </h3>
          <p>
            Bạn là người kinh doanh trên các mạng xã hội facebook, zalo hay trên
            website và bất cứ các kênh nào chúng tôi đều có thể mang đến cho bạn
            những dịch vụ chất lượng nhất giúp bạn đạt được nhiều hiệu quả thành
            công cho công việc kinh doanh của mình. Hiện Tiến Long Media đã và đang
            mang đến cho khách hàng những dịch vụ đó là dịch vụ marketing
            facebook, dịch vụ quảng cáo và dịch vụ thiết kế. Cụ thể như sau :
          </p>
          <h3 className={style.about_heading}>Dịch vụ facebook</h3>
          <p>– Tăng like fanpage facebook, tăng like bài viết trên facebook.</p>
          <p>– Bán fanpage facebook chất lượng.</p>
          <p>– Chạy quảng cáo facebook ads.</p>
          <p>– Tăng sub – theo dõi, tăng bạn bè trên facebook.</p>
          <p>– Đổi tên fanpage facebook.</p>
          <p>
            – Tăng thành viên, bán group chất lượng, cho thuê group facebook
            đăng bài quảng cáo.
          </p>
          <p>
            – Mở khóa nick facebook cá nhân, khôi phục fanpage group facebook bị
            khóa…
          </p>
          <p>
            – Tăng comment bình luận, auto cảm xúc facebook bạn bè, tăng view
            video & livestream facebook … cùng nhiều dịch vụ facebook khác nữa.
          </p>
          <h3 className={style.about_heading}>Dịch vụ quảng cáo</h3>
          <p>– Quảng cáo trên google ads (adwords).</p>
          <p>– Quảng cáo trên cốc cốc.</p>
          <p>– Quảng cáo trên youtube.</p>
          <p>– Quảng cáo trên zalo.</p>
          <p>– Quảng cáo Ad network.</p>
          <h3 className={style.about_heading}>Dịch vụ thiết kế</h3>
          <p>– Thiết kế website .</p>
          <p>– Design ảnh: thiết kế logo, banner, ảnh quảng cáo… </p>
          <p>– Chụp ảnh quảng cáo sản phẩm, sản xuất TVC quảng cáo.</p>
          <p>
            Với tất cả những dịch vụ mà Tiến Long Media đang cung cấp đều mong muốn sẽ
            hỗ trợ giúp ích cho công việc kinh doanh bán hàng hay quảng bá cho
            cá nhân doanh nghiệp tốt hơn, đạt được mục tiêu đề ra nhanh chóng
            nhất – xây dựng thương hiệu trong tâm trí khách hàng của mình.
          </p>
          <h3 className={style.about_heading}>Cam kết của Tiến Long Media</h3>
          <p>
            Chúng tôi luôn đặt hiệu quả công việc và tinh thần trách nhiệm lên
            hàng đầu.
          </p>
          <p>
            Tiến Long Media sẽ mang đến cho khách hàng dịch vụ uy tín chất lượng
            nhất với chi phí thấp nhất có thể.
          </p>
          <p>
            Chỉ cần khách hàng có nhu cầu, bằng kĩ năng, kinh nghiệm và chuyên
            môn của mình, chúng tôi đều sẽ cố gắng đáp ứng được tất cả những yêu
            cầu đó một cách nhanh nhất.
          </p>
          <p>
            Bên cạnh đó Tiến Long Media luôn cập nhật những kiến thức mới nhất để
            giúp doanh nghiệp có những giải pháp kịp thời nhằm bắt kịp xu hướng
            phát triển của Internet, mạng xã hội và kinh doanh trực tuyến hiện
            nay.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
