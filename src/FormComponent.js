import React from "react";
import Form from "@rjsf/material-ui";
import validator from "@rjsf/validator-ajv8";

import formSchema from "./formSchema";
import UISchema from "./UISchema";
import formData from "./formData";

const FormComponent = () => {
  const onSubmit = ({ formData }) => {
    console.log("Form submitted:", formData);
  };

  return (
    <Form
      schema    = {formSchema}
      onSubmit  = {onSubmit}
      validator = {validator}
      formData  = {formData}
      uiSchema  = {UISchema}
    />
  );
};

export default FormComponent;
