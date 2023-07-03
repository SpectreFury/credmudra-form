import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { RadioGroup, FormControlLabel, Radio } from "@mui/material";

const EmploymentTypeSchema = Yup.object().shape({
  profession: Yup.string().required(
    "Profession is required to continue forward!"
  ),
});

const EmploymentType = ({ handleFormStep, setFormDetails }) => {
  return (
    <React.Fragment>
      <h1>Employment Type</h1>
      <Formik
        initialValues={{ profession: "salaried" }}
        validationSchema={EmploymentTypeSchema}
        onSubmit={(values, { setSubmitting }) => {
          handleFormStep("employmentForm");
          setFormDetails((prev) => ({
            ...prev,
            profession: values.profession,
          }));
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
            <label htmlFor="profession">Your Profession:</label>
            <RadioGroup
              name="profession"
              defaultValue="salaried"
              value={values.profession}
              onChange={(e) => {
                handleChange(e);
              }}
            >
              <FormControlLabel
                control={<Radio />}
                label="Salaried"
                value="salaried"
              />
              <FormControlLabel
                control={<Radio />}
                label="Self Employed Professional"
                value="self-employed-professional"
              />
              <FormControlLabel
                control={<Radio />}
                label="Self Employed"
                value="self-employed"
              />
              <FormControlLabel
                control={<Radio />}
                label="Others"
                value="others"
              />
            </RadioGroup>
            <span style={{ color: "red" }}>{errors.profession}</span>
            <button type="submit" disabled={isSubmitting}>
              Next
            </button>
          </form>
        )}
      </Formik>
    </React.Fragment>
  );
};

export default EmploymentType;
