import React, { useEffect, useState } from "react";
import { WeatherForm } from "./components/WeatherForm";

import WeatherInfo from "./components/WeatherInfo";
import { WEATHER_KEY } from "./keys";

function App() {
  const [state, setState] = useState({
    temperature: "",
    description: "",
    humidity: "",
    wind_speed: "",
    city: "",
    country: "",
    error: null,
  });

  // useEffect(() => {
  //   console.log(state);
  // },[state])

  const getWeather = async (e) => {
    e.preventDefault();
    const { city, country } = e.target.elements;
    const cityValue = city.value;
    const countryValue = country.value;

    if (cityValue && countryValue) {
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${WEATHER_KEY}&units=metric`;

      const response = await fetch(API_URL);
      const data = await response.json();

      setState({
        temperature: data.main.temp,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        wind_speed: data.wind.speed,
        city: data.name,
        country: data.sys.country,
        error: null,
      });
      if (data.main.temp <25) {
        document.querySelector('body').classList.add('cold')
        document.querySelector('body').classList.remove('hot')

      }else{
        document.querySelector('body').classList.add('hot')
        document.querySelector('body').classList.remove('cold')
      }
    }else{
      setState({error: 'Please enter a city and a country'})
    }
  };

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <WeatherForm getWeather={getWeather} />
          <WeatherInfo {...state} />
        </div>
      </div>
    </div>
  );
}

export default App;
