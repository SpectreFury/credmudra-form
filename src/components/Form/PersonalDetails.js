import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Select,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

const PersonalDetailsSchema = Yup.object().shape({
  firstName: Yup.string().required(
    "First name is required to continue forward!"
  ),
  lastName: Yup.string().required("Last name is required to continue forward!"),
  dateOfBirth: Yup.date()
    .max(new Date(Date.now() - 567648000000), "You must be at least 18 years")
    .required("Date of birth is required to continue forward!"),
  gender: Yup.string().required("Gender is required to continue forward!"),
  maritalStatus: Yup.string().required(
    "Marital status is required to continue forward!"
  ),
});

const PersonalDetails = ({ handleFormStep }) => {
  return (
    <React.Fragment>
      <h1 style={{ color: "white" }}>Personal Details</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          dateOfBirth: "",
          gender: "",
          maritalStatus: "",
        }}
        validationSchema={PersonalDetailsSchema}
        onSubmit={(values, { setSubmitting }) => {
          handleFormStep("personalDetails");
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
            <label htmlFor="firstName">First Name (As per PAN card)</label>
            <TextField
              name="firstName"
              id="firstName"
              value={values.firstName}
              onChange={handleChange}
            />
            <span style={{ color: "red" }}>{errors.firstName}</span>
            <label htmlFor="lastName">Last Name (As per PAN card)</label>
            <TextField
              name="lastName"
              id="lastName"
              value={values.lastName}
              onChange={handleChange}
            />
            <span style={{ color: "red" }}>{errors.lastName}</span>
            <label htmlFor="dateOfBirth">DOB:</label>
            <input
              name="dateOfBirth"
              id="dateOfBirth"
              type="date"
              value={values.dateOfBirth}
              onChange={handleChange}
            />
            <span style={{ color: "red" }}>{errors.dateOfBirth}</span>
            <label htmlFor="gender">Gender:</label>
            <Select
              name="gender"
              id="gender"
              value={values.gender}
              onChange={handleChange}
            >
              <MenuItem value="single">Male</MenuItem>
              <MenuItem value="married">Female</MenuItem>
              <MenuItem value="transgender">Transgender</MenuItem>
            </Select>
            <span style={{ color: "red" }}>{errors.gender}</span>
            <label htmlFor="maritalStatus">Marital Status:</label>
            <RadioGroup
              name="maritalStatus"
              value={values.maritalStatus}
              onChange={handleChange}
              defaultValue="single"
            >
              <FormControlLabel
                control={<Radio />}
                value="single"
                label="Single"
              />
              <FormControlLabel
                control={<Radio />}
                value="married"
                label="Married"
              />
            </RadioGroup>
            <button type="submit" disabled={isSubmitting}>
              Next
            </button>
          </form>
        )}
      </Formik>
    </React.Fragment>
  );
};

export default PersonalDetails;
