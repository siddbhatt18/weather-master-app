"use client";

import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, MapPin, X, Sun, Moon } from 'lucide-react';
import { useDebounce } from '@/hooks/useDebounce';
import { searchCities } from '@/services/weatherService';
import type { SearchAPIResponse } from '@/types/weather';
import { useWeather } from '@/context/WeatherContext';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

interface HeaderProps {
  onLocationSelect: (location: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onLocationSelect }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchAPIResponse[]>([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const debouncedQuery = useDebounce(query, 300);
  const { favorites, onLocationSelect: selectFavorite, unit, toggleUnit } = useWeather();
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  useEffect(() => {
    if (debouncedQuery.length > 2) {
      searchCities(debouncedQuery).then(setResults);
    } else {
      setResults([]);
    }
  }, [debouncedQuery]);

  const handleSelect = (result: SearchAPIResponse) => {
    onLocationSelect(result.name);
    setQuery('');
    setResults([]);
    setIsSearchFocused(false);
  };
  
  return (
    <header className="flex flex-col sm:flex-row items-center justify-between gap-4">
      <h1 className="text-3xl font-bold text-foreground">AtmosWeather</h1>
      <div className="flex-1 w-full sm:w-auto sm:max-w-xs md:max-w-sm lg:max-w-md relative">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search for a city..."
            className="pl-10 w-full"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsSearchFocused(true)}
          />
        </div>
        {isSearchFocused && (query.length > 0 || results.length > 0) && (
          <div className="absolute top-full mt-2 w-full glass-card rounded-md z-20 shadow-lg">
            {results.length > 0 ? (
              results.map(result => (
                <div
                  key={result.id}
                  className="p-3 hover:bg-accent/50 cursor-pointer flex items-center gap-2"
                  onClick={() => handleSelect(result)}
                >
                  <MapPin className="h-4 w-4" />
                  <span>{result.name}, {result.region}, {result.country}</span>
                </div>
              ))
            ) : (
              debouncedQuery.length > 2 && <div className="p-3 text-muted-foreground">No results found.</div>
            )}
             <Button variant="ghost" size="sm" className="w-full" onClick={() => setIsSearchFocused(false)}>Close</Button>
          </div>
        )}
      </div>

      <div className="flex items-center gap-2">
         {favorites.map(fav => (
            <Button key={fav} variant="ghost" size="sm" onClick={() => selectFavorite(fav)}>
                {fav.split(',')[0]}
            </Button>
        ))}

        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline" size="icon">
                    {theme === 'light' ? <Sun/> : <Moon />}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-60">
                <div className="grid gap-4">
                    <div className="space-y-2">
                        <h4 className="font-medium leading-none">Settings</h4>
                        <p className="text-sm text-muted-foreground">Adjust your preferences.</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Label htmlFor="theme-switch">
                            {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
                        </Label>
                        <Switch id="theme-switch" checked={theme === 'dark'} onCheckedChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
                    </div>
                    <div className="flex items-center space-x-2">
                        <Label htmlFor="unit-switch">
                            {unit === 'c' ? 'Celsius' : 'Fahrenheit'}
                        </Label>
                        <Switch id="unit-switch" checked={unit === 'f'} onCheckedChange={toggleUnit} />
                    </div>
                </div>
            </PopoverContent>
        </Popover>
      </div>
    </header>
  );
};
