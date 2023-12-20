import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./navbar.module.scss";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hook";
import imagesInstance from "../../assets/images";
const NavbarAdmin = () => {
  const { user } = useAppSelector((state) => state.user);

  return (
    <div className={style.navbarAdmin}>
      <Link to="/admin" className={style.logo}>
        <img src={imagesInstance.logoNgang} alt="" />
      </Link>

      {user ? (
        <span className={style.user_info}>{`Hello, ${user.email}!`}</span>
      ) : (
        <div className={style.button}>
          <span>Đăng nhập</span>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      )}
    </div>
  );
};

export default NavbarAdmin;
