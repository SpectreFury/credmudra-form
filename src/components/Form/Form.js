import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .max(10, "Too Long!")
    .required("Mobile number is required"),
});

const Form = () => {
  return (
    <React.Fragment>
      <h1
        style={{
          color: "white",
        }}
      >
        Welcome to Credmudra
      </h1>
      <Formik
        initialValues={{ phoneNumber: "" }}
        validationSchema={SignupSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <label htmlFor="phoneNumber" style={{ color: "white" }}>
              Enter your 10 digit mobile number to proceed:
            </label>
            <input
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phoneNumber}
              placeholder="XXXXXXXXXX"
            />
            <span style={{ color: "red" }}>{errors.phoneNumber}</span>
            <button type="submit" disabled={isSubmitting}>
              Next
            </button>
          </form>
        )}
      </Formik>
    </React.Fragment>
  );
};

export default Form;
