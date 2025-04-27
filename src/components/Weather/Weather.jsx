import React, { useEffect, useState } from "react";
import "./Weather.scss";
import axios from "axios";

const Weather = () => {
  const [temp, setTemp] = useState("°C");
  const keyAPI = "48123c536a2a2b961e2af6e5f75981ae";
  const [forecast, setForecast] = useState([]);
  const [current, setCurrent] = useState("");
  const [location, setLocation] = useState("");

  const handOnChange = (e) => {
    setLocation(e);
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${current}&appid=${keyAPI}`
        );
        setCurrent(response.data);
      } catch (error) {
        console.log("loi du lieu", error);
      }
    };
    fetch();
  }, [location]);
  console.log("name", current.name);

  const handleBtnChange = () => {
    setTemp((prev) => (prev == "°F" ? "°C" : "°F"));
  };

  return (
    <div className="weather">
      <h1 className="weather_heading">Weather Forecast App</h1>
      <div className="weather_inpInfor">
        <input
          type="text"
          className="weather_inpInfor_inp"
          placeholder="Enter City Name"
          onChange={(e) => handOnChange(e.target.value)}
        />
        <button className="weather_inpInfor_btn">Search</button>
      </div>
      <div className="weather_btn">
        <button className="weather_btn_btnChange" onClick={handleBtnChange}>
          {temp}
        </button>
      </div>
      <div className="weather_inforMain">
        <div className="weather_inforMain_main flex">
          <div>
            <h1 className="weather_inforMain_main_nameCity">{current.name}</h1>
            <p className="weather_inforMain_main_day">
              Tuesday, April 15, 2025
            </p>
          </div>
          <div>
            <div className="flex">
              <div className="weather_inforMain_main_icon">
                <img
                  src={`https://openweathermap.org/img/wn/10d@2x.png`}
                  alt=""
                />
              </div>
              <div>
                <h1 className="weather_inforMain_main_temp">14°C</h1>
                <p className="weather_inforMain_main_description">Few Clouds</p>
              </div>
            </div>
          </div>
        </div>
        <div className="weather_inforMain_more flex">
          <div>
            <img src={`https://openweathermap.org/img/wn/10d@2x.png`} alt="" />
            <div>
              <p className="weather_inforMain_more_weatherCurrent"></p>
              <p className="weather_inforMain_more_weatherDiscrip"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
