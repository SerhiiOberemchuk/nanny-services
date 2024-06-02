import style from "./ListReviews.module.css";
import icons from "../../../assets/icons/iconsSprite.svg";
import ModalAppointment from "../ModalAppointment/ModalAppointment";
import { useState } from "react";

function ListReviews({ nanny }) {
  const [isModalAppointment, setIsModalAppointment] = useState(false);
  function openModalAppointment() {
    setIsModalAppointment(true);
  }
  function closeModal() {
    setIsModalAppointment(false);
  }
  return (
    <ul className={style.reviewsList}>
      {nanny.reviews.map((item, index) => (
        <li key={index} className={style.itemReviews}>
          <div className={style.reviewerTitle}>
            <div className={style.reviewerLeter}>
              <span>{item.reviewer.substr(0, 1)}</span>
            </div>
            <div>
              <h3 className={style.reviewerName}>{item.reviewer}</h3>
              <span className={style.reviewValueBox}>
                <svg className={style.iconSvgStar}>
                  <use href={`${icons}#icon-star`}></use>
                </svg>
                <span className={style.reviewValue}>
                  {item.rating.toFixed(1)}
                </span>
              </span>
            </div>
          </div>

          <p>{item.comment}</p>
        </li>
      ))}
      <button
        type="button"
        onClick={openModalAppointment}
        className={style.buttonAppointment}
      >
        Make an appointment
      </button>
      <ModalAppointment
        data={nanny}
        isModal={isModalAppointment}
        closeModal={closeModal}
      />
    </ul>
  );
}

export default ListReviews;
