import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const Forma = () => {
  const schema = Yup.object().shape({
    email: Yup.string().email().required('Email is required'),
    password: Yup.string().min(6, 'Password incorrect').max(20).required(),
    age: Yup.number().min(16).required(),
  });

  const initialValues = {
    email: "",
    password: "",
    age: 18,
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
        {() => (
          <Form>
            <div>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>

            <div>
              <Field type="number" name="age" />
              <ErrorMessage name="age" component="div" className="error" />
            </div>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Forma;
