// InputField.jsx
import React from "react";
import { Field, ErrorMessage } from "formik";
import style from "./FormModalAppointment.module.css";

const InputField = ({
  id,
  name,
  type = "text",
  placeholder,
  ariaLabel,
  as = "input",
}) => (
  <div className={style.positionInput}>
    <label htmlFor={id} className={style.hiddenLabel}>
      {placeholder}
    </label>
    <Field
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      aria-label={ariaLabel}
      className={as === "textarea" ? style.textarea : style.field}
      as={as}
    />
    <ErrorMessage name={name} component="div" className={style.errorsSchema} />
  </div>
);

export default InputField;
