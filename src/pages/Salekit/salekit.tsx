import imagesInstance from "../../assets/images";
import style from "./salekit.module.scss";
const SaleKit = () => {
  return (
    <div className={style.salekit}>
      <div className={style.container}>
        <div className={style.salekit_banner}>
          <img src={imagesInstance.salekitbanner} alt="" />
        </div>

        <div className={style.salekit_list}>
          <div className={style.salekit_item}>
            <div className={style.salekit_img}>
              <img src={imagesInstance.salekit1} alt="" />
            </div>
          </div>
          <div className={style.salekit_item}>
            <div className={style.salekit_img}>
              <img src={imagesInstance.salekit2} alt="" />
            </div>
          </div>
          <div className={style.salekit_item}>
            <div className={style.salekit_img}>
              <img src={imagesInstance.salekit3} alt="" />
            </div>
          </div>
          <div className={style.salekit_item}>
            <div className={style.salekit_img}>
              <img src={imagesInstance.salekit4} alt="" />
            </div>
          </div>
        </div>

        <div className={style.help}>
          <h3 className={style.help_title}>
            NHỮNG LỢI ÍCH MÀ KHÁCH HÀNG ĐẠT ĐƯỢC KHI SỬ DỤNG DỊCH VỤ CỦA 9AM
            Media
          </h3>
          <div className={style.list_help}>
            <div className={style.help_item}>
              <span>Không mất cọc</span>
            </div>
            <div className={style.help_item}>
              <span>Không mất mở phí</span>
            </div>
            <div className={style.help_item}>
              <span>Kho TKQC đa dạng múi giờ, tiền tệ</span>
            </div>
            <div className={style.help_item}>
              <span>Tài khoản bao trust, siêu mạnh luôn có sẵn</span>
            </div>
            <div className={style.help_item}>
              <span>Quy trình setup nhanh chóng</span>
            </div>
            <div className={style.help_item}>
              <span>Support nhanh chóng, 24/7</span>
            </div>
          </div>

          <div className={style.clients}>
            <h3 className={style.client_heading}>Lợi ích khách hàng</h3>
            <div className={style.list_client}>
              <div className={style.client_item}>
                <span>01</span>
                <p>
                  Tiếp cận chính xác khách hàng mục tiêu của bạn với CHI PHÍ
                  THẤP
                </p>
              </div>
              <div className={style.client_item}>
                <span>02</span>
                <p>
                  Quy trình phân tích, nghiên cứu và xác định đối tượng khách
                  hàng rõ ràng giúp nhắm đúng mục tiêu, đảm bảo tiếp cận khách
                  hàng đúng nhu cầu
                </p>
              </div>
              <div className={style.client_item}>
                <span>03</span>
                <p>
                  Phân nhóm đối tượng mục tiêu cho quảng cáo giúp tối ưu chi phí
                </p>
              </div>
              <div className={style.client_item}>
                <span>04</span>
                <p>
                  Xây dựng nguồn Data Facebook chất lượng và giúp định vị thương
                  hiệu của bạn
                </p>
              </div>
              <div className={style.client_item}>
                <span>06</span>
                <p>
                  Gia tăng lợi thế cạnh tranh lâu dài và xây dựng vị trí thương
                  hiệu trên thị trường giúp doanh nghiệp bạn mở rộng thị phần
                  bền vững
                </p>
              </div>
              <div className={style.client_item}>
                <span>02</span>
                <p>
                  Quy trình phân tích, nghiên cứu và xác định đối tượng khách
                  hàng rõ ràng giúp nhắm đúng mục tiêu, đảm bảo tiếp cận khách
                  hàng đúng nhu cầu
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleKit;
