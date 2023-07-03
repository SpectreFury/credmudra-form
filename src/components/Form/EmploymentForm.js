import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  Select,
  MenuItem,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import {
  CompanyTypeArray,
  IndustryArray,
  JobDurationArray,
} from "../../utils/default";
const PINCODE_REGEX = /^[0-9]+$/;
const MONTHLY_INCOME_REGEX = /^[0-9]+$/;

const EmploymentFormSchema = Yup.object().shape({
  companyType: Yup.string().required(
    "Company is required to continue forward!"
  ),
  industry: Yup.string().required("Industry is required to continue forward!"),
  designation: Yup.string().required(
    "Designation is required to continue forward!"
  ),
  companyName: Yup.string().required(
    "Company name is required to continue forward!"
  ),
  companyAddress: Yup.string().required(
    "Company Address is required to continue forward!"
  ),
  companyPincode: Yup.string()
    .max(6, "Too large!")
    .required("Company Address is required to continue forward!"),
  city: Yup.string().required("City is required to continue forward!"),
  state: Yup.string().required("State is required to continue forward!"),
  country: Yup.string().required("Country is required to continue forward!"),
  jobDuration: Yup.string().required(
    "Job duration is required to continue forward!"
  ),
  monthlyIncome: Yup.number()
    .min(9000)
    .required("Monthly income is required to continue forward!"),
  modeOfSalary: Yup.string().required(
    "Mode of salary is required to continue forward!"
  ),
});
const DESIGNATION_REGEX = /^[a-zA-Z ]*$/;

const EmploymentForm = ({ handleFormStep, formDetails }) => {
  return (
    <React.Fragment>
      <h1 style={{ color: "white" }}>Employment Type</h1>
      <Formik
        initialValues={{
          companyType: "public-sector",
          industry: "animation",
          designation: "",
          companyName: "",
          companyAddress: "",
          companyPincode: "",
          city: "",
          state: "",
          country: "",
          jobDuration: "",
          monthlyIncome: 0,
          modeOfSalary: "bank-transfer",
          bankAccount: "",
        }}
        validationSchema={EmploymentFormSchema}
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
            <label htmlFor="companyType">Company Type:</label>
            <span>{formDetails.profession}</span>
            <Select
              name="companyType"
              id="companyType"
              value={values.companyType}
              onChange={handleChange}
            >
              {CompanyTypeArray.map((company) => (
                <MenuItem value={company.value}>{company.label}</MenuItem>
              ))}
            </Select>
            <label htmlFor="industry">Industry:</label>
            <Select
              name="industry"
              id="industry"
              value={values.industry}
              onChange={handleChange}
            >
              {IndustryArray.map((company) => (
                <MenuItem value={company.value}>{company.label}</MenuItem>
              ))}
            </Select>
            <label htmlFor="designation">Designation:</label>
            <TextField
              name="designation"
              id="designation"
              value={values.designation}
              onChange={(e) => {
                if (DESIGNATION_REGEX.test(e.target.value)) {
                  handleChange(e);
                }
              }}
            />
            <span style={{ color: "red" }}>{errors.designation}</span>
            <label htmlFor="companyName">Company Name:</label>
            <TextField
              name="companyName"
              id="companyName"
              value={values.companyName}
              onChange={handleChange}
            />
            <span style={{ color: "red" }}>{errors.companyName}</span>
            <label htmlFor="companyAddress">Company Address:</label>
            <TextField
              name="companyAddress"
              id="companyAddress"
              value={values.companyAddress}
              onChange={handleChange}
            />
            <span style={{ color: "red" }}>{errors.companyAddress}</span>
            <label htmlFor="companyPincode">Commpany Pincode:</label>
            <TextField
              name="companyPincode"
              id="companyPincode"
              value={values.companyPincode}
              onChange={(e) => {
                if (e.target.value.length > 6) return;
                if (
                  e.target.value === "" ||
                  PINCODE_REGEX.test(e.target.value)
                ) {
                  handleChange(e);
                }
              }}
            />
            <span style={{ color: "red" }}>{errors.companyPincode}</span>
            <label htmlFor="city">City:</label>
            <TextField
              name="city"
              id="city"
              value={values.city}
              onChange={handleChange}
            />
            <span style={{ color: "red" }}>{errors.city}</span>
            <label htmlFor="state">State:</label>
            <TextField
              name="state"
              id="state"
              value={values.state}
              onChange={handleChange}
            />
            <span style={{ color: "red" }}>{errors.state}</span>
            {values.country}
            <label htmlFor="country">Country:</label>
            <TextField
              name="country"
              id="country"
              value={values.country}
              onChange={handleChange}
            />
            <span style={{ color: "red" }}>{errors.country}</span>
            <label htmlFor="jobDuration">
              How Many Years You Are Working in Current Company?
            </label>
            <Select
              name="jobDuration"
              id="jobDuration"
              value={values.jobDuration}
              onChange={handleChange}
            >
              {JobDurationArray.map((company) => (
                <MenuItem value={company.value}>{company.label}</MenuItem>
              ))}
            </Select>
            <span style={{ color: "red" }}>{errors.jobDuration}</span>
            <label htmlFor="monthlyIncome">Monthly Income:</label>
            <TextField
              name="monthlyIncome"
              id="monthlyIncome"
              value={values.monthlyIncome}
              onChange={(e) => {
                if (e.target.value.length > 7) return;
                if (
                  e.target.value === "" ||
                  MONTHLY_INCOME_REGEX.test(e.target.value)
                ) {
                  handleChange(e);
                }
              }}
            />
            <span style={{ color: "red" }}>{errors.monthlyIncome}</span>
            <label htmlFor="modeOfSalary">Mode of Salary</label>
            <RadioGroup
              name="modeOfSalary"
              value={values.modeOfSalary}
              onChange={(e) => {
                handleChange(e);
              }}
              defaultValue="bank-transfer"
            >
              <FormControlLabel
                control={<Radio />}
                label="Bank Transfer"
                value="bank-transfer"
              />
              <FormControlLabel control={<Radio />} label="Cash" value="cash" />
            </RadioGroup>
            <span style={{ color: "red" }}>{errors.modeOfSalary}</span>
            <button type="submit" disabled={isSubmitting}>
              Next
            </button>
          </form>
        )}
      </Formik>
    </React.Fragment>
  );
};

export default EmploymentForm;
