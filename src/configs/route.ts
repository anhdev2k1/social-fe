import Detail from "../components/Detail/detail";
import AdminLayout from "../components/Layouts/AdminLayout/adminLayout";
import DefaultLayout from "../components/Layouts/DefaultLayout/default.layout";
import About from "../pages/About/about";
import CreatePost from "../pages/Admin/createPost";
import CreateService from "../pages/Admin/createServices";
import Dashboard from "../pages/Admin/dashboard";
import Posts from "../pages/Admin/posts";
import ServicesAdmin from "../pages/Admin/services";
import Login from "../pages/Auth/login";
import Contact from "../pages/Contact/contact";
// import ListServiceLayout from "../components/Layouts/ListServiceLayout/listService.layout";
import Home from "../pages/Home/home";
import ListService from "../pages/ListServices/listService";
import SaleKit from "../pages/Salekit/salekit";
import Services from "../pages/Services/services";

export interface IChildrenComponentProps {
  children?: React.ReactNode;
}

export interface IRoutes {
  path: string;
  component: React.ComponentType;
  layout?: React.FC<IChildrenComponentProps> | null;
}

export const publicRoutes: IRoutes[] = [
  {
    path: "/login",
    component: Login,
    layout: null,
  },
  {
    path: "/",
    component: Home,
    layout: DefaultLayout,
  },

  {
    path: "/about",
    component: About,
    layout: DefaultLayout,
  },
  {
    path: "/services",
    component: ListService,
    layout: DefaultLayout,
  },

  {
    path: "/services/:tag",
    component: Services,
    layout: DefaultLayout,
  },

  {
    path: "/services/:tag/:id",
    component: Detail,
    layout: DefaultLayout,
  },

  {
    path: "/contact",
    component: Contact,
    layout: DefaultLayout,
  },
  
  {
    path: "/salekitvn",
    component: SaleKit,
    layout: DefaultLayout,
  },
  /*@Admin */
];

export const privateRoutes: IRoutes[] = [
  {
    path: "/admin",
    component: Dashboard,
    layout: AdminLayout,
  },
  {
    path: "/admin/services",
    component: ServicesAdmin,
    layout: AdminLayout,
  },
  {
    path: "/admin/services/create",
    component: CreateService,
    layout: AdminLayout,
  },
  {
    path: "/admin/posts",
    component: Posts,
    layout: AdminLayout,
  },
  {
    path: "/admin/posts/create",
    component: CreatePost,
    layout: AdminLayout,
  },
];
