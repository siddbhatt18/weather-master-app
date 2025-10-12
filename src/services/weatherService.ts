import { WEATHER_API_BASE_URL, WEATHER_CACHE_DURATION } from '@/lib/constants';
import type { WeatherAPIResponse, SearchAPIResponse } from '@/types/weather';

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

type CachedData = {
  timestamp: number;
  data: WeatherAPIResponse;
};

const fetchData = async <T>(endpoint: string, params: Record<string, string>): Promise<T> => {
  if (!API_KEY) {
    throw new Error('Weather API key is not configured.');
  }

  const url = new URL(`${WEATHER_API_BASE_URL}/${endpoint}`);
  url.search = new URLSearchParams({ ...params, key: API_KEY }).toString();

  for (let i = 0; i < 3; i++) { // Retry logic
    try {
      const response = await fetch(url.toString());
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error.message || `HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      if (i === 2) throw error;
      await new Promise(res => setTimeout(res, 1000 * (i + 1))); // Exponential backoff
    }
  }
  throw new Error('Failed to fetch data after multiple retries.');
};

export const getForecast = async (location: string): Promise<WeatherAPIResponse> => {
  const cacheKey = `weather_${location.toLowerCase()}`;
  
  try {
    const cachedItem = localStorage.getItem(cacheKey);
    if (cachedItem) {
      const { timestamp, data } = JSON.parse(cachedItem) as CachedData;
      if (Date.now() - timestamp < WEATHER_CACHE_DURATION) {
        return data;
      }
    }
  } catch (error) {
    console.warn('Could not read from localStorage', error);
  }

  const data = await fetchData<WeatherAPIResponse>('forecast.json', {
    q: location,
    days: '7',
    aqi: 'yes',
    alerts: 'yes',
  });

  try {
    const cacheData: CachedData = { timestamp: Date.now(), data };
    localStorage.setItem(cacheKey, JSON.stringify(cacheData));
  } catch (error) {
    console.warn('Could not write to localStorage', error);
  }

  return data;
};

export const searchCities = async (query: string): Promise<SearchAPIResponse[]> => {
  if (query.length < 3) {
    return [];
  }
  return await fetchData<SearchAPIResponse[]>('search.json', { q: query });
};
