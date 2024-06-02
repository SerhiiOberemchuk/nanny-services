import style from "./PrivateLayout.module.css";
import LogoutButton from "../Header/LogoutButton";
import NavigationList from "../Header/NavigationList";
import LoginButton from "../Header/LoginButton";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Header() {
  const { isLoggedIn } = useSelector((state) => state.users);
  return (
    <div className={style.header}>
      <span className={style.titleNanny}>Nanny.Services</span>

      <div className={style.navigation}>
        <NavigationList />
        {isLoggedIn && (
          <NavLink
            to={"/favorites"}
            className={({ isActive }) =>
              `${style.navLink} ${isActive ? style.active : ""}`
            }
          >
            Favorites
          </NavLink>
        )}
      </div>
      {isLoggedIn ? <LogoutButton /> : <LoginButton />}
    </div>
  );
}

export default Header;
