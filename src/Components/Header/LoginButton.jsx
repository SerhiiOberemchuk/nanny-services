import { useDispatch } from "react-redux";
import style from "./Header.module.css";
import {
  openModalLoginRegistration,
  setTypeOfModalLoginRegistration,
} from "../../redux/users/usersSlice";
import { TYPE_MODAL } from "../../Constans/constans";

function LoginButton() {
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
  );
}

export default LoginButton;
