import { IChildrenComponentProps } from "../../../configs/route";
import NavbarAdmin from "../../Navbar/navbar.admin";
import SidebarAdmin from "../../SidebarAdmin/sidebar.admin";

const AdminLayout: React.FC<IChildrenComponentProps> = ({ children }) => {
  return (
    <div className="main__inner" style={{display: "flex", gap: "20px"}}>
      <SidebarAdmin/>
      <div style={{display: "flex", flexDirection: "column",gap: "20px", flex: "1"}}>
        <NavbarAdmin/>
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
