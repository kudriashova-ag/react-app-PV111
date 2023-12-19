import { TextField } from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const Registration = () => {
  const schema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().min(6, "Password incorrect").max(20).required(),
    repeatPassword: Yup.string(),
  });

  const initialValues = {
    email: "",
    password: "",
    repeatPassword: "",
  };
  const submitHandler = (values) => {
    console.log(values);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={submitHandler}
        validationSchema={schema}
      >
        {(props) => (
          <Form>
            <TextField
              id="email"
              label="Email"
              value={props.values.email}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              helperText={props.touched.email ? props.errors.email : ""}
              error={props.touched.email && Boolean(props.errors.email)}
              margin="dense"
              variant="outlined"
              fullWidth
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Registration;
