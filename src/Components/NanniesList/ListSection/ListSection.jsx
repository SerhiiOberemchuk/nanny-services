import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./ListSection.module.css";
import { selectorNanniesArrey } from "../../../redux/nannies/selectors";
import { getNannies } from "../../../redux/nannies/operation";
import icons from "../../../assets/icons/iconsSprite.svg";
import { differenceInYears, parseISO } from "date-fns";

const currentData = new Date();

function ListSection() {
  const arrey = useSelector(selectorNanniesArrey);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNannies());
  }, [dispatch]);

  return (
    <ul className={style.list}>
      {arrey.map((nanny) => (
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
            <ul className={style.listCharacters}>
              <li className={style.charactersNanny}>
                <span>Age:</span>{" "}
                <span className={style.charactersValueAge}>
                  {differenceInYears(currentData, parseISO(nanny.birthday))}
                </span>
              </li>
              <li className={style.charactersNanny}>
                <span>Experience:</span>{" "}
                <span className={style.charactersValue}>
                  {nanny.experience}
                </span>
              </li>
              <li className={style.charactersNanny}>
                <span>Kids Age:</span>{" "}
                <span className={style.charactersValue}>{nanny.kids_age}</span>
              </li>
              <li className={style.charactersNanny}>
                <span>Characters:</span>{" "}
                <span className={style.charactersValue}>
                  {nanny.characters}
                </span>
              </li>
              <li className={style.charactersNanny}>
                <span>Education:</span>{" "}
                <span className={style.charactersValue}>{nanny.education}</span>
              </li>
            </ul>
            <p className={style.about}>{nanny.about}</p>
            <button type="button" className={style.buttonReadMore}>
              Read more
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ListSection;
