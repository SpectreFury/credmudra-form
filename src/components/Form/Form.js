import React, { useState } from "react";
import Initial from "./Initial";

const Form = () => {
  const [formStep, setFormStep] = useState("initial");

  const handleFormStep = (e) => {
  };

  return (
    <React.Fragment>
      {formStep === "initial" && <Initial handleFormStep={handleFormStep} />}
    </React.Fragment>
  );
};

export default Form;
