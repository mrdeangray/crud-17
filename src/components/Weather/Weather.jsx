import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Weather = () => {
  const [currCoords, setCurrCoords] = useState("");
  const [locationError, getLocationError] = useState("");
  const [currCity, setCurrCity] = useState("");


  useEffect(() => {
    handleGetCity();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGetCity = async () => {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  };

  const successCallback = async (position) => {
    // console.log(position.coords);
    // console.log(process.env.REACT_APP_API_key);
    setCurrCoords(position.coords);
    const { coords } = position;
    const limit = 1;
    // http://api.openweathermap.org/geo/1.0/reverse?lat=51.5098&lon=-0.1180&limit=5&appid={API key}

    const { data } = await axios(
      `http://api.openweathermap.org/geo/1.0/reverse?lat=${coords.latitude}&lon=${coords.longitude}&limit=${limit}&appid=${process.env.REACT_APP_API_key}`
    );

    setCurrCity(data.toString());
  };

  const errorCallback = ({ message }) => {
    // console.log(message);
    getLocationError(message);
  };

  return (
    <div className="App">
      <div className="header">
        <Link to={`/`}>Back</Link>
        <h6>Weather</h6>
      </div>
      <div className="left"></div>
      <div className="main">
        <p>{locationError}</p>
        <p>{currCoords.longitude}</p>
        <p>{currCoords.latitude}</p>
        <h2>{currCity}</h2>
      </div>
      <div className="right"></div>
      <div className="footer"></div>
    </div>
  );
};

export default Weather;
