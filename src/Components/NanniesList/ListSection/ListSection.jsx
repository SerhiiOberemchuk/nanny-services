import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./ListSection.module.css";
import { selectorNanniesArrey } from "../../../redux/nannies/selectors";
import { getNannies } from "../../../redux/nannies/operation";
import icons from "../../../assets/icons/iconsSprite.svg";
import ListReviews from "../ListReviews/ListReviews";
import ListCharacters from "../ListCharacters/ListCharacters";

function ListSection() {
  const [isReview, setIsReview] = useState([]);
  const nanniesCatalog = useSelector(selectorNanniesArrey);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNannies());
  }, [dispatch]);

  const handleButtonReview = (e) => {
    setIsReview((prev) => [...prev, e.target.id]);
  };

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
                <button type="button" className={style.buttonFavorite}>
                  <svg className={style.iconSvgFavorite}>
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
