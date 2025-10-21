export const WEATHER_CONDITIONS = {
  Clear: {
    icon: '☀️',
    gradient: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 50%, #90caf9 100%)'
  },
  Clouds: {
    icon: '☁️',
    gradient: 'linear-gradient(135deg, #eceff1 0%, #cfd8dc 50%, #b0bec5 100%)'
  },
  Rain: {
    icon: '🌧️',
    gradient: 'linear-gradient(135deg, #b3e5fc 0%, #81d4fa 50%, #4fc3f7 100%)'
  },
  Drizzle: {
    icon: '🌦️',
    gradient: 'linear-gradient(135deg, #e1f5fe 0%, #b3e5fc 50%, #81d4fa 100%)'
  },
  Thunderstorm: {
    icon: '⛈️',
    gradient: 'linear-gradient(135deg, #cfd8dc 0%, #90a4ae 50%, #78909c 100%)'
  },
  Snow: {
    icon: '❄️',
    gradient: 'linear-gradient(135deg, #ffffff 0%, #eceff1 50%, #cfd8dc 100%)'
  },
  Mist: {
    icon: '🌫️',
    gradient: 'linear-gradient(135deg, #eceff1 0%, #cfd8dc 50%, #b0bec5 100%)'
  },
  Fog: {
    icon: '🌫️',
    gradient: 'linear-gradient(135deg, #eceff1 0%, #cfd8dc 50%, #b0bec5 100%)'
  },
  Haze: {
    icon: '🌫️',
    gradient: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 50%, #90caf9 100%)'
  },
  Smoke: {
    icon: '💨',
    gradient: 'linear-gradient(135deg, #cfd8dc 0%, #b0bec5 50%, #90a4ae 100%)'
  }
};

export const CACHE_DURATION = 10 * 60 * 1000; // 10 minutes
export const RATE_LIMIT_DELAY = 2000; // 2 seconds between API calls