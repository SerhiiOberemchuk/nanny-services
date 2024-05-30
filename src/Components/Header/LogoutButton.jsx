import style from "./Header.module.css";
import icons from "../../assets/icons/iconsSprite.svg";
import { useDispatch, useSelector } from "react-redux";
import { userSignOut } from "../../redux/users/operation";

function LogoutButton() {
  const { userName } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  return (
    <div className={style.listLogout}>
      <div className={style.userName}>
        <div className={style.icondiv}>
          <svg className={style.iconUser}>
            <use href={`${icons}#icon-user`}></use>
          </svg>
        </div>
        <span>{userName}</span>
      </div>
      <button
        type="button"
        className={style.logoutButton}
        onClick={() => dispatch(userSignOut())}
      >
        Log out
      </button>
    </div>
  );
}

export default LogoutButton;
