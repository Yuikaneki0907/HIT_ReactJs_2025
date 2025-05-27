import React, { useState } from "react";
import { Routes, Route, Link, useRoutes, useNavigate } from "react-router-dom";
import Home from "./pages/home";
import News from "./pages/news";
import Contact from "./pages/contact";
import Product from "./pages/product";
import ProductList from "./pages/productlist";
import Header from "./components/header";
import Btvn8 from "./components/b8Home/btvn8";
import B8Login from "./components/b8Login/b8Login";
import B8Signup from "./components/b8Signup/b8Signup";
import Content from "./components/content";
import { ThemeProvider } from "./ThemeContext";
import Btvn9 from "./components/b9/b9";
import B9Login from "./components/b9Login/b9Login";



const App = () => {
// const ThemeContext = {ThemeProvider};
//   const [theme, setTheme] = useState("dark");
//   const toggleTheme = () => {
//     setTheme(theme === "dark" ? "light" : "dark");
//   };
const navigate = useNavigate();
const ele = useRoutes([
    {
      path: "/",
      element: <Btvn9 />,
    },
    {
      path: "/b9Login",
      element: <B9Login />,
    },
  ]);
  return (
    // <div>
    //   <ThemeContext.Provider value={theme}>
    //     <div className="add">
    //       <button onClick={toggleTheme}>Toggle</button>
    //       <Content theme={theme}></Content>
    //     </div>
    //   </ThemeContext.Provider>
    // </div>

    <div>
      {/* <Btvn9></Btvn9> */}
      {ele}
    </div>
  );
};

export default App;
