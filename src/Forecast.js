import React, { useState, useEffect } from 'react';
import './Forecast.css'; // Import CSS file for Forecast page styling
import axios from 'axios';

function ForecastPage() {
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    const fetchForecastData = async () => {
      try {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=493f5f6ce965124215c988420aa760ac');
        setForecastData(response.data.list);
      } catch (error) {
        console.error('Error fetching forecast data:', error);
      }
    };

    fetchForecastData();
  }, []);

  const groupForecastByDay = () => {
    const groupedForecast = {};
    forecastData.forEach((forecast) => {
      const day = new Date(forecast.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' });
      if (!groupedForecast[day]) {
        groupedForecast[day] = [];
      }
      groupedForecast[day].push(forecast);
    });
    return groupedForecast;
  };

  const groupedForecast = groupForecastByDay();

  return (
    <div className="Forecast">
      <h1 className="forecast-heading">5-Day Forecast</h1>
      <div className="forecast-columns">
        {Object.keys(groupedForecast).map((day) => (
          <div key={day} className="forecast-column">
            <h2>{day}</h2>
            {groupedForecast[day].map((forecast, index) => (
              <div key={index} className="forecast-card">
                <p>{new Date(forecast.dt * 1000).toLocaleTimeString('en-US', { hour: 'numeric' })}: {forecast.weather[0].description}, {Math.round(forecast.main.temp - 273.15)}°C</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ForecastPage;
