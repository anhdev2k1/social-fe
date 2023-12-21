import { IChildrenComponentProps } from "../../../configs/route";
import Footer from "../../Footer/footer";
import Navbar from "../../Navbar/navbar";
import "./default.scss";
const DefaultLayout: React.FC<IChildrenComponentProps> = ({ children }) => {
  return (
    <div className="main__inner">
      <Navbar />
      <div style={{ paddingTop: "100px" }}>
        <div className="style.wrapper">
          <div className="wrapper">
            <div className="ring">
              <div className="coccoc-alo-phone coccoc-alo-green coccoc-alo-show">
                <div className="coccoc-alo-ph-circle"></div>
                <div className="coccoc-alo-ph-circle-fill"></div>
                <div className="coccoc-alo-ph-img-circle"></div>
              </div>
            </div>
          </div>
        </div>
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default DefaultLayout;
