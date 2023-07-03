import React from "react";
import { Formik } from "formik";
import { TextField } from "@mui/material";
import * as Yup from "yup";
const OTP_REGEX = /^[0-9]+$/;

const OTPSchema = Yup.object().shape({
  otp: Yup.string()
    .max(6, "Too Long!")
    .min(6, "Too Short!")
    .required("OTP is required to continue forward!"),
});

const OTPScreen = ({ handleFormStep, formDetails }) => {
  return (
    <React.Fragment>
      <h1 style={{ color: "white" }}>Verify Mobile</h1>
      <Formik
        initialValues={{ otp: "" }}
        validationSchema={OTPSchema}
        onSubmit={(values, { setSubmitting }) => {
          handleFormStep("loanDetails");
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
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <label htmlFor="otp" style={{ color: "white" }}>
              Enter 6 digit OTP received on your mobile{" "}
              {formDetails.phoneNumber}
            </label>
            <TextField
              type="tel"
              name="otp"
              id="otp"
              onChange={(e) => {
                if (e.target.value.length > 6) return;
                if (e.target.value === "" || OTP_REGEX.test(e.target.value)) {
                  handleChange(e);
                }
              }}
              onBlur={handleBlur}
              value={values.otp}
              placeholder="OTP"
              style={{ backgroundColor: "gray" }}
            />
            <span style={{ color: "red" }}>{errors.otp}</span>
            <button type="submit" disabled={isSubmitting}>
              Next
            </button>
            <p style={{ color: "white" }}>
              Credmudra agents will never ask you to transfer money or OTP for
              verification or any other services
            </p>
          </form>
        )}
      </Formik>
    </React.Fragment>
  );
};

export default OTPScreen;
