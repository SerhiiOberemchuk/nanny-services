import style from "./PrivateLayout.module.css";
import LogoutButton from "../Header/LogoutButton";
import NavigationList from "../Header/NavigationList";
import LoginButton from "../Header/LoginButton";
import { useSelector } from "react-redux";

function Header() {
  const { isLoggedIn } = useSelector((state) => state.users);
  return (
    <div className={style.header}>
      <span className={style.titleNanny}>Nanny.Services</span>

      <div className={style.navigation}>
        <NavigationList />
      </div>
      {isLoggedIn ? <LogoutButton /> : <LoginButton />}
    </div>
  );
}

export default Header;
