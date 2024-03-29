import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IChildrenComponentProps } from "../../../configs/route";
import Footer from "../../Footer/footer";
import Navbar from "../../Navbar/navbar";
import "./default.scss";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
const DefaultLayout: React.FC<IChildrenComponentProps> = ({ children }) => {
  return (
    <div className="main__inner">
      <Navbar />
      <div style={{ paddingTop: "100px" }}>
        <div className="style.wrapper">
          <div className="wrapper">
            <a href="https://zalo.me/0888535288" className="ring">
              <div className="coccoc-alo-phone coccoc-alo-green coccoc-alo-show">
                <div className="coccoc-alo-ph-circle"></div>
                <div className="coccoc-alo-ph-circle-fill"></div>
                <div className="coccoc-alo-ph-img-circle">
                  <FontAwesomeIcon icon={faPhone} className="icon_phone"/>
                </div>
              </div>
            </a>
          </div>
        </div>
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default DefaultLayout;
