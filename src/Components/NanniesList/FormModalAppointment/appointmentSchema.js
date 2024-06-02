import * as Yup from "yup";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /^\+380\d{9}$/;
const ageRegex = /^\d{1,2}$/;
const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;

export const appointmentSchema = Yup.object().shape({
  address: Yup.string()
    .min(1, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  numberPhone: Yup.string()
    .matches(phoneRegex, "Invalid phone number format")
    .required("Required"),
  age: Yup.string()
    .min(1, "Too Short!")
    .max(2, "Too Long!")
    .required("Required"),
  time: Yup.string()
    .matches(timeRegex, "Invalid time format")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .matches(emailRegex, "Invalid email domain")
    .required("Required"),
  fatherName: Yup.string().required("Required"),
  comment: Yup.string().required("Required"),
});
