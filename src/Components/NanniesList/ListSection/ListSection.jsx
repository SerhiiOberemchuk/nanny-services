import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./ListSection.module.css";
import icons from "../../../assets/icons/iconsSprite.svg";
import ListReviews from "../ListReviews/ListReviews";
import ListCharacters from "../ListCharacters/ListCharacters";
import {
  selectorFavoritesNannies,
  selectorIsLoggedIn,
} from "../../../redux/users/selectors";
import { toast } from "react-toastify";
import { updateFavorit } from "../../../redux/users/operation";
import { updateFavoritesState } from "../../../redux/users/usersSlice";

const createFavoritesArray = (favoritesNannies, nanny) => {
  const data = favoritesNannies.some((item) => item.id === nanny.id)
    ? (favoritesNannies = favoritesNannies.filter(
        (item) => item.id !== nanny.id
      ))
    : (favoritesNannies = [...favoritesNannies, nanny]);

  return data;
};

function ListSection({ nanniesCatalog }) {
  const [isReview, setIsReview] = useState([]);
  const favorites = useSelector(selectorFavoritesNannies);
  const isLoggined = useSelector(selectorIsLoggedIn);
  const { userId } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  const handleFavoriteButton = (userId, nanny) => {
    if (!isLoggined) {
      toast.warn("Please log in to continue.");
      return;
    }
    const favoritesArray = createFavoritesArray(favorites, nanny);
    dispatch(updateFavorit({ userId, favoritesArray }));
    dispatch(updateFavoritesState(favoritesArray));
  };

  const handleButtonReview = useCallback((e) => {
    setIsReview((prev) => [...prev, e.target.id]);
  }, []);

  return (
    <ul className={style.list}>
      {nanniesCatalog.map((nanny) => (
        <li key={nanny.id} className={style.listItem}>
          <div className={style.imgSection}>
            <img
              src={nanny.avatar_url}
              alt={nanny.name}
              className={style.image}
            />
            <div className={style.status}>
              <div className={style.statusDisable}></div>
            </div>
          </div>
          <div className={style.infoSection}>
            <div className={style.nameSection}>
              <div>
                <span>Nanny</span>
                <h2 className={style.nannyName}>{nanny.name}</h2>
              </div>
              <div className={style.locationFavorite}>
                <div className={style.locationSection}>
                  <span className={style.spanLocation}>
                    <svg className={style.iconSvg}>
                      <use href={`${icons}#icon-map`}></use>
                    </svg>
                    <span>{nanny.location}</span>
                  </span>
                  <span className={style.spanLocation}>
                    <svg className={style.iconSvgStar}>
                      <use href={`${icons}#icon-star`}></use>
                    </svg>
                    <span>Rating: {nanny.rating}</span>
                  </span>
                  <span>
                    Price / 1 hour:{" "}
                    <span className={style.spanPrice}>
                      {nanny.price_per_hour}$
                    </span>
                  </span>
                </div>
                <button
                  type="button"
                  className={style.buttonFavorite}
                  onClick={() => handleFavoriteButton(userId, nanny)}
                >
                  <svg
                    className={`${style.iconSvgFavorite} ${
                      favorites.some((item) => item.id === nanny.id)
                        ? style.isFavorite
                        : ""
                    }`}
                  >
                    <use href={`${icons}#icon-heart`}></use>
                  </svg>
                </button>
              </div>
            </div>
            <ListCharacters nanny={nanny} />
            <p className={style.about}>{nanny.about}</p>
            {!isReview.includes(nanny.id) ? (
              <button
                type="button"
                id={nanny.id}
                className={style.buttonReadMore}
                onClick={handleButtonReview}
                aria-label="show reviews"
              >
                Read more
              </button>
            ) : (
              <ListReviews nanny={nanny} />
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ListSection;
