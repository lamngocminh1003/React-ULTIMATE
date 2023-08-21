import axios from "axios";
import React, { useState, useEffect } from "react";
import WeatherState from "./WeatherState";
import moment from "moment/moment";
const WeatherDay = (props) => {
  const dataWeather = props.dataWeather;
  //   const dataWeather = {
  //     id: 1,
  //     applicable_date: "2023-08-11T16:24:02.000Z",
  //     weather_state_name: "Snow",
  //     max_temp: "30",
  //     min_temp: "24",
  //     wind_direction_compass: "nne",
  //     wind_speed: "100",
  //   };
  return (
    <div className="weather-day-container">
      <div className="date">
        {moment(dataWeather.applicable_date).format("ddd DD-MMM-YY")}
      </div>
      <div className="state">
        <WeatherState weatherState={dataWeather.weather_state_name} />
      </div>
      <div className="max">Max: {Math.round(dataWeather.max_temp)}°C</div>
      <div className="max">Min: {Math.round(dataWeather.min_temp)}°C</div>
      <div className="wind">
        <span
          className={`dir dir-${dataWeather.wind_direction_compass}`}
        ></span>
        <span>{Math.round(dataWeather.wind_speed)} mph</span>
      </div>
    </div>
  );
};

export default WeatherDay;
