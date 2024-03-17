import React from 'react';
import './Forecast.css'; // Create a new CSS file for Forecast page styling

function ForecastPage() {
  return (
    <div className="Forecast">
      <h1 className="forecast-heading">7-Day Forecast</h1>
      <div className="forecast-cards">
        {/* Forecast cards can be dynamically generated based on data */}
        <div className="forecast-card">
  <h3>Monday</h3>
  <p>Sunny, 28°C</p>
</div>
<div className="forecast-card">
  <h3>Tuesday</h3>
  <p>Partly Cloudy, 25°C</p>
</div>
<div className="forecast-card">
  <h3>Wednesday</h3>
  <p>Scattered Showers, 22°C</p>
</div>
<div className="forecast-card">
  <h3>Thursday</h3>
  <p>Cloudy with Clearing, 23°C</p>
</div>
<div className="forecast-card">
  <h3>Friday</h3>
  <p>Sunny Spells, 24°C</p>
</div>
<div className="forecast-card">
  <h3>Saturday</h3>
  <p>Partly Cloudy, 26°C</p>
</div>
<div className="forecast-card">
  <h3>Sunday</h3>
  <p>Overcast, 21°C</p>
</div>

      </div>
    </div>
  );
}

export default ForecastPage;
