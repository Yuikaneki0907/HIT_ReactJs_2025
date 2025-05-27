import React from "react";
import logo from "../../assets/b9_logo.png";
import "./b9Login.scss";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

const B9Login = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: async (values, { setFieldError }) => {
      try {
        const reponse = await fetch("https://reqres.in/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "reqres-free-v1",
          },
          body: JSON.stringify(values),
        });

        const data = await reponse.json();
        console.log(data);
        if (reponse.ok) {
          console.log("Login success:", data.token);
          navigate("/");
          localStorage.setItem("token", data.token);
        } else {
          setFieldError("email", data.error || "login failed");
          setFieldError("password", data.error || "login failed");
        }
      } catch (error) {
        setFieldError("email", "Server error");
        setFieldError("password", "Server error");
      }
    },
  });
  return (
    <div className="b9Login">
      <img src={logo} alt="" className="b9Login-img" />
      <form className="b9Login_form" onSubmit={formik.handleSubmit}>
        <h1 className="b9Login_title">Log in</h1>
        <p className="b9Login-p">Email</p>
        <input
          type="email"
          className="b9Login_inp b9Login_inp-email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && (
          <div
            style={{
              color: "red",
              marginTop: "-12px",
              fontFamily: "Arial",
              fontSize: "14px",
            }}
          >
            {formik.errors.email}
          </div>
        )}
        <p className="b9Login-p">Password</p>
        <input
          type="password"
          className="b9Login_inp b9Login_inp-psd"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password && (
          <div
            style={{
              color: "red",
              marginTop: "-12px",
              fontFamily: "Arial",
              fontSize: "14px",
            }}
          >
            {formik.errors.password}
          </div>
        )}
        <br />
        <button className="b9Login_btn" type="submit">
          Log in
        </button>
      </form>
    </div>
  );
};

export default B9Login;
