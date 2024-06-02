import * as Yup from "yup";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /^\+380\d{9}$/;
const ageRegex = /^\d{1,2}$/;
const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;

export const appointmentSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),

  email: Yup.string()
    .email("Invalid email")
    .matches(emailRegex, "Invalid email domain")
    .required("Required"),

  address: Yup.string().required("Required"),

  numberPhone: Yup.string()
    .matches(phoneRegex, "Invalid phone number format")
    .required("Required"),

  age: Yup.string().matches(ageRegex, "Invalid age").required("Required"),

  time: Yup.string()
    .matches(timeRegex, "Invalid time format")
    .required("Required"),

  fatherName: Yup.string().required("Required"),

  comment: Yup.string().required("Required"),
});
