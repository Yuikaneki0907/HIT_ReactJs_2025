import React from "react";
import { Formik, useFormik, Form, Field, ErrorMessage } from "formik";
import { loginValidate } from "../../utils/loginValidate";

// const validate = "";

const SignupForm = () => {
  //   const formik = useFormik({
  //     initialValues: {
  //       name: "",
  //       email: "",
  //       password: "",
  //     },
  //     validationSchema: loginValidate,
  //     onSubmit: (values) => {
  //       console.log(values);
  //     },
  //   });

  //   console.log(formik);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // throw new Error();
      console.log(data);
    } catch (error) {
      setError("root", {
        message: "This email is already taken",
      });
    }
  };

  return (
    // <form onSubmit={formik.handleSubmit}>
    //   <div>
    //     <label htmlFor="name">Name</label>
    //     <input
    //       id="name"
    //       name="name"
    //       type="text"
    //       onChange={formik.handleChange}
    //       value={formik.values.name}
    //     />
    //     {formik.touched.name && formik.errors.name ? (
    //       <div>{formik.errors.name}</div>
    //     ) : null}
    //   </div>
    //   <div>
    //     <label htmlFor="email">Email Address</label>
    //     <input
    //       id="email"
    //       name="email"
    //       type="email"
    //       onChange={formik.handleChange}
    //       value={formik.values.email}
    //       //có thể viết gọn bỏ trường name, onChange, value, onBlur, ... bằng
    //       // {...formik.getFieldProps('email')}
    //     />
    //     {formik.touched.email && formik.errors.email ? (
    //       <div>{formik.errors.email}</div>
    //     ) : null}
    //   </div>
    //   <div>
    //     <label htmlFor="password">Password</label>
    //     <input
    //       id="password"
    //       name="password"
    //       type="password"
    //       onChange={formik.handleChange}
    //       value={formik.values.password}
    //     ></input>
    //     {formik.touched.password && formik.errors.password ? (
    //       <div>{formik.errors.password}</div>
    //     ) : null}
    //   </div>
    //   <button type="submit">Submit</button>
    // </form>
    <Formik
      initialValues={{
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        cb: false,
      }}
      validationSchema={loginValidate}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <div>
          <label htmlFor="fullName">fullName</label>
          <Field type="text" id="fullName" name="fullName" />
          <ErrorMessage name="fullName"/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email"/>
        </div>
        <div>
          <label htmlFor="password">password</label>
          <Field type="password" id="password" name="password" />
          <ErrorMessage name="password"/>
        </div>
        <div>
          <label htmlFor="confirmPassword">confirmPassword</label>
          <Field type="password" id="confirmPassword" name="confirmPassword" />
          <ErrorMessage name="confirmPassword"/>
        </div>
        <div>
          <Field type="checkbox" id="cb" name="cb" />
          <label htmlFor="cb">Toi dong y voi dieu kien</label>
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default SignupForm;
