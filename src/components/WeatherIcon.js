import React from 'react';
import { WEATHER_CONDITIONS } from '../utils/constants';
import '../styles/WeatherIcon.css';

const WeatherIcon = ({ condition }) => {
  const weather = WEATHER_CONDITIONS[condition] || WEATHER_CONDITIONS.Clear;

  return (
    <div className="weather-icon-container">
      <div className="weather-icon animated-icon">
        {weather.icon}
      </div>
    </div>
  );
};

export default WeatherIcon;