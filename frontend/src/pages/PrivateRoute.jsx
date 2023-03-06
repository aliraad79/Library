import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const userData = localStorage.getItem("Token");
  return userData && userData !== "" ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
