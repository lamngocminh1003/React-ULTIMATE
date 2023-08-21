import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import _ from "lodash";
import WeatherState from "./WeatherState";
import WeatherDay from "./WeatherDay";
import moment from "moment/moment";

const WeatherByWoeId = (props) => {
  let { woeId } = useParams();
  let history = useHistory();
  const [locationWeather, setLocationWeather] = useState("");
  const getWeatherByWoeId = async () => {
    if (!woeId) {
      woeId = props.woeId;
    }
    let data = await axios({
      method: "post",
      url: "http://localhost:4000/get-data-by-url",
      data: {
        url: `https://www.metaweather.com/api/location/${woeId}/`,
      },
    });
    if (data && data.data) {
      setLocationWeather(data.data);
    }
  };
  useEffect(() => {
    getWeatherByWoeId();
  }, []);
  const handleOnClickBack = () => {
    history.push(`/weather-app`);
  };
  return (
    <div className="weather-by-woe-id-container">
      {/* <div>{JSON.stringify(locationWeather)}</div> */}
      {/* <WeatherState weatherState={"HeavyCloud"} /> */}
      <div className="list-weather">
        {!_.isEmpty(locationWeather) &&
          locationWeather.consolidated_weather &&
          locationWeather.consolidated_weather.length > 0 &&
          locationWeather.consolidated_weather.map((item, index) => {
            return (
              <div key={`WeatherDay-${index}`} className="detail-location">
                {index === 0 && (
                  <div className="location-data">
                    <div className="title">{locationWeather.title}</div>
                    <div className="time">
                      {moment(locationWeather.time).format("hh:mm:ss A")}
                    </div>
                  </div>
                )}
                <div>
                  <WeatherDay dataWeather={item} />
                </div>
              </div>
            );
          })}
      </div>
      {!props.woeId && (
        <div className="btn-back-wth-app">
          <button className="btn" onClick={() => handleOnClickBack()}>
            Back to Weather App
          </button>
        </div>
      )}
    </div>
  );
};
export default WeatherByWoeId;
