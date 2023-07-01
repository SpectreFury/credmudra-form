import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { TextField } from "@mui/material";
const PHONENUMBER_REGEX = /^[0-9]+$/;

const SignupSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .max(10, "Too Long!")
    .required("Mobile number is required"),
});

const Initial = ({ handleFormStep }) => {
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
          setSubmitting(false);
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
            onSubmit={(e) => {
              e.preventDefault();
            }}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <label htmlFor="phoneNumber" style={{ color: "white" }}>
              Enter your 10 digit mobile number to proceed:
            </label>
            <TextField
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              onChange={(e) => {
                if (e.target.value.length > 10) return;
                if (
                  e.target.value === "" ||
                  PHONENUMBER_REGEX.test(e.target.value)
                ) {
                  handleChange(e);
                }
              }}
              onBlur={handleBlur}
              value={values.phoneNumber}
              placeholder="XXXXXXXXXX"
              style={{ backgroundColor: "gray" }}
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

export default Initial;
