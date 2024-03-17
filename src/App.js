import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import ForecastPage from './Forecast';
import AnalyticsPage from './Analytics';
import background from './pic2.webp';
import './App.css';

function Home() {
  return (
    
      <div className="container">
        <div className="top-section">
          <div className="top-left">
            
            <div className="Image-container">
              <img width="600px" height="300px" src={background} className="Weather-image" alt="weather" />
              <div class="top-Temp">  25°C</div>
              <div class="top-Date">Tuesday, 3:00pm  <br></br>Partly Cloudy</div>   
            </div>
          </div>

          <div className="top-right">
            <div className="card-container">
            <div className="analysis-info">
              <h2>Analysis Information</h2>
              <p>Insert your analysis data here</p>
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
                <h3>Temperature</h3>
                <p>25°C</p>
              </div>
              <div className="card">
                <h3>Rainfall</h3>
                <p>5 mm</p>
              </div>
              <div className="card">
                <h3>Relative Humidity</h3>
                <p>70%</p>
              </div>
              <div className="card">
                <h3>Wind Speed</h3>
                <p>10 m/s</p>
              </div>
              <div className="card">
                <h3>Pressure</h3>
                <p>1013 hPa</p>
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
          <h2>Navigation</h2>
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
            <a href="#">Settings</a>
          </div>
        </div>

        <Routes>
          <Route path="/forecast" element={<ForecastPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;