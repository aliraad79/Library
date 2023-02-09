import { Navigate, Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userJWTAtom } from "../../state/auth";

const GuestRoute = () => {
  const userData = useRecoilValue(userJWTAtom);
  return userData.access !== "" ? <Navigate to="/" /> : <Outlet />;
};

export default GuestRoute;
