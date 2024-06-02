import { NavLink } from "react-router-dom";
import style from "./Header.module.css";
import { useSelector } from "react-redux";
function NavigationList() {
  const { isLoggedIn } = useSelector((state) => state.users);
  return (
    <ul className={style.navigationList}>
      <NavLink to={"/"} className={style.navLink}>
        Home
      </NavLink>
      <NavLink
        to={"/nannies"}
        className={({ isActive }) =>
          `${style.navLink} ${isActive ? style.active : ""}`
        }
      >
        Nannies
      </NavLink>
    </ul>
  );
}

export default NavigationList;
