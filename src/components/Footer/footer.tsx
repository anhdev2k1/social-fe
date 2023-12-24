import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./footer.module.scss";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import imagesInstance from "../../assets/images";
const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.container}>
        <div className={style.footer_container}>
          <div className={style.footer_column}>
            <div className={style.footer_logo}>
              <img src={imagesInstance.logo} alt="" />
              <span>9AM Media</span>
            </div>
            <p className={style.footer_desc}>9AM MEDIA CO., LTD</p>

            <div className={style.footer_item}>
              <span>
                Tầng 3A, 29 Yên Bái, Phường Hải Châu I, Quận Hải Châu, Thành phố
                Đà Nẵng, Việt Nam
              </span>
            </div>
            <div className={style.footer_item}>
              <span>Mã số thuế: 0402217718</span>
            </div>
            <div className={style.footer_item}>
              <span><FontAwesomeIcon icon={faEnvelope} />   lienhe@9am.media</span>
            </div>
            <div className={style.footer_item}>
              <FontAwesomeIcon icon={faPhone} />
              <span>070.336.3333</span>
            </div>
          </div>

          <div className={style.footer_column}>
            <h3 className={style.footer_heading}>Customer support</h3>
            <div className={style.footer_item}>
              <span>FAQ</span>
            </div>
            <div className={style.footer_item}>
              <span>Knowledge Base</span>
            </div>
            <div className={style.footer_item}>
              <span>Online Support</span>
            </div>
            <div className={style.footer_item}>
              <span>Privacy Policy</span>
            </div>
            <div className={style.footer_item}>
              <span>Term & Condition</span>
            </div>
          </div>

          <div className={style.footer_column}>
            <h3 className={style.footer_heading}>Services</h3>
            <div className={style.footer_item}>
              <span>Social Media Marketing</span>
            </div>
            <div className={style.footer_item}>
              <span>Email Marketing</span>
            </div>
            <div className={style.footer_item}>
              <span>Refer And Earn</span>
            </div>
            <div className={style.footer_item}>
              <span>Creative Development</span>
            </div>
          </div>

          <div className={style.footer_column}>
            <h3 className={style.footer_heading}>Company</h3>
            <div className={style.footer_item}>
              <span>About Us</span>
            </div>
            <div className={style.footer_item}>
              <span>Team</span>
            </div>
            <div className={style.footer_item}>
              <span>Privacy Policy</span>
            </div>
            <div className={style.footer_item}>
              <span>Terms & Condition</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
