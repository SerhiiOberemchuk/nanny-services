import { differenceInYears, parseISO } from "date-fns";
import style from "./ListCharacters.module.css";

const currentData = new Date();

function ListCharacters({ nanny }) {
  return (
    <ul className={style.listCharacters}>
      <li className={style.charactersNanny}>
        <span>Age:</span>{" "}
        <span className={style.charactersValueAge}>
          {differenceInYears(currentData, parseISO(nanny.birthday))}
        </span>
      </li>
      <li className={style.charactersNanny}>
        <span>Experience:</span>{" "}
        <span className={style.charactersValue}>{nanny.experience}</span>
      </li>
      <li className={style.charactersNanny}>
        <span>Kids Age:</span>{" "}
        <span className={style.charactersValue}>{nanny.kids_age}</span>
      </li>
      <li className={style.charactersNanny}>
        <span>Characters:</span>{" "}
        <span className={style.charactersValue}>
          {nanny.characters
            .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
            .join(", ")}
        </span>
      </li>
      <li className={style.charactersNanny}>
        <span>Education:</span>{" "}
        <span className={style.charactersValue}>{nanny.education}</span>
      </li>
    </ul>
  );
}
export default ListCharacters;
