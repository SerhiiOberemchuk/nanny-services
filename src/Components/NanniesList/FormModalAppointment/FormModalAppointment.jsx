import { Field, Form, Formik } from "formik";
import style from "./FormModalAppointment.module.css";
import { appointmentSchema } from "./appointmentSchema";

function FormModalAppointment() {
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
      {({ errors, touched }) => (
        <Form className={style.form}>
          <div className={style.blockField}>
            <div className={style.positionInput}>
              <label
                htmlFor="address"
                style={{ position: "absolute", left: "-9999px" }}
              ></label>
              <Field
                type="text"
                id="address"
                name="address"
                placeholder="Address"
                aria-label="Address"
                className={style.field}
              />
              {errors.address && touched.address ? (
                <div className={style.errorsSchema}>{errors.address}</div>
              ) : null}
            </div>
            <label
              htmlFor="numberPhone"
              style={{ position: "absolute", left: "-9999px" }}
            ></label>
            <Field
              type="text"
              id="numberPhone"
              name="numberPhone"
              placeholder="+380"
              aria-label="number phone"
              className={style.field}
            />
            <label
              htmlFor="age"
              style={{ position: "absolute", left: "-9999px" }}
            ></label>
            <Field
              type="text"
              id="age"
              name="age"
              placeholder="Child's age"
              aria-label="Child's age"
              className={style.field}
            />
            <label
              htmlFor="time"
              style={{ position: "absolute", left: "-9999px" }}
            ></label>
            <Field
              type="time"
              id="time"
              name="time"
              placeholder="00:00"
              aria-label="time"
              className={style.field}
            />
          </div>

          <label
            htmlFor="email"
            style={{ position: "absolute", left: "-9999px" }}
          ></label>
          <Field
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            aria-label="Email"
            className={style.field}
          />
          <label
            htmlFor="fatherName"
            style={{ position: "absolute", left: "-9999px" }}
          ></label>
          <Field
            type="text"
            id="fatherName"
            name="fatherName"
            placeholder="Father's or mother's name"
            aria-label="Father's or mother's name"
            className={style.field}
          />
          <label
            htmlFor="comment"
            style={{ position: "absolute", left: "-9999px" }}
          ></label>
          <Field
            as="textarea"
            id="comment"
            name="comment"
            placeholder="Comment"
            aria-label="Comment"
            className={style.textarea}
          />
          <button type="submit" className={style.buttonSubmit}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default FormModalAppointment;
