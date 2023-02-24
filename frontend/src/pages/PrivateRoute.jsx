import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const userData = localStorage.getItem("Token");
  return userData && userData.access !== "" ? (
    <Outlet />
  ) : (
    <Navigate to="/sign-in" />
  );
};

export default PrivateRoute;
