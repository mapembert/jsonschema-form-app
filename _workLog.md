#Development Notes
These are the primary steps used to develop the application.

##Supporting Documentation
 - [Documentation for react-jsonschema-form](https://rjsf-team.github.io/react-jsonschema-form/docs/)
 - [A live playground is hosted on GitHub Pages](https://rjsf-team.github.io/react-jsonschema-form/)


##Quick Start
```
npx create-react-app jsonschema-form-app
cd jsonschema-form-app
npm install @rjsf/core @rjsf/utils @rjsf/material-ui @rjsf/validator-ajv8
npm install @material-ui/core @material-ui/icons
npm start
```

Modify **App.js** to the following:
```
import React from 'react';
import './App.css';
import FormComponent from './FormComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>React JSONSchema Form Material-UI App</h3>
      </header>
      <main>
        <FormComponent />
      </main>
    </div>
  );
}

export default App;
```

Create a new file ***FormComponents.js** and paste the following code:
```
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
```

The FormComponent uses 3 files containing json to render and populate the form with data make the following 3 files.

##formSchema.js 
```
const formSchema = {
  title: "A registration form",
  description: "A simple form example.",
  type: "object",
  required: ["firstName", "lastName"],
  properties: {
    firstName: {
      type: "string",
      title: "First name",
      default: "Chuck",
    },
    lastName: {
      type: "string",
      title: "Last name",
    },
    age: {
      type: "integer",
      title: "Age",
    },
    bio: {
      type: "string",
      title: "Bio",
    },
    password: {
      type: "string",
      title: "Password",
      minLength: 3,
    },
    telephone: {
      type: "string",
      title: "Telephone",
      minLength: 10,
    },
  },
};

export default formSchema;
```
##UISchema.js
```
const UISchema = {
  firstName: {
    "ui:autofocus": true,
    "ui:emptyValue": "",
    "ui:placeholder": "ui:emptyValue causes this field to always be valid despite being required",
    "ui:autocomplete": "family-name",
    "ui:enableMarkdownInDescription": true,
    "ui:description": "Make text **bold** or *italic*. Take a look at other options [here](https://probablyup.com/markdown-to-jsx/).",
  },
  lastName: {
    "ui:autocomplete": "given-name",
    "ui:enableMarkdownInDescription": true,
    "ui:description": "Make things **bold** or *italic*. Embed snippets of `code`. <small>And this is a small texts.</small> ",
  },
  age: {
    "ui:widget": "updown",
    "ui:title": "Age of person",
    "ui:description": "(earth year)",
  },
  bio: {
    // "ui:widget": "textarea",
  },
  password: {
    "ui:widget": "password",
    "ui:help": "Hint: Make it strong!",
  },
  telephone: {
    "ui:options": {
      inputType: "tel",
    },
  },
};

export default UISchema;
```
##formData.js
```
const formData = {
  firstName: "Chuck",
  lastName: "Norris",
  age: 75,
  bio: "Roundhouse kicking asses since 1940",
  password: "noneed",
  telephone: "1-800-KICKASS",
};

export default formData;
```

##Run the application
```
npm start
```