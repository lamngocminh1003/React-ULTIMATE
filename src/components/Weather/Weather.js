import axios from "axios";
import React, { useState, useEffect } from "react";
import Search from "./Search";
import "./Weather.scss";
import WeatherByWoeId from "./WeatherByWoeId";
const Weather = () => {
  const [title, setTitle] = useState("");
  useEffect(async () => {
    let data = await axios({
      method: "post",
      url: "http://localhost:4000/get-data-by-url",
      data: { url: "https://www.metaweather.com/api/location/1236594/" },
    });
    setTitle(data.data.title);
  }, []);
  return (
    <div className="weather-app-container">
      <Search />
      <hr />
      <WeatherByWoeId woeId={"1252431"} />
      <hr />
      <WeatherByWoeId woeId={"1236594"} />
    </div>
  );
};
// class Weather extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: "",
//     };
//   }
//   async componentDidMount() {
//     let data = await axios({
//       method: "post",
//       url: "http://localhost:4000/get-data-by-url",
//       data: { url: "https://www.metaweather.com/api/location/1236594/" },
//     });
//     this.setState({
//       title: data.data.title,
//     });
//   }

//   render() {
//     let { title } = this.state;
//     return <div>hello title = {title}</div>;
//   }
// }
export default Weather;
