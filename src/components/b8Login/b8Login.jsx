import React from "react";
import { FaXmark } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import "./b8Login.scss";

const B8Login = () => {
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
            "x-api-key" : "reqres-free-v1",
          },
          body: JSON.stringify(values),
        });

        const data = await reponse.json();

        if (reponse.ok) {
          console.log("Login success:", data.token);
          navigate("/");
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
    <div className="b8BodyFormLogin">
      <div className="b8FormLogin">
        <h1 className="b8FormLogin__title">Login</h1>
        <form onSubmit={formik.handleSubmit}>
          <input
            type="email"
            className="b8FormLogin__inpEmail"
            placeholder="Email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (<div style={{color: 'red', marginTop: '-12px', fontFamily: 'Arial', fontSize: '14px'}}>{formik.errors.email}</div>)}
          <br />
          <input
            type="password"
            className="b8FormLogin__inpPw"
            placeholder="Password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && (<div style={{color: 'red', marginTop: '-12px', fontFamily: 'Arial', fontSize: '14px'}}>{formik.errors.password}</div>)}
          <br />
          <button className="b8FormLogin__btn" type="submit">
            {/* <Link to="/" className="b8FormLogin__btn">
              Login
            </Link> */}
            Login
          </button>
        </form>
        <p className="b8FormLogin__Qes">
          Don't have an account?{" "}
          <Link to="/B8Signup" className="b8FormLogin__link">
            Register
          </Link>
        </p>
        <FaXmark className="b8FormLogin__btnDong" onClick={() => navigate('/')}/>
      </div>
    </div>
  );
};

export default B8Login;
