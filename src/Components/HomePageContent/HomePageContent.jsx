import style from "./HomePageContent.module.css";
import icons from "../../assets/icons/iconsSprite.svg";
import Header from "../Header/Header";
import { useDispatch } from "react-redux";
import {
  openModalLoginRegistration,
  setTypeOfModalLoginRegistration,
} from "../../redux/users/usersSlice";
import { TYPE_MODAL } from "../../Constans/constans";
import ModalAuth from "../ModalAuth/ModalAuth";

function HomePageContent() {
  const dispatch = useDispatch();
  function handleButton() {
    dispatch(setTypeOfModalLoginRegistration(TYPE_MODAL.registration));
    dispatch(openModalLoginRegistration());
  }
  return (
    <section className={style.homePage}>
      <header className={style.header}>
        <Header />
      </header>
      <section className={style.textSection}>
        <div className={style.titleTextBox}>
          <h1 className={style.title}>Make Life Easier for the Family:</h1>
          <p className={style.textDescription}>
            Find Babysitters Online for All Occasions
          </p>
          <button type="button" className={style.button} onClick={handleButton}>
            <span> Get started</span>
            <svg className={style.icon}>
              <use href={`${icons}#icon-ArrowTopRight`}></use>
            </svg>
          </button>
        </div>
      </section>
      <section className={style.imageSection}>
        <div className={style.numbersNanny}>
          <span className={style.iconNumbers}>
            <svg className={style.iconSvg}>
              <use href={`${icons}#icon-iconCheck`}></use>
            </svg>
          </span>
          <div className={style.numbersText}>
            <span>Experienced nannies</span>
            <span className={style.numbersValue}>15000</span>
          </div>
        </div>
      </section>
      <ModalAuth />
    </section>
  );
}

export default HomePageContent;
