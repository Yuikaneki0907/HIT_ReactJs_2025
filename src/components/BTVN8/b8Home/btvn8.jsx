import React from "react";
import banner from "../../assets/banner.jpg";
import item1 from "../../assets/item1.jpg";
import item2 from "../../assets/item2.jpg";
import item3 from "../../assets/item3.jpg";
import avt1 from "../../assets/avt1.jpg";
import avt2 from "../../assets/avt2.jpg";
import avt3 from "../../assets/avt3.jpg";
import { FaRegWindowMaximize } from "react-icons/fa6";
import { FaLayerGroup } from "react-icons/fa6";
import { FaTerminal } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "./btvn8.scss";
import B8Login from "../BTVN8/b8Login";
import { Link, useNavigation } from "react-router-dom";
import B8Signup from "../BTVN8/b8Signup";

const Btvn8 = () => {
  const nav = useNavigate();
  return (
    <div className="b8">
      <div className="b8Header">
        <h1 className="b8Header__name">Start Bootstrap</h1>
        <button className="b8Header__btn" onClick={() => nav("/b8Login")}>
          Login
        </button>
      </div>
      <div className="b8Banner">
        <img src={banner} alt="" className="b8Banner__img" />
        <h1 className="b8Banner__intro">
          Generate more leads with a professional <br />
          landing page!
        </h1>
      </div>
      <div className="b8Intro">
        <div className="b8Intro__item1">
          <FaRegWindowMaximize className="b8Intro__item1--icon" />
          <h1 className="b8Intro__item1--title">Fully Responsive</h1>
          <p className="b8Intro__item1--des">
            This theme will look great on any device, no matter the size!
          </p>
        </div>
        <div className="b8Intro__item2">
          <FaLayerGroup className="b8Intro__item2--icon" />
          <h1 className="b8Intro__item2--title">Bootstrap 5 Ready</h1>
          <p className="b8Intro__item2--des">
            Featuring the latest build of the new Bootstrap 5 framework!
          </p>
        </div>
        <div className="b8Intro__item2">
          <FaTerminal className="b8Intro__item3--icon" />
          <h1 className="b8Intro__item3--title">Easy to Use</h1>
          <p className="b8Intro__item3--des">
            Ready to use with your own content or customize the source files!
          </p>
        </div>
      </div>
      <div className="b8Detail">
        <div className="b8Detail__item1">
          <div className="b8Detail__item1__content">
            <h1 className="b8Detail__item1__content--title">
              Fully Responsive Design
            </h1>
            <p className="b8Detail__item1__content--des">
              When you use a theme created by Start Bootstrap, you know that the
              theme will look great on any device, whether it's a phone, tablet,
              or desktop the page will behave responsively!
            </p>
          </div>
          <img src={item1} alt="" className="b8Detail__item1__img" />
        </div>
        <div className="b8Detail__item2">
          <img src={item2} alt="" className="b8Detail__item2__img" />
          <div className="b8Detail__item2__content">
            <h1 className="b8Detail__item2__content--title">
              Updated For Bootstrap 5
            </h1>
            <p className="b8Detail__item2__content--des">
              Newly improved, and full great utility classes, Bootstrap 5 is
              leading the way in mobile responsive web development! All of the
              themes on Start Bootstrap are now using Bootstrap 5!
            </p>
          </div>
        </div>
        <div className="b8Detail__item3">
          <div className="b8Detail__item3__content">
            <h1 className="b8Detail__item3__content--title">
              Easy to Use & Customize
            </h1>
            <p className="b8Detail__item3__content--des">
              Landing Page is just HTML and CSS with a splash of SCSS for users
              who demand some deeper customization options. Out of the box, just
              add your content and images, and your new landing page will be
              ready to go!
            </p>
          </div>
          <img src={item3} alt="" className="b8Detail__item3__img" />
        </div>
      </div>
      <div className="b8Review">
        <div className="b8Review__item1">
          <img src={avt1} alt="" className="b8Review__item1--img" />
          <h3 className="b8Review__item1--name">Margaret E.</h3>
          <p className="b8Review__item1--review">
            "This is fantastic! Thanks so much guys!"
          </p>
        </div>
        <div className="b8Review__item2">
          <img src={avt2} alt="" className="b8Review__item2--img" />
          <h3 className="b8Review__item2--name">Fred S.</h3>
          <p className="b8Review__item2--review">
            "Bootstrap is amazing. I've been using it to create lots of super
            nice landing pages."
          </p>
        </div>
        <div className="b8Review__item3">
          <img src={avt3} alt="" className="b8Review__item3--img" />
          <h3 className="b8Review__item3--name">Sarah W.</h3>
          <p className="b8Review__item3--review">
            "Thanks so much for making these free resources available to us!"
          </p>
        </div>
      </div>
      <div className="b8Ready">
        <img src={banner} alt="" className="b8Ready__img" />
        <h1 className="b8Ready__Ques">Ready to get started? Sign up now!</h1>
        <button className="b8Ready__btn">Register</button>
      </div>
      <div className="b8Footer">
        <div className="b8Footer__right">
          <div className="b8Footer__right--link">
            <a href="#">About us</a>
            <a href="#">Contact</a>
            {/* <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                setView("B8Login");
              }}
            >
              Login
            </a> */}
            <a href="">
              <Link to="/b8Login.jsx">Login</Link>
            </a>
            <Link to="/B8Signup">Signup</Link>
          </div>
          <p className="b8Footer__right--info">
            Your Website 2023. All Right Reserved
          </p>
        </div>
        <div className="b8Footer__left">
          <FaFacebook className="b8Footer__left--icon" />
          <FaTwitter className="b8Footer__left--icon" />
          <FaInstagram className="b8Footer__left--icon" />
        </div>
      </div>
    </div>
  );
};

export default Btvn8;
