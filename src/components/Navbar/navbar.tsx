import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./navbar.module.scss";
import {
  faBars,
  faChevronDown,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Service, serviceApi } from "../../apis/service.api";
import imagesInstance from "../../assets/images";
const Navbar = () => {
  const [services, setServices] = useState<Service[]>([]);
  useEffect(() => {
    const getServices = async () => {
      const res = await serviceApi.getAll();
      if (res.data) {
        setServices(res.data);
      }
    };
    getServices();
  }, []);

  const navigate = useNavigate();
  const handleRedirectServices = (service: Service) => {
    navigate(`/services/${service.slug}`, {
      state: {
        service: service,
      },
    });
  };
  const [openSidebar, setOpenSidebar] = useState<boolean>(false)
  const handleToggleSidebar = () => {
    setOpenSidebar(!openSidebar)
  }

  
  return (
    <div className={style.navbar}>
      <div className={style.container1200}>
        <div className={style.container}>
          <Link to="/" className={style.logo}>
            <img src={imagesInstance.logoNgang} alt="" />
          </Link>
          <div className={style.burger} onClick={handleToggleSidebar}>
            <FontAwesomeIcon icon={faBars} />
            <ul className={style.list} style={openSidebar ? {transform: "translateX(0)"} : {transform: "translateX(1000px)"}}>
              <div className={style.close} onClick={handleToggleSidebar}>
                <FontAwesomeIcon icon={faXmark} />
              </div>
              <li className={style.item}>Trang chủ</li>
              <Link to="/about" className={style.item}>
                Về tôi
              </Link>
              <li className={style.item}>
                <span>Dịch vụ</span>
                <FontAwesomeIcon icon={faChevronDown} />
                <div className={style.navbar_dropdown}>
                  <h3 className={style.navbarDropdown_heading}>
                    Bên tôi chuyên cung cấp các dịch vụ:{" "}
                  </h3>
                  <ul className={style.dropdown_list}>
                    {services.length > 0 &&
                      services.map((service) => {
                        return (
                          <div
                            className={style.dropdown_item}
                            onClick={() => handleRedirectServices(service)}
                          >
                            <span>{service.name_service}</span>
                            <FontAwesomeIcon icon={faArrowRight} />
                          </div>
                        );
                      })}
                  </ul>
                </div>
              </li>
              <li className={style.item}>Bài viết</li>
              <Link to="/contact" className={style.item}>Liên hệ</Link>
            </ul>
          </div>
          <ul className={style.list}>
            <li className={style.item}>Trang chủ</li>
            <Link to="/about" className={style.item}>
              Về tôi
            </Link>
            <li className={style.item}>
              <span>Dịch vụ</span>
              <FontAwesomeIcon icon={faChevronDown} />
              <div className={style.navbar_dropdown}>
                <h3 className={style.navbarDropdown_heading}>
                  Bên tôi chuyên cung cấp các dịch vụ:{" "}
                </h3>
                <ul className={style.dropdown_list}>
                  {services.length > 0 &&
                    services.map((service) => {
                      return (
                        <div
                          className={style.dropdown_item}
                          onClick={() => handleRedirectServices(service)}
                        >
                          <span>{service.name_service}</span>
                          <FontAwesomeIcon icon={faArrowRight} />
                        </div>
                      );
                    })}
                </ul>
              </div>
            </li>
            <li className={style.item}>Bài viết</li>
            <Link to="/contact" className={style.item}>Liên hệ</Link>
          </ul>

          <div className={style.button}>
            <span>Bắt đầu</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
