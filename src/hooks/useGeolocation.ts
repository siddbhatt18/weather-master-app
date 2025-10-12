"use client";

import { useState, useEffect } from 'react';

type GeolocationState = {
  loading: boolean;
  coordinates: { lat: number; lon: number } | null;
  error: GeolocationPositionError | Error | null;
};

export function useGeolocation() {
  const [state, setState] = useState<GeolocationState>({
    loading: true,
    coordinates: null,
    error: null,
  });

  useEffect(() => {
    if (!navigator.geolocation) {
      setState(prevState => ({
        ...prevState,
        loading: false,
        error: new Error('Geolocation is not supported by your browser.'),
      }));
      return;
    }

    const onSuccess = (position: GeolocationPosition) => {
      setState({
        loading: false,
        coordinates: {
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        },
        error: null,
      });
    };

    const onError = (error: GeolocationPositionError) => {
      setState({
        loading: false,
        coordinates: null,
        error: error,
      });
    };

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return state;
}
