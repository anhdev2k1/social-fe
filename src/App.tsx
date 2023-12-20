import style from "./assets/globals/_global.module.scss";
import { Routes, Route } from "react-router-dom";
import { IRoutes, publicRoutes } from "./configs/route";
import DefaultLayout from "./components/Layouts/DefaultLayout/default.layout";
import { Fragment, useEffect } from "react";
import { useAppDispatch } from "./redux/hook";
import { userApi } from "./apis/user.api";
import { getUser } from "./redux/features/user";
/* eslint-disable @typescript-eslint/ban-ts-comment */
if (!("process" in window)) {
  // @ts-expect-error
  window.process = {};
}
function App() {

  const dispatch = useAppDispatch();
  useEffect(() => {
    const getCurrentUser = async () => {
      const res = await userApi.getMe()
      if(res.data){
        dispatch(getUser(res.data))
      }
    };
    getCurrentUser();
  }, []);
  return (
    <div className={style.wrapper}>
      <Routes>
        {publicRoutes.map((route: IRoutes, index) => {
          const Page = route.component;
          let Layout = DefaultLayout;
          if (route.layout) {
            Layout = route.layout;
          } else {
            Layout = Fragment;
          }
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page/>
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
