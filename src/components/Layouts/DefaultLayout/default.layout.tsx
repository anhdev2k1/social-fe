import { IChildrenComponentProps } from "../../../configs/route";
import Footer from "../../Footer/footer";
import Navbar from "../../Navbar/navbar";

const DefaultLayout: React.FC<IChildrenComponentProps> = ({ children }) => {
  return (
    <div className="main__inner">
      <Navbar />
      <div style={{paddingTop: "100px"}}>
      {children}
      <Footer/>
      </div>
    </div>
  );
};

export default DefaultLayout;
