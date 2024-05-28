import { NavLink } from "react-router-dom";
import style from "./Header.module.css";
function NavigationList({ isFavorite = false }) {
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
      {isFavorite && (
        <NavLink
          to={"/favorites"}
          className={({ isActive }) =>
            `${style.navLink} ${isActive ? style.active : ""}`
          }
        >
          Favorites
        </NavLink>
      )}
    </ul>
  );
}

export default NavigationList;
