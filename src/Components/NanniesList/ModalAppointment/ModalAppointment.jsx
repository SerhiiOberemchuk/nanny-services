import Modal from "react-modal";
import style from "./ModalAppointment.module.css";
import FormModalAppointment from "../FormModalAppointment/FormModalAppointment";
import icons from "../../../assets/icons/iconsSprite.svg";

const customStyles = {
  content: {
    border: "none",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "30px",
    padding: "64px",
    // maxWidth: "565px",
    color: "#11101c",
    zIndex: 1001,
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    zIndex: 1000,
  },
};

Modal.setAppElement("#root");

function ModalAppointment({ data, isModal = false, closeModal }) {
  return (
    <Modal
      isOpen={isModal}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <div className={style.madalContent}>
        <button type="button" onClick={closeModal}>
          <svg className={style.iconSvg}>
            <use href={`${icons}#icon-iconX`}></use>
          </svg>
        </button>
        <h2 className={style.title}>Make an appointment with a babysitter</h2>
        <p className={style.description}>
          Arranging a meeting with a caregiver for your child is the first step
          to creating a safe and comfortable environment. Fill out the form
          below so we can match you with the perfect care partner.
        </p>
        <div className={style.nameAvatar}>
          <img
            src={data.avatar_url}
            alt="avatar nanny"
            className={style.avatar}
            width={44}
          />
          <div>
            <span className={style.youNanny}>Your nanny</span>
            <h3 className={style.nannyName}>{data.name}</h3>
          </div>
        </div>
        <FormModalAppointment />
      </div>
    </Modal>
  );
}

export default ModalAppointment;
