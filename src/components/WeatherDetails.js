import React from 'react';
import '../styles/WeatherDetails.css';

const WeatherDetails = ({ weather }) => {
  return (
    <div className="weather-details">
      <div className="detail-item">
        <span className="detail-icon">💧</span>
        <div className="detail-info">
          <p className="detail-label">Humidity</p>
          <p className="detail-value">{weather.main.humidity}%</p>
        </div>
      </div>

      <div className="detail-item">
        <span className="detail-icon">💨</span>
        <div className="detail-info">
          <p className="detail-label">Wind Speed</p>
          <p className="detail-value">{weather.wind.speed} m/s</p>
        </div>
      </div>

      <div className="detail-item">
        <span className="detail-icon">🌡️</span>
        <div className="detail-info">
          <p className="detail-label">Feels Like</p>
          <p className="detail-value">{Math.round(weather.main.feels_like)}°C</p>
        </div>
      </div>

      <div className="detail-item">
        <span className="detail-icon">🔽</span>
        <div className="detail-info">
          <p className="detail-label">Pressure</p>
          <p className="detail-value">{weather.main.pressure} hPa</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;