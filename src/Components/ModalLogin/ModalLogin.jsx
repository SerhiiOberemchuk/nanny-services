import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { Field, Form, Formik } from "formik";
import style from "./Modal.module.css";
import icons from "../../assets/icons/iconsSprite.svg";
import { closeModalLoginRegistration } from "../../redux/users/usersSlice";
import { useState } from "react";
import { TYPE_MODAL } from "../../Constans/constans";

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
  },
};

const modalWindowContent = {
  titleLogin: "Log In",
  titleRegistration: "Registration",
  descriptionLogin:
    "Welcome back! Please enter your credentials to access your account and continue your babysitter search.",
  descriptionRegistration:
    "Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information.",
  titleButtonLogin: "Log In",
  titleButtonRegistration: "Sign Up",
};

Modal.setAppElement("#root");

function ModalLogin() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { isModalLoginRegistration, modalType } = useSelector(
    (state) => state.users
  );
  const dispatch = useDispatch();
  console.log(modalType);
  function handleCloseModal() {
    dispatch(closeModalLoginRegistration());
  }

  function handleShowPassword() {
    setIsPasswordVisible((prev) => !prev);
  }
  const iconShowPassword = isPasswordVisible ? "#icon-eye" : "#icon-eyeOff";

  return (
    <div>
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

          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
            }}
            onSubmit={() => {
              console.log("form submit:");
            }}
          >
            <Form className={style.formField}>
              {modalType === TYPE_MODAL.registration && (
                <div className={style.inputField}>
                  <label htmlFor="name" className={style.fieldLabel}>
                    Name
                  </label>
                  <Field id="name" name="name" className={style.input}></Field>
                </div>
              )}
              <div className={style.inputField}>
                <label htmlFor="email" className={style.fieldLabel}>
                  Email
                </label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  className={style.input}
                ></Field>
              </div>
              <div className={style.inputField}>
                <label htmlFor="password" className={style.fieldLabel}>
                  Password
                </label>
                <Field
                  id="password"
                  name="password"
                  type={`${isPasswordVisible ? "text" : "password"}`}
                  className={style.input}
                ></Field>
                <button
                  type="button"
                  className={style.buttonPassword}
                  onClick={handleShowPassword}
                >
                  <svg className={style.iconPassword}>
                    <use href={`${icons}${iconShowPassword}`}></use>
                  </svg>
                </button>
              </div>
              <button type="submit" className={style.buttonSubmit}>
                {modalType === TYPE_MODAL.login &&
                  modalWindowContent.titleButtonLogin}
                {modalType === TYPE_MODAL.registration &&
                  modalWindowContent.titleButtonRegistration}
              </button>
            </Form>
          </Formik>
        </section>
      </Modal>
    </div>
  );
}

export default ModalLogin;
