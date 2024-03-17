import React from 'react';
import monthlyChart from './chart.png';
import './Analytics.css'; // CSS file for Analytics page styling

function AnalyticsPage() {
  return (
    <div className="Analytics">
      <h1 className="analytics-heading">Analytics Overview</h1>
      <div className="analytics-info">
        <div className="analytics-card">
          <h3>Monthly Trends</h3>
          <p>Visualize your data trends</p>
          <img width="300px" height="300px"src={monthlyChart} alt="Monthly Trends Chart" />
        </div>
        <div className="analytics-card">
          <h3>User Engagement</h3>
          <p>Analyze user interactions</p>
          <ul>
            <li>Page Views: 10,000</li>
            <li>Unique Visitors: 5,000</li>
            <li>Average Session Duration: 2 minutes</li>
          </ul>
        </div>
        <div className="analytics-card">
          <h3>Data Insights</h3>
          <p>Discover valuable insights</p>
          <div class="insights-list">
            <div class="insight-item">
              <h4>Popular Content:</h4>
              <p>Article A received the most views.</p>
            </div>
            <div class="insight-item">
              <h4>Conversion Rate:</h4>
              <p>Improved by 15% compared to last month.</p>
            </div>
           
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default AnalyticsPage;
