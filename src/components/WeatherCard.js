import React from 'react';
import WeatherIcon from './WeatherIcon';
import WeatherDetails from './WeatherDetails';
import { WEATHER_CONDITIONS } from '../utils/constants';
import '../styles/WeatherCard.css';

const WeatherCard = ({ weather }) => {
  const condition = weather.weather[0].main;
  const weatherStyle = WEATHER_CONDITIONS[condition] || WEATHER_CONDITIONS.Clear;

  return (
    <div 
      className="weather-card"
      style={{ background: weatherStyle.gradient }}
    >
      <div className="weather-header">
        <h2 className="city-name">
          {weather.name}, {weather.sys.country}
        </h2>
        <p className="weather-date">
          {new Date().toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </p>
      </div>

      <div className="weather-main">
        <WeatherIcon condition={condition} />
        <div className="temperature-section">
          <h1 className="temperature">
            {Math.round(weather.main.temp)}°C
          </h1>
          <p className="weather-description">
            {weather.weather[0].description}
          </p>
          <div className="temp-range">
            <span>H: {Math.round(weather.main.temp_max)}°</span>
            <span>L: {Math.round(weather.main.temp_min)}°</span>
          </div>
        </div>
      </div>

      <WeatherDetails weather={weather} />
    </div>
  );
};

export default WeatherCard;