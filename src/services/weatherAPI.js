import axios from 'axios';
import RateLimiter from '../utils/rateLimiter';
import { RATE_LIMIT_DELAY } from '../utils/constants';
import CacheService from './cache';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const API_URL = process.env.REACT_APP_WEATHER_API_URL;

const rateLimiter = new RateLimiter(RATE_LIMIT_DELAY);

class WeatherAPI {
  async getWeatherByCity(city) {
    // Check cache first
    const cacheKey = `weather_${city.toLowerCase()}`;
    const cachedData = CacheService.get(cacheKey);

    if (cachedData) {
      console.log('Returning cached data for:', city);
      return cachedData;
    }

    // Apply rate limiting
    await rateLimiter.throttle();

    try {
      const response = await axios.get(`${API_URL}/weather`, {
        params: {
          q: city,
          appid: API_KEY,
          units: 'metric'
        }
      });

      // Cache the response
      CacheService.set(cacheKey, response.data);
      
      return response.data;
    } catch (error) {
      if (error.response) {
        switch (error.response.status) {
          case 404:
            throw new Error('City not found. Please check the spelling.');
          case 401:
            throw new Error('Invalid API key. Please check your configuration.');
          case 429:
            throw new Error('Too many requests. Please wait a moment.');
          default:
            throw new Error('Failed to fetch weather data. Please try again.');
        }
      }
      throw new Error('Network error. Please check your internet connection.');
    }
  }

  async getWeatherByCoordinates(lat, lon) {
    const cacheKey = `weather_${lat}_${lon}`;
    const cachedData = CacheService.get(cacheKey);

    if (cachedData) {
      console.log('Returning cached data for coordinates');
      return cachedData;
    }

    await rateLimiter.throttle();

    try {
      const response = await axios.get(`${API_URL}/weather`, {
        params: {
          lat: lat,
          lon: lon,
          appid: API_KEY,
          units: 'metric'
        }
      });

      CacheService.set(cacheKey, response.data);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch weather data for your location.');
    }
  }
}

export default new WeatherAPI();