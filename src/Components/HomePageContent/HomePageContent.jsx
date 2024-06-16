import style from "./HomePageContent.module.css";
import icons from "../../assets/icons/iconsSprite.svg";
import Header from "../Header/Header";
import { useDispatch } from "react-redux";
import {
  openModalLoginRegistration,
  setTypeOfModalLoginRegistration,
  setUserData,
} from "../../redux/users/usersSlice";
import { TYPE_MODAL } from "../../Constans/constans";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { dbFirestore } from "../../Api/firebaseConfig";

function HomePageContent() {
  const dispatch = useDispatch();
  function handleButton() {
    dispatch(setTypeOfModalLoginRegistration(TYPE_MODAL.registration));
    dispatch(openModalLoginRegistration());
  }
  const auth = getAuth();
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const docRef = doc(dbFirestore, "users", user.uid);
      const docSnap = await getDoc(docRef);
      dispatch(
        setUserData({
          userId: user.uid,
          userName: user.displayName,
          userEmail: user.email,
          favoritesNannies: docSnap.data()?.favoritesNannies || [],
        })
      );
    }
  });
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
    </section>
  );
}

export default HomePageContent;
