import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./footer.module.scss";
import { faLocationArrow, faPhone } from "@fortawesome/free-solid-svg-icons";
import imagesInstance from "../../assets/images";
const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.container}>
        <div className={style.footer_container}>
          <div className={style.footer_column}>
            <img src={imagesInstance.logoNgang} alt="" />
            <p className={style.footer_desc}>9AM MEDIA CO., LTD</p>

            <div className={style.footer_item}>
              <FontAwesomeIcon icon={faLocationArrow} />
              <span>
                Tầng 3A, 29 Yên Bái, Phường Hải Châu I, Quận Hải Châu, Thành phố
                Đà Nẵng, Việt Nam
              </span>
            </div>
            <div className={style.footer_item}>
              <FontAwesomeIcon icon={faLocationArrow} />
              <span>Mã số thuế: 0402217718</span>
            </div>
            <div className={style.footer_item}>
              <FontAwesomeIcon icon={faPhone} />
              <span>070.336.3333</span>
            </div>
          </div>

          <div className={style.footer_column}>
            <h3 className={style.footer_heading}>Customer support</h3>
            <div className={style.footer_item}>
              <FontAwesomeIcon icon={faLocationArrow} />
              <span>FAQ</span>
            </div>
            <div className={style.footer_item}>
              <FontAwesomeIcon icon={faPhone} />
              <span>Knowledge Base</span>
            </div>
            <div className={style.footer_item}>
              <FontAwesomeIcon icon={faPhone} />
              <span>Online Support</span>
            </div>
            <div className={style.footer_item}>
              <FontAwesomeIcon icon={faPhone} />
              <span>Privacy Policy</span>
            </div>
            <div className={style.footer_item}>
              <FontAwesomeIcon icon={faPhone} />
              <span>Term & Condition</span>
            </div>
          </div>

          <div className={style.footer_column}>
            <h3 className={style.footer_heading}>Services</h3>
            <div className={style.footer_item}>
              <FontAwesomeIcon icon={faLocationArrow} />
              <span>Social Media Marketing</span>
            </div>
            <div className={style.footer_item}>
              <FontAwesomeIcon icon={faPhone} />
              <span>Email Marketing</span>
            </div>
            <div className={style.footer_item}>
              <FontAwesomeIcon icon={faPhone} />
              <span>Refer And Earn</span>
            </div>
            <div className={style.footer_item}>
              <FontAwesomeIcon icon={faPhone} />
              <span>Creative Development</span>
            </div>
          </div>

          <div className={style.footer_column}>
            <h3 className={style.footer_heading}>Company</h3>
            <div className={style.footer_item}>
              <FontAwesomeIcon icon={faLocationArrow} />
              <span>About Us</span>
            </div>
            <div className={style.footer_item}>
              <FontAwesomeIcon icon={faPhone} />
              <span>Team</span>
            </div>
            <div className={style.footer_item}>
              <FontAwesomeIcon icon={faPhone} />
              <span>Privacy Policy</span>
            </div>
            <div className={style.footer_item}>
              <FontAwesomeIcon icon={faPhone} />
              <span>Terms & Condition</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
