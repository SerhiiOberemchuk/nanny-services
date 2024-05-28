import { useSelector } from "react-redux";
import { selectorIsLoggedIn } from "../../redux/users/selectors";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children, redirectTo = "/" }) {
  const isLoggedIn = useSelector(selectorIsLoggedIn);
  return isLoggedIn ? children : <Navigate to={redirectTo} />;
}

export default PrivateRoute;
