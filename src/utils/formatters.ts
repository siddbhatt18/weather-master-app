import { format } from 'date-fns';

export const formatTemperature = (temp: number, unit: 'c' | 'f'): string => {
  return `${Math.round(temp)}°${unit.toUpperCase()}`;
};

export const getHour = (time: string): string => {
  try {
    return format(new Date(time), 'ha');
  } catch {
    return 'N/A';
  }
};

export const getDayOfWeek = (date: string): string => {
    try {
        const day = format(new Date(date), 'eee');
        const today = format(new Date(), 'eee');
        return day === today ? 'Today' : day;
    } catch {
        return 'N/A';
    }
};

export const formatTime = (time: string): string => {
  // Assuming time is in "05:30 PM" format from astro
  return time;
};
