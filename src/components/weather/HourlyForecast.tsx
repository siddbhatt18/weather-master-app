"use client";

import React from 'react';
import { useWeather } from '@/context/WeatherContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { WeatherIcon } from './WeatherIcon';
import { formatTemperature, getHour } from '@/utils/formatters';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ScrollArea, ScrollBar } from '../ui/scroll-area';

export const HourlyForecast: React.FC = () => {
  const { weatherData, unit } = useWeather();
  
  if (!weatherData) return null;

  const hourlyData = weatherData.forecast.forecastday[0].hour;
  const currentEpoch = weatherData.location.localtime_epoch;
  
  const next24Hours = hourlyData.filter(hour => hour.time_epoch > currentEpoch);

  return (
    <Card className="glass-card mt-6 animate-fade-in-delay-1">
      <CardHeader>
        <CardTitle>Hourly Forecast</CardTitle>
      </CardHeader>
      <CardContent>
        <Carousel opts={{
            align: "start",
            dragFree: true,
        }}>
          <CarouselContent>
            {next24Hours.map((hour, index) => (
              <CarouselItem key={index} className="basis-1/5 sm:basis-1/6 md:basis-1/8 lg:basis-1/10 flex-shrink-0">
                <div className="flex flex-col items-center gap-2 p-2 rounded-lg hover:bg-accent/50 transition-colors">
                  <p className="text-sm font-medium text-muted-foreground">{getHour(hour.time)}</p>
                  <WeatherIcon code={hour.condition.code} isDay={hour.is_day === 1} className="w-10 h-10" />
                  <p className="text-lg font-bold">
                    {formatTemperature(unit === 'c' ? hour.temp_c : hour.temp_f, unit)}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex"/>
        </Carousel>
      </CardContent>
    </Card>
  );
};
