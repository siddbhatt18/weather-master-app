"use client";

import React, { useEffect, useCallback } from 'react';
import { useWeather, WeatherProvider } from '@/context/WeatherContext';
import { useGeolocation } from '@/hooks/useGeolocation';
import { getForecast } from '@/services/weatherService';
import { DEFAULT_LOCATION } from '@/lib/constants';
import { Header } from './Header';
import { CurrentWeather } from './CurrentWeather';
import { CurrentWeatherSkeleton } from './Skeletons';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';
import { HourlyForecast } from './HourlyForecast';
import { WeeklyForecast } from './WeeklyForecast';
import { AdditionalDetails } from './AdditionalDetails';
import { DynamicBackground } from './DynamicBackground';

const WeatherUI: React.FC = () => {
  const { weatherData, setWeatherData, loading, setLoading, error, setError } = useWeather();
  const { coordinates, error: geoError } = useGeolocation();

  const fetchWeather = useCallback(async (location: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getForecast(location);
      setWeatherData(data);
    } catch (e: any) {
      setError(e.message || 'Failed to fetch weather data.');
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  }, [setLoading, setError, setWeatherData]);

  useEffect(() => {
    if (coordinates) {
      fetchWeather(`${coordinates.lat},${coordinates.lon}`);
    } else if (geoError) {
      fetchWeather(DEFAULT_LOCATION);
    }
  }, [coordinates, geoError, fetchWeather]);

  const handleLocationSelect = (location: string) => {
    fetchWeather(location);
  };

  return (
    <div className="relative min-h-screen w-full">
      <DynamicBackground condition={weatherData?.current.condition.text ?? ''} />
      <main className="relative z-10 mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
        <Header onLocationSelect={handleLocationSelect} />
        {error && (
          <Alert variant="destructive" className="my-4 glass-card">
            <Terminal className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        {loading ? (
          <CurrentWeatherSkeleton />
        ) : weatherData ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            <div className="lg:col-span-3">
              <CurrentWeather />
            </div>
            <div className="lg:col-span-2">
              <HourlyForecast />
              <WeeklyForecast />
            </div>
            <div className="lg:col-span-1">
              <AdditionalDetails />
            </div>
          </div>
        ) : (
          !error && <div className="text-center py-20">Enter a city to get started.</div>
        )}
      </main>
    </div>
  );
};

export const WeatherDashboard: React.FC = () => {
  return (
    <WeatherProvider>
      <WeatherUI />
    </WeatherProvider>
  );
};
