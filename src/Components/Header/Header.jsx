import { NavLink } from "react-router-dom";
import style from "./Header.module.css";
import { useDispatch } from "react-redux";
import {
  openModalLoginRegistration,
  setTypeOfModalLoginRegistration,
} from "../../redux/users/usersSlice";
import { TYPE_MODAL } from "../../Constans/constans";

function Header() {
  const dispatch = useDispatch();
  function handleLoginButton() {
    dispatch(setTypeOfModalLoginRegistration(TYPE_MODAL.login));
    dispatch(openModalLoginRegistration());
  }
  function handleRegistrationButton() {
    dispatch(setTypeOfModalLoginRegistration(TYPE_MODAL.registration));
    dispatch(openModalLoginRegistration());
  }

  return (
    <div className={style.headerContainer}>
      <span className={style.titleNanny}>Nanny.Services</span>
      <div className={style.navButton}>
        <ul className={style.navigationList}>
          <NavLink
            className={({ isActive }) =>
              `${style.navLink} ${isActive ? style.active : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${style.navLink} ${isActive ? style.active : ""}`
            }
          >
            Nannies
          </NavLink>
        </ul>
        <ul className={style.buttonList}>
          <li>
            <button
              type="button"
              className={style.loginButton}
              onClick={handleLoginButton}
            >
              Log In
            </button>
          </li>
          <li>
            <button
              type="button"
              className={style.registerButton}
              onClick={handleRegistrationButton}
            >
              Registration
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
