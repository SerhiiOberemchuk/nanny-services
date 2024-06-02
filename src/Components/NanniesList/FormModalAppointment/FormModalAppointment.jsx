import React from "react";
import { Form, Formik } from "formik";
import { appointmentSchema } from "./appointmentSchema";
import style from "./FormModalAppointment.module.css";
import InputField from "./InputField";

const FormModalAppointment = () => {
  return (
    <Formik
      initialValues={{
        address: "",
        numberPhone: "+380",
        age: "",
        time: "",
        email: "",
        fatherName: "",
        comment: "",
      }}
      onSubmit={(values) => console.log(values)}
      validationSchema={appointmentSchema}
    >
      {() => (
        <Form className={style.form}>
          <div className={style.blockField}>
            <InputField
              id="address"
              name="address"
              placeholder="Address"
              ariaLabel="Address"
            />
            <InputField
              id="numberPhone"
              name="numberPhone"
              placeholder="+380"
              ariaLabel="number phone"
            />
            <InputField
              id="age"
              name="age"
              placeholder="Child's age"
              ariaLabel="Child's age"
            />
            <InputField
              id="time"
              name="time"
              type="time"
              placeholder="00:00"
              ariaLabel="time"
            />
          </div>
          <InputField
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            ariaLabel="Email"
          />
          <InputField
            id="fatherName"
            name="fatherName"
            placeholder="Father's or mother's name"
            ariaLabel="Father's or mother's name"
          />
          <InputField
            id="comment"
            name="comment"
            placeholder="Comment"
            ariaLabel="Comment"
            as="textarea"
          />
          <button type="submit" className={style.buttonSubmit}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormModalAppointment;
