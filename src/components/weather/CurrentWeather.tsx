"use client";

import React from 'react';
import { useWeather } from '@/context/WeatherContext';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { WeatherIcon } from './WeatherIcon';
import { formatTemperature } from '@/utils/formatters';
import { Droplets, Wind, Sun, Eye, Gauge, Star, XCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { useToast } from '@/hooks/use-toast';

const DetailItem: React.FC<{ icon: React.ReactNode; label: string; value: string | number }> = ({ icon, label, value }) => (
  <div className="flex items-center gap-2 text-sm">
    <div className="text-muted-foreground">{icon}</div>
    <div className="flex flex-col">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-semibold text-foreground">{value}</span>
    </div>
  </div>
);

export const CurrentWeather: React.FC = () => {
  const { weatherData, unit, favorites, addFavorite, removeFavorite, isFavorite } = useWeather();
  const { toast } = useToast();

  if (!weatherData) return null;

  const { current, location } = weatherData;
  const temp = unit === 'c' ? current.temp_c : current.temp_f;
  const feelsLike = unit === 'c' ? current.feelslike_c : current.feelslike_f;

  const handleFavoriteToggle = () => {
    const locationName = `${location.name}, ${location.country}`;
    if (isFavorite(locationName)) {
      removeFavorite(locationName);
      toast({ title: "Removed from favorites." });
    } else {
      if(addFavorite(locationName)) {
        toast({ title: "Added to favorites!" });
      } else {
        toast({ variant: 'destructive', title: "Favorite limit reached." });
      }
    }
  };

  return (
    <Card className="glass-card animate-fade-in">
      <CardHeader>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div>
            <h2 className="text-2xl font-bold">{location.name}, {location.country}</h2>
            <p className="text-muted-foreground">Last updated: {current.last_updated.split(' ')[1]}</p>
          </div>
          <Button variant="ghost" size="sm" onClick={handleFavoriteToggle}>
            {isFavorite(`${location.name}, ${location.country}`) ? <XCircle className="mr-2 h-4 w-4" /> : <Star className="mr-2 h-4 w-4" />}
            {isFavorite(`${location.name}, ${location.country}`) ? "Remove Favorite" : "Add Favorite"}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center">
            <WeatherIcon code={current.condition.code} isDay={current.is_day === 1} className="w-24 h-24 sm:w-32 sm:h-32 text-primary" />
            <div className="ml-4">
              <p className="text-7xl sm:text-8xl font-black tracking-tighter">{formatTemperature(temp, unit)}</p>
              <p className="text-lg text-muted-foreground -mt-2">
                Feels like {formatTemperature(feelsLike, unit)}
              </p>
              <p className="text-xl font-medium mt-1">{current.condition.text}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-4">
            <DetailItem icon={<Droplets size={20} />} label="Humidity" value={`${current.humidity}%`} />
            <DetailItem icon={<Wind size={20} />} label="Wind" value={`${unit === 'c' ? current.wind_kph : current.wind_mph} ${unit === 'c' ? 'km/h' : 'mph'}`} />
            <DetailItem icon={<Sun size={20} />} label="UV Index" value={current.uv} />
            <DetailItem icon={<Eye size={20} />} label="Visibility" value={`${unit === 'c' ? current.vis_km : current.vis_miles} ${unit === 'c' ? 'km' : 'miles'}`} />
            <DetailItem icon={<Gauge size={20} />} label="Pressure" value={`${unit === 'c' ? current.pressure_mb : current.pressure_in} ${unit === 'c' ? 'mb' : 'in'}`} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
