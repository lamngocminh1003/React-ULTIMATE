import axios from "axios";
import React, { useState, useEffect } from "react";
import _ from "lodash";
import { useHistory, NavLink } from "react-router-dom";

const Search = () => {
  const [city, setCity] = useState("");
  const [locationArr, setLocationArr] = useState("");
  const [isLoadingData, setLoadingData] = useState(false);
  const [isFocusInput, setIsFocusInput] = useState(false);
  let history = useHistory();
  const handleOnClickSearch = async () => {
    setLoadingData(true);
    setLocationArr([]);
    let data = await axios({
      method: "post",
      url: "http://localhost:4000/get-data-by-url",
      data: {
        url: `https://www.metaweather.com/api/location/search/?query=${city}`,
      },
    });
    if (data && data.data) {
      let result = data.data;
      let _locationArr = [];
      if (!_.isEmpty(result)) {
        for (let key in result) {
          console.log("check result", result[key]);
          _locationArr.push(result[key]);
        }
        setLocationArr(_locationArr);
      } else {
        setLocationArr([]);
      }
    }
    setLoadingData(false);
    setIsFocusInput(false);
  };
  const handleOnClickWoeId = (woeid) => {
    history.push(`/weather/detail/${woeid}`);
  };
  return (
    <>
      <div className="search-form">
        <span>
          <input
            placeholder="Search any city..."
            type="text"
            className="input-item"
            value={city}
            onChange={(event) => setCity(event.target.value)}
            onFocus={() => setIsFocusInput(true)}
          />
        </span>
        <span>
          {" "}
          <button
            className="input-item-btn btn-search"
            onClick={() => handleOnClickSearch()}
          >
            Search
          </button>
        </span>
      </div>
      {isLoadingData && <div className="loading">Loading data...</div>}
      <div className="result-container">
        {locationArr &&
          locationArr.length > 0 &&
          locationArr.map((item, index) => {
            return (
              <div className="result" key={`location - ${index}`}>
                <div className="title">Title: {item.title}</div>
                <div className="location-type">Type: {item.location_type}</div>
                <div className="woeId">
                  <span>WoeId:</span>{" "}
                  <span
                    onClick={() => handleOnClickWoeId(item.woeid)}
                    className="woeId-link"
                  >
                    {item.woeid}
                  </span>
                </div>
              </div>
            );
          })}
        {!isFocusInput && city && locationArr && locationArr.length === 0 && (
          <div className="not-found">Not found data with keyword = {city}</div>
        )}
      </div>
    </>
  );
};
export default Search;
