import style from "./PrivateLayout.module.css";
import LogoutButton from "../Header/LogoutButton";
import NavigationList from "../Header/NavigationList";

function Header() {
  return (
    <div className={style.header}>
      <span className={style.titleNanny}>Nanny.Services</span>

      <div className={style.navigation}>
        <NavigationList isFavorite={true} />
      </div>

      <LogoutButton />
    </div>
  );
}

export default Header;
