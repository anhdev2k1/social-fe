import React from "react";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignsPost, faTag } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import style from "./sidebar.module.scss";
import imagesInstance from "../../assets/images";
type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps["items"] = [
  getItem("Quản lý dịch vụ", "sub1", <FontAwesomeIcon icon={faTag} />, [
    getItem("Danh sách dịch vụ", "/admin/services"),
    getItem("Tạo dịch vụ", "/admin/services/create"),
  ]),

  getItem("Quản lý bài đăng", "sub2", <FontAwesomeIcon icon={faSignsPost} />, [
    getItem("Danh sách bài đăng", "/admin/posts"),
    getItem("Tạo bài đăng", "/admin/posts/create"),
  ]),
  getItem("Quản lý tài khoản", "2", <FontAwesomeIcon icon={faTag} />),
  getItem("Thống kê","3", <FontAwesomeIcon icon={faTag} />),
  getItem("Quản lý File","4", <FontAwesomeIcon icon={faTag} />),
];

const SidebarAdmin: React.FC = () => {
  const navigate = useNavigate();
  const onClick: MenuProps["onClick"] = (e) => {
    navigate(`${e.key}`);
  };

  return (
    <div className={style.sidebar_menu}>
      <div className={style.sidebar_heading}>
        <img src={imagesInstance.logoNgang} alt="" />
      </div>
      <Menu
        onClick={onClick}
        style={{ width: "300px", height: "100vh" }}
        mode="inline"
        items={items}
      />
    </div>
  );
};

export default SidebarAdmin;
