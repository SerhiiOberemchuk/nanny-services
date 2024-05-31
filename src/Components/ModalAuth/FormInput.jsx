import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import style from "./Modal.module.css";
import { LoginSchema, SignupSchema } from "./usersSchema";
import { TYPE_MODAL } from "../../Constans/constans";
import { useState } from "react";
import icons from "../../assets/icons/iconsSprite.svg";
import { modalWindowContent } from "./modalContent";
import { userLogIn, userSignUp } from "../../redux/users/operation";
import { closeModalLoginRegistration } from "../../redux/users/usersSlice";

function FormInput() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { modalType } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  function handleShowPassword() {
    setIsPasswordVisible((prev) => !prev);
  }
  const iconShowPassword = isPasswordVisible ? "#icon-eye" : "#icon-eyeOff";

  function handleSubmit(values) {
    if (modalType === TYPE_MODAL.registration) {
      dispatch(userSignUp(values));
    }
    if (modalType === TYPE_MODAL.login) {
      dispatch(userLogIn(values));
    }
  }

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validationSchema={
        modalType === TYPE_MODAL.registration ? SignupSchema : LoginSchema
      }
      onSubmit={(values) => {
        handleSubmit(values);
        dispatch(closeModalLoginRegistration());
      }}
    >
      {({ errors, touched }) => (
        <Form className={style.formField}>
          {modalType === TYPE_MODAL.registration && (
            <div className={style.inputField}>
              <label htmlFor="name" className={style.fieldLabel}>
                Name
              </label>
              <Field id="name" name="name" className={style.input} />
              {errors.name && touched.name ? (
                <div className={style.errorsSchema}>{errors.name}</div>
              ) : null}
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
            />
            {errors.email && touched.email ? (
              <div className={style.errorsSchema}>{errors.email}</div>
            ) : null}
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
            />
            {errors.password && touched.password ? (
              <div className={style.errorsSchema}>{errors.password}</div>
            ) : null}
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
      )}
    </Formik>
  );
}

export default FormInput;
