import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import ForecastPage from "./Forecast";
import AnalyticsPage from "./Analytics";
import background1 from "./cloudybackground.jpeg";
import background2 from "./rainBackground.jpg";
import background3 from "./sunnyBackground.jpeg";
import humidity from "./Humidity.svg";
import Temperature from "./temperature.svg";
import sun from "./sun.svg";
import wind from "./wind.svg";
import hail from "./hail.svg";
import Cloudy from "./cloudy.svg";
import cloudy1 from "./cloudy1.svg";
import Pressure from "./pressure.svg";
import "./App.css";
import axios from "axios";
import SettingsPage from "./Settings";

function Home() {
  const [weatherData, setWeatherData] = useState(null);
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.openweathermap.org/data/2.5/weather?q=kumasi&appid=493f5f6ce965124215c988420aa760ac"
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const weatherBackgrounds = {
    Clear: "background3",
    Clouds: "background1",
    Overcast: "background1",
    Rain: "background2", // You can add more mappings for different weather conditions
    // Add mappings for other weather conditions as needed
  };

  const getDayAndTime = () => {
    const date = new Date();
    const day = date.toLocaleDateString(undefined, { weekday: "long" });
    const time = date.toLocaleTimeString();
    return `${day}, ${time}`;
  };

  const weatherIcons = {
    Clear: sun,
    Clouds: cloudy1,
    Rain: hail,
    Drizzle: hail,
    Thunderstorm: hail,
    Snow: hail,
    Mist: Cloudy,
    Smoke: Cloudy,
    Haze: Cloudy,
    Dust: Cloudy,
    Fog: Cloudy,
    Sand: Cloudy,
    Ash: Cloudy,
    Squall: wind,
    Tornado: wind,
  };

  const weatherCondition = weatherData?.weather[0]?.main;

  return (
    <div className="container">
      <div className="top-section">
        <div className="top-left">
          <div className="Image-container">
            <img
              width="600px"
              height="300px"
              src={weatherBackgrounds[weatherCondition]}
              className="Weather-image"
              alt="weather"
            />
            <div class="top-Temp">
              <img
                src={weatherIcons[weatherData?.weather[0]?.main]}
                width="40px"
                className="Tempicon"
                alt="weather"
              />{" "}
              {Math.round(weatherData?.main?.feels_like - 273.15)} °C
            </div>
            <div class="top-Date">
              {getDayAndTime()} <br></br>
              {weatherData?.weather[0]?.description}
            </div>
          </div>
        </div>

        <div className="top-right">
          <div className="card-container">
            <div className="analysis-info">
              <h2>Analysis Information</h2>
              <ul>
                <p> + Rainfall Trends </p>
                <p> + Temperature Changes</p>
                <p> + Humidity Trends</p>
                <p> + Climatic change</p>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h2 class="weather-heading">Today's Highlight</h2>
      <div className="bottom-section">
        <div className="card-container">
          <div className="bottom-right">
            <div className="weather-cards">
              <div className="card">
                <h3>
                  <img src={Temperature} className="Tempicon" alt="weather" />{" "}
                  Temperature
                </h3>
                <p>{Math.round(weatherData?.main?.temp - 273.15)} °C</p>
              </div>
              <div className="card">
                <h3>
                  <img src={hail} className="Tempicon" alt="weather" />
                  Rainfall
                </h3>
                <p>5 mm</p>
              </div>
              <div className="card">
                <h3>
                  <img src={humidity} className="Tempicon" alt="weather" />
                  Relative Humidity
                </h3>
                <p>{weatherData?.main?.humidity}%</p>
              </div>
              <div className="card">
                <h3>
                  <img src={wind} className="Tempicon" alt="weather" />
                  Wind Speed
                </h3>
                <p>{weatherData?.wind?.speed}m/s</p>
              </div>
              <div className="card">
                <h3>
                  <img src={Pressure} className="Tempicon" alt="weather" />
                  Pressure
                </h3>
                <p>{weatherData?.main?.pressure} hPa</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-left">
          <div className="card-container">
            <div className="small-cards">
              <div className="card">
                <p>Card 1</p>
              </div>
              <div className="card">
                <p>Card 2</p>
              </div>
              <div className="card">
                <p>Card 3</p>
              </div>
              <div className="card">
                <p>Card 4</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <div className="sidebar">
          <h2>Aerosense</h2>
          <div className="card">
            <Link to="/">Home</Link>
          </div>
          <div className="card">
            <Link to="/forecast">Forecast</Link>
          </div>
          <div className="card">
            <Link to="/analytics">Analytics</Link>
          </div>
          <div className="card">
            <a href="/settings">Settings</a>
          </div>
        </div>

        <Routes>
          <Route path="/forecast" element={<ForecastPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
