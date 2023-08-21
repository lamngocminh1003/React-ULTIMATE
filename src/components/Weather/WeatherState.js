import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import _ from "lodash";

const WeatherState = (props) => {
  const { weatherState } = props;
  const allWeatherStates = {
    Snow: "sn",
    Thunderstorm: "t",
    HeavyCloud: "hc",
    LightCloud: "lc",
    Clear: "c",
  };
  const getWeatherIcon = (weatherState) => {
    const fetchState = allWeatherStates[weatherState];
    console.log("fetchState", fetchState);
    return `http://localhost:4000/static/img/weather/${fetchState}.svg`;
  };
  return (
    <div className="weather-state">
      <div className="icon-state">
        <img src={getWeatherIcon(weatherState)} />
      </div>{" "}
      <div className="name-state"> {weatherState}</div>{" "}
    </div>
  );
};
export default WeatherState;
