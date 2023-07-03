import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { TextField, Checkbox, FormControlLabel } from "@mui/material";
const PHONENUMBER_REGEX = /^[0-9]+$/;

const SignupSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .max(10, "Too Long!")
    .required("Mobile number is required"),
  acceptTerms: Yup.boolean().oneOf(
    [true],
    "Accept the terms to continue forward."
  ),
});

const Initial = ({ handleFormStep, setFormDetails }) => {
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
        initialValues={{ phoneNumber: "", acceptTerms: false }}
        validationSchema={SignupSchema}
        onSubmit={(values, { setSubmitting }) => {
          setFormDetails((prev) => ({
            ...prev,
            phoneNumber: values.phoneNumber,
          }));
          console.log(values);
          handleFormStep("otp");
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
            <div>
              <FormControlLabel
                style={{ color: "white" }}
                control={<Checkbox checked={values.acceptTerms} />}
                label="
                By continuing, I agree to Credmudra's Privacy Policy and Terms &
                Conditions and receive communications from Credmudra via SMS,
                E-mail, and WhatsApp."
                name="acceptTerms"
                onChange={handleChange}
              />
            </div>
            <span style={{ color: "red" }}>{errors.acceptTerms}</span>
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
