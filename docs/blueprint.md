# **App Name**: AtmosWeather

## Core Features:

- Location Detection: Automatically detect the user's location to provide localized weather data.
- Weather Data Fetching: Fetch real-time weather data, including current conditions, forecasts, and hourly breakdowns, from the WeatherAPI (weatherapi.com).
- Data Persistence and Caching: Implements smart caching via localstorage to improve UX and minimize external requests.
- Animated Weather Icons: Display visually appealing and animated weather icons that dynamically change based on the current conditions and time of day.
- Detailed Weather Display: Showcasing current conditions (temperature, 'feels like', humidity, wind, UV, visibility, pressure) with the option of toggling between Celsius/Fahrenheit.
- Location management: Allowing a user to save locations that can quickly be accessed later
- Weather specific background generation: Generate CSS to adjust the background image according to current conditions using a tool.

## Style Guidelines:

- Primary color: A serene light blue (#A0D2EB) evokes a sense of calm and clarity, reminiscent of clear skies. 
- Background color: A very light blue (#F0F8FF) provides a clean and airy feel.
- Accent color: A gentle lavender (#E6E6FA) offers a subtle contrast, enhancing the modern aesthetic.
- Body and headline font: 'Inter', a grotesque-style sans-serif for a modern, objective look.
- Use a set of consistent and visually engaging animated SVG icons to represent different weather conditions. Preload key icons to ensure a fast and responsive user experience.
- Implement a clean and minimalist layout with a glass-morphism effect for the cards. Ensure a balanced distribution of UI elements to prevent clutter.
- Incorporate smooth animations for page transitions, hover effects, and data updates to create a visually engaging and user-friendly experience.