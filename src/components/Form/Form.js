import React, { useState } from "react";
import Initial from "./Initial";
import OTPScreen from "./OTPScreen";
import LoanDetails from "./LoanDetails";
import EmploymentType from "./EmploymentType";
import EmploymentForm from "./EmploymentForm";
import PersonalDetails from "./PersonalDetails";

const Form = () => {
  const [formStep, setFormStep] = useState("initial");
  const [formDetails, setFormDetails] = useState({
    phoneNumber: "",
    profession: "",
  });

  const handleFormStep = (nextStep) => {
    setFormStep(nextStep);
  };

  return (
    <React.Fragment>
      {formStep === "initial" && (
        <Initial
          handleFormStep={handleFormStep}
          setFormDetails={setFormDetails}
        />
      )}
      {formStep === "otp" && (
        <OTPScreen handleFormStep={handleFormStep} formDetails={formDetails} />
      )}
      {formStep === "loanDetails" && (
        <LoanDetails handleFormStep={handleFormStep} />
      )}
      {formStep === "employmentType" && (
        <EmploymentType
          handleFormStep={handleFormStep}
          setFormDetails={setFormDetails}
        />
      )}
      {formStep === "employmentForm" && (
        <EmploymentForm
          handleFormStep={handleFormStep}
          formDetails={formDetails}
        />
      )}
      {formStep === "personalDetails" && (
        <PersonalDetails handleFormStep={handleFormStep} />
      )}
    </React.Fragment>
  );
};

export default Form;
