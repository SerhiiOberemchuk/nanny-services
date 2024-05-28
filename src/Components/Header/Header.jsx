import { NavLink } from "react-router-dom";
import style from "./Header.module.css";

import LoginButton from "./LoginButton";
import { useSelector } from "react-redux";
import { selectorIsLoggedIn } from "../../redux/users/selectors";
import LogoutButton from "./LogoutButton";
import NavigationList from "./NavigationList";

function Header() {
  const isLoggedIn = useSelector(selectorIsLoggedIn);
  return (
    <div className={style.headerContainer}>
      <span className={style.titleNanny}>Nanny.Services</span>
      <div className={style.navButton}>
        <NavigationList />
        {!isLoggedIn && <LoginButton />}
        {isLoggedIn && <LogoutButton />}
      </div>
    </div>
  );
}

export default Header;
