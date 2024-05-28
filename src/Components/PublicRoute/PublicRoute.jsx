import { useSelector } from "react-redux";
import { selectorIsLoggedIn } from "../../redux/users/selectors";
import { Navigate } from "react-router-dom";

function PublicRoute({ children, redirectTo = "/" }) {
  const isLoggedIn = useSelector(selectorIsLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : children;
}

export default PublicRoute;
