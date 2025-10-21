import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import Loading from './components/Loading';
import ErrorMessage from './components/ErrorMessage';
import WeatherAPI from './services/weatherAPI';
import './App.css';

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Load default city on component mount
    handleSearch('London');
  }, []);

  const handleSearch = async (city, coordinates) => {
    setLoading(true);
    setError(null);

    try {
      let data;
      if (coordinates) {
        data = await WeatherAPI.getWeatherByCoordinates(
          coordinates.lat,
          coordinates.lon
        );
      } else {
        data = await WeatherAPI.getWeatherByCity(city);
      }
      setWeather(data);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const handleRetry = () => {
    if (weather?.name) {
      handleSearch(weather.name);
    } else {
      handleSearch('London');
    }
  };

  return (
    <div className="App">
      <div className="app-container">
        <header className="app-header">
          <h1 className="app-title">🌤️ Weather App</h1>
          <p className="app-subtitle">Get real-time weather updates</p>
        </header>

        <SearchBar onSearch={handleSearch} loading={loading} />

        <div className="content-container">
          {loading && <Loading />}
          
          {error && !loading && (
            <ErrorMessage message={error} onRetry={handleRetry} />
          )}
          
          {weather && !loading && !error && (
            <WeatherCard weather={weather} />
          )}
        </div>

        <footer className="app-footer">
          <p>Data provided by OpenWeatherMap API</p>
        </footer>
      </div>
    </div>
  );
}

export default App;