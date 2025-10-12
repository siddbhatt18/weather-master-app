"use client";

import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import type { WeatherAPIResponse } from '@/types/weather';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { MAX_FAVORITE_LOCATIONS } from '@/lib/constants';

type Unit = 'c' | 'f';

interface WeatherContextType {
  weatherData: WeatherAPIResponse | null;
  setWeatherData: (data: WeatherAPIResponse | null) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  error: string | null;
  setError: (error: string | null) => void;
  unit: Unit;
  toggleUnit: () => void;
  favorites: string[];
  addFavorite: (location: string) => boolean;
  removeFavorite: (location: string) => void;
  isFavorite: (location: string) => boolean;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export const WeatherProvider = ({ children }: { children: ReactNode }) => {
  const [weatherData, setWeatherData] = useState<WeatherAPIResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [unit, setUnit] = useLocalStorage<Unit>('weather-unit', 'c');
  const [favorites, setFavorites] = useLocalStorage<string[]>('weather-favorites', []);

  const toggleUnit = useCallback(() => {
    setUnit(prevUnit => (prevUnit === 'c' ? 'f' : 'c'));
  }, [setUnit]);

  const addFavorite = useCallback((location: string) => {
    let success = false;
    setFavorites(prev => {
      const lowerCaseLocation = location.toLowerCase();
      if (prev.length < MAX_FAVORITE_LOCATIONS && !prev.map(f => f.toLowerCase()).includes(lowerCaseLocation)) {
        success = true;
        return [...prev, location];
      }
      return prev;
    });
    return success;
  }, [setFavorites]);

  const removeFavorite = useCallback((location: string) => {
    setFavorites(prev => prev.filter(fav => fav.toLowerCase() !== location.toLowerCase()));
  }, [setFavorites]);

  const isFavorite = useCallback((location: string) => {
    return favorites.map(f => f.toLowerCase()).includes(location.toLowerCase());
  }, [favorites]);

  const value: WeatherContextType = {
    weatherData,
    setWeatherData,
    loading,
    setLoading,
    error,
    setError,
    unit,
    toggleUnit,
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
  };

  return (
    <WeatherContext.Provider value={value}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = (): WeatherContextType => {
  const context = useContext(WeatherContext);
  if (context === undefined) {
    throw new Error('useWeather must be used within a WeatherProvider');
  }
  return context;
};
