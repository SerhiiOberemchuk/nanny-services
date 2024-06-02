import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import style from "./Modal.module.css";
import icons from "../../assets/icons/iconsSprite.svg";
import { closeModalLoginRegistration } from "../../redux/users/usersSlice";
import { TYPE_MODAL } from "../../Constans/constans";

import FormInput from "./FormInput";
import { modalWindowContent } from "./modalContent";

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
    maxWidth: "565px",
    zIndex: 1001,
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    zIndex: 1000,
  },
};

Modal.setAppElement("#root");

function ModalAuth() {
  const { isModalLoginRegistration, modalType } = useSelector(
    (state) => state.users
  );
  const dispatch = useDispatch();

  function handleCloseModal() {
    dispatch(closeModalLoginRegistration());
  }

  return (
    <Modal
      isOpen={isModalLoginRegistration}
      style={customStyles}
      onRequestClose={handleCloseModal}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
    >
      <section className={style.modalFormSection}>
        <button onClick={handleCloseModal} className={style.closeButton}>
          <svg className={style.iconSvg}>
            <use href={`${icons}#icon-iconX`}></use>
          </svg>
        </button>
        <h2 className={style.titleModal}>
          {modalType === TYPE_MODAL.login && modalWindowContent.titleLogin}
          {modalType === TYPE_MODAL.registration &&
            modalWindowContent.titleRegistration}
        </h2>
        <p className={style.modalDescription}>
          {modalType === TYPE_MODAL.login &&
            modalWindowContent.descriptionLogin}
          {modalType === TYPE_MODAL.registration &&
            modalWindowContent.descriptionRegistration}
        </p>
        <FormInput />
      </section>
    </Modal>
  );
}

export default ModalAuth;
