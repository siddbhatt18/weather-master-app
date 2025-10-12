"use client";

import React from 'react';
import { useWeather } from '@/context/WeatherContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { WeatherIcon } from './WeatherIcon';
import { formatTemperature, getDayOfWeek } from '@/utils/formatters';
import { Separator } from '../ui/separator';

export const WeeklyForecast: React.FC = () => {
  const { weatherData, unit } = useWeather();

  if (!weatherData) return null;

  return (
    <Card className="glass-card mt-6 animate-fade-in-delay-2">
      <CardHeader>
        <CardTitle>7-Day Forecast</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {weatherData.forecast.forecastday.map((day, index) => (
            <React.Fragment key={day.date_epoch}>
              <li className="flex items-center justify-between p-2 rounded-md hover:bg-accent/50 transition-colors">
                <p className="font-semibold w-16">{getDayOfWeek(day.date)}</p>
                <WeatherIcon code={day.day.condition.code} isDay={true} className="w-8 h-8 mx-4" />
                <p className="text-sm text-muted-foreground flex-1">{day.day.condition.text}</p>
                <div className="flex w-24 justify-end">
                    <p className="font-semibold">
                    {formatTemperature(unit === 'c' ? day.day.maxtemp_c : day.day.maxtemp_f, unit)}
                    </p>
                    <p className="text-muted-foreground ml-2">
                    {formatTemperature(unit === 'c' ? day.day.mintemp_c : day.day.mintemp_f, unit)}
                    </p>
                </div>
              </li>
              {index < weatherData.forecast.forecastday.length - 1 && <Separator />}
            </React.Fragment>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
