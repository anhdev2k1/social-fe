import style from "./assets/globals/_global.module.scss";
import { Routes, Route } from "react-router-dom";
import { IRoutes, privateRoutes, publicRoutes } from "./configs/route";
import DefaultLayout from "./components/Layouts/DefaultLayout/default.layout";
import { Fragment, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./redux/hook";
import { userApi } from "./apis/user.api";
import { getUser } from "./redux/features/user";
import ProtectedRoute from "./components/Layouts/ProtectedLayout/protected";
import { RootState } from "./redux/store";
/* eslint-disable @typescript-eslint/ban-ts-comment */
if (!("process" in window)) {
  // @ts-expect-error
  window.process = {};
}
function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const getCurrentUser = async () => {
      const res = await userApi.getMe();
      if (res.data) {
        dispatch(getUser(res.data));
      }
    };
    getCurrentUser();
  }, []);
  const currentUser = useAppSelector((state: RootState) => state.user.user);
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
                  <Page />
                </Layout>
              }
            />
          );
        })}

        {privateRoutes.map((route: IRoutes, index) => {
          const Page = route.component;
          let Layout = DefaultLayout;

          if (route.layout) {
            Layout = route.layout;
          } else if (route.layout === null) {
            Layout = Fragment;
          }

          return (
            <Route
              key={index}
              path={route.path}
              element={
                <ProtectedRoute user={currentUser} redirectPath="/login">
                  <Layout>
                    <Page />
                  </Layout>
                </ProtectedRoute>
              }
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
