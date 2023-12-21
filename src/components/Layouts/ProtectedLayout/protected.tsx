import { Navigate, Outlet } from 'react-router-dom';
interface IProtectedRouteProps {
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   user: any;
   redirectPath: string;
   children: JSX.Element;
}
const ProtectedRoute = ({ user, redirectPath, children }: IProtectedRouteProps) => {
    console.log("user", user);
    
   if (user.email === "") {
      return <Navigate to={redirectPath} replace />;
   }
   return children ? children : <Outlet />;
};

export default ProtectedRoute;