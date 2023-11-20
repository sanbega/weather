import WeatherForm from "./WeatherForm";
import React, { useEffect, useState } from "react";
import WeatherMainInfo from "./WeatherMainInfo";

function WeatherApp() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    loadInfo();
  }, []);
  useEffect(() => {
    document.title = `Weather | ${weather?.location.name ?? ""}`;
  }, [weather]);
  async function loadInfo(city = "london") {
    try {
      const request = await fetch(
        `${process.env.REACT_APP_URL}&key{process.env.REACT_APP_KEY}&{city}`
      );
      console.log(process.env.REACT_APP_KEY);
      console.log(process.env.REACT_APP_URL);
      const json = await request.json();
      console.log("Datos recuperados:", json);
      console.log(process.env.REACT_APP_KEY);
      console.log(process.env.REACT_APP_URL);
      setWeather(json);
      console.log(json);
    } catch (error) {
        console.error("Error al obtener datos:", error); 
    }
  }

  function handleChangeCity(city) {
    setWeather(null);
    loadInfo(city);
  }

  return (
    <div>
      <WeatherForm onChangeCity={handleChangeCity} />
      <WeatherMainInfo weather={weather}/>
    </div>
  );
}

export default WeatherApp;
