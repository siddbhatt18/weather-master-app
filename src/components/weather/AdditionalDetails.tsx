"use client";

import React from 'react';
import { useWeather } from '@/context/WeatherContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sunrise, Sunset, Moon, Cloud, Leaf } from 'lucide-react';
import { formatTime } from '@/utils/formatters';

const DetailItem: React.FC<{ icon: React.ReactNode; label: string; value: string }> = ({ icon, label, value }) => (
    <div className="flex items-center gap-3">
        <div className="text-primary">{icon}</div>
        <div>
            <p className="text-sm text-muted-foreground">{label}</p>
            <p className="text-lg font-semibold">{value}</p>
        </div>
    </div>
);

const getAirQualityLabel = (index: number) => {
    if (index <= 2) return 'Good';
    if (index <= 4) return 'Moderate';
    if (index <= 6) return 'Unhealthy for Sensitive';
    if (index <= 8) return 'Unhealthy';
    return 'Very Unhealthy';
}

export const AdditionalDetails: React.FC = () => {
  const { weatherData } = useWeather();
  
  if (!weatherData) return null;

  const { astro } = weatherData.forecast.forecastday[0];
  const { current } = weatherData;

  const airQualityIndex = current.air_quality?.['us-epa-index'];

  return (
    <Card className="glass-card mt-6 lg:mt-0 animate-fade-in-delay-3">
        <CardHeader>
            <CardTitle>Additional Details</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-6">
            <DetailItem icon={<Sunrise size={28}/>} label="Sunrise" value={formatTime(astro.sunrise)} />
            <DetailItem icon={<Sunset size={28}/>} label="Sunset" value={formatTime(astro.sunset)} />
            <DetailItem icon={<Moon size={28}/>} label="Moon Phase" value={astro.moon_phase} />
            <DetailItem icon={<Cloud size={28}/>} label="Cloud Cover" value={`${current.cloud}%`} />
             {airQualityIndex && (
                <DetailItem 
                    icon={<Leaf size={28}/>} 
                    label="Air Quality" 
                    value={getAirQualityLabel(airQualityIndex)} 
                />
            )}
        </CardContent>
    </Card>
  );
};
