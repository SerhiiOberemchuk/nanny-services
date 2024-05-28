import style from "./Header.module.css";
import icons from "../../assets/icons/iconsSprite.svg";

function LogoutButton() {
  return (
    <div className={style.listLogout}>
      <div className={style.userName}>
        <div className={style.icondiv}>
          <svg className={style.iconUser}>
            <use href={`${icons}#icon-user`}></use>
          </svg>
        </div>
        <span>Name</span>
      </div>
      <button type="button" className={style.logoutButton}>
        Log out
      </button>
    </div>
  );
}

export default LogoutButton;
