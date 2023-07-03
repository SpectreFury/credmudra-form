import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Slider, FormControlLabel, Input, TextField } from "@mui/material";

const LoanDetailsSchema = Yup.object().shape({
  loanAmount: Yup.number()
    .min(1000, "Too small!")
    .max(1000000, "Too large!")
    .required("The amount is required to continue forward!"),
  loanTenure: Yup.number()
    .min(1, "Too small!")
    .max(60, "Too large!")
    .required("The amount is required to continue forward!"),
  panNumber: Yup.string()
    .max(10, "Too large!")
    .required("The PAN Number is required to continue forward!"),
  emailAddress: Yup.string()
    .email("Enter a valid email address!")
    .required("Email address is required to continue forward!"),
});

const amountMarks = [
  {
    value: 1000,
    label: "1000",
  },
  {
    value: 1000000,
    label: "1000000",
  },
];
const tenureMarks = [
  {
    value: 1,
    label: "1 Month",
  },
  {
    value: 60,
    label: "60 Month",
  },
];

const LoanDetails = ({ handleFormStep }) => {
  return (
    <React.Fragment>
      <h1 style={{ color: "white" }}>Loan Details</h1>
      <Formik
        initialValues={{
          loanAmount: 0,
          loanTenure: 0,
          panNumber: "",
          emailAddress: "",
        }}
        validationSchema={LoanDetailsSchema}
        onSubmit={(values, { setSubmitting }) => {
          handleFormStep("employmentType");
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
            <label htmlFor="loanAmount" style={{ color: "white" }}>
              Enter your loan amount:
            </label>
            <FormControlLabel
              style={{ color: "white" }}
              control={
                <Slider
                  value={values.loanAmount}
                  step={1000}
                  min={1000}
                  max={1000000}
                  marks={amountMarks}
                />
              }
              name="loanAmount"
              onChange={handleChange}
            />
            <FormControlLabel
              style={{ color: "white" }}
              control={<Input value={values.loanAmount} />}
              name="loanAmount"
              onChange={handleChange}
            />
            <span style={{ color: "red" }}>{errors.loanAmount}</span>
            <label htmlFor="loanTenure" style={{ color: "white" }}>
              Enter your loan tenure:
            </label>
            <FormControlLabel
              style={{ color: "white" }}
              control={
                <Slider
                  value={values.loanTenure}
                  step={1}
                  min={1}
                  max={60}
                  marks={tenureMarks}
                />
              }
              name="loanTenure"
              onChange={handleChange}
            />
            <FormControlLabel
              style={{ color: "white" }}
              control={<Input value={values.loanTenure} />}
              name="loanTenure"
              onChange={handleChange}
            />
            <span style={{ color: "red" }}>{errors.loanTenure}</span>
            <label htmlFor="panNumber" style={{ color: "white" }}>
              Pan Card Number:
            </label>
            <TextField
              type="text"
              name="panNumber"
              id="panNumber"
              value={values.panNumber}
              onChange={handleChange}
            />
            <span style={{ color: "red" }}>{errors.panNumber}</span>
            <label htmlFor="emailAddress" style={{ color: "white" }}>
              Email Address:
            </label>
            <TextField
              type="email"
              name="emailAddress"
              id="emailAddress"
              value={values.emailAddress}
              onChange={handleChange}
            />
            <span style={{ color: "red" }}>{errors.emailAddress}</span>
            <button type="submit" disabled={isSubmitting}>
              Next
            </button>
          </form>
        )}
      </Formik>
    </React.Fragment>
  );
};

export default LoanDetails;
