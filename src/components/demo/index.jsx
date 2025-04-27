import React from "react";
import "./style.scss";
import image from '../../assets/react.svg'

const Demo = () => {
  return (
    <div className="demo">
      <div className="container">
        <img src={image} alt="" className="container__image"/>
        <h1 className="container__heading1">John Doe</h1>
        <p className="container__title">Fontend Developer | React Enthusiast</p>
        <div className="container__button">
          <button className="container__button1 container__button1--follow">
            Follow
          </button>
          <button className="container__button1 container__button1--message">
            Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Demo;
