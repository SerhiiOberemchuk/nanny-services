import * as Yup from "yup";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Too Short!")
    .max(12, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .matches(emailRegex, "Invalid email domain")
    .required("Required"),
});

export const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(6, "Too Short!")
    .max(12, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .matches(emailRegex, "Invalid email domain")
    .required("Required"),
});
