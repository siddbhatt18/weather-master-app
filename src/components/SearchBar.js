import React, { useState } from 'react';
import '../styles/SearchBar.css';

const SearchBar = ({ onSearch, loading }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
    }
  };

  const handleCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          onSearch(null, {
            lat: position.coords.latitude,
            lon: position.coords.longitude
          });
        },
        (error) => {
          alert('Unable to retrieve your location. Please search manually.');
        }
      );
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  };

  return (
    <div className="search-bar-container">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name..."
          className="search-input"
          disabled={loading}
        />
        <button type="submit" className="search-button" disabled={loading}>
          🔍 Search
        </button>
      </form>
      <button 
        onClick={handleCurrentLocation} 
        className="location-button"
        disabled={loading}
      >
        📍 Use Current Location
      </button>
    </div>
  );
};

export default SearchBar;