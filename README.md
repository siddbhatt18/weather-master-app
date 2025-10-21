# 🌤️ Weather Master - Real-time Weather Application

A modern, minimal weather application with API integration, smart caching, and animated weather icons built using React.js and OpenWeatherMap API.

![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat-square&logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript)
![CSS3](https://img.shields.io/badge/CSS3-Minimal-1572B6?style=flat-square&logo=css3)
![API](https://img.shields.io/badge/API-OpenWeather-orange?style=flat-square)

---

## ✨ Features

- 🌍 Real-time weather data for any city worldwide
- 📍 Geolocation support for current location weather
- 💾 Smart caching with localStorage (10-minute cache duration)
- ⏱️ API rate limiting to prevent quota exhaustion
- 🎨 Animated weather icons based on conditions
- 📊 Detailed weather metrics (humidity, wind speed, pressure, feels like)
- 🎨 Clean, minimal UI with white, grey, and blue color scheme
- 📱 Fully responsive design for all devices
- ⚡ Fast and lightweight
- 🔄 Auto-cached responses for better performance

---

## 🛠️ Tech Stack

**Frontend:** React.js, CSS3  
**API Integration:** Axios  
**API Provider:** OpenWeatherMap  
**Storage:** LocalStorage  
**Dev Tools:** Create React App

---

## 📦 Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher)
- OpenWeatherMap API Key (Free)
- Modern web browser
- Internet connection

---

## 🚀 Quick Start

### 1. Clone Repository

```bash
git clone https://github.com/yourusername/weather-master.git
cd weather-master
```

### 2. Install Dependencies

```bash
npm install
npm install axios
```

### 3. Get API Key

1. Visit [OpenWeatherMap](https://openweathermap.org/)
2. Sign up for a free account
3. Navigate to "API keys" section
4. Copy your API key

### 4. Configure Environment

Create `.env` file in root directory:

```env
REACT_APP_WEATHER_API_KEY=your_api_key_here
REACT_APP_WEATHER_API_URL=https://api.openweathermap.org/data/2.5
```

⚠️ **Replace `your_api_key_here` with your actual API key**

### 5. Run Application

```bash
npm start
```

Open browser to `http://localhost:3000`

---

## 📁 Project Structure

```
weather-app/
├── public/
│   ├── index.html
│   └── favicon.ico
│
├── src/
│   ├── components/
│   │   ├── SearchBar.js        # Search and location input
│   │   ├── WeatherCard.js      # Main weather display
│   │   ├── WeatherDetails.js   # Detailed metrics
│   │   ├── WeatherIcon.js      # Animated weather icons
│   │   ├── Loading.js          # Loading spinner
│   │   └── ErrorMessage.js     # Error handling display
│   │
│   ├── services/
│   │   ├── weatherAPI.js       # API integration logic
│   │   └── cache.js            # Caching mechanism
│   │
│   ├── utils/
│   │   ├── rateLimiter.js      # API rate limiting
│   │   └── constants.js        # Weather conditions & config
│   │
│   ├── styles/
│   │   ├── SearchBar.css
│   │   ├── WeatherCard.css
│   │   ├── WeatherDetails.css
│   │   ├── WeatherIcon.css
│   │   ├── Loading.css
│   │   └── ErrorMessage.css
│   │
│   ├── App.js                  # Main application component
│   ├── App.css                 # Global styles
│   ├── index.js                # Entry point
│   └── index.css               # Base styles
│
├── .env                        # Environment variables
├── .gitignore
├── package.json
└── README.md
```

---

## 🔌 API Integration

### Weather Endpoints Used

**Current Weather by City:**
```
GET https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric
```

**Current Weather by Coordinates:**
```
GET https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API_KEY}&units=metric
```

### Response Caching

- Cache duration: **10 minutes**
- Storage: **LocalStorage**
- Cache key format: `weather_{city}` or `weather_{lat}_{lon}`

### Rate Limiting

- Minimum delay between API calls: **2 seconds**
- Automatic throttling to prevent quota exhaustion
- Smart caching reduces API calls significantly

---

## 📖 Usage

### Search by City Name

1. Type city name in search bar (e.g., "London", "New York", "Tokyo")
2. Click **🔍 Search** button
3. Weather data will be displayed

### Use Current Location

1. Click **📍 Use Current Location** button
2. Allow browser location access when prompted
3. Your local weather will be displayed automatically

### View Weather Details

- **Temperature:** Current, high, and low
- **Weather Condition:** Description with animated icon
- **Humidity:** Percentage of moisture in air
- **Wind Speed:** In meters per second
- **Feels Like:** Perceived temperature
- **Pressure:** Atmospheric pressure in hPa

---

## 🎨 Customization

### Change Cache Duration

**File:** `src/utils/constants.js`
```javascript
export const CACHE_DURATION = 10 * 60 * 1000; // 10 minutes
// Change to: 5 * 60 * 1000 for 5 minutes
```

### Change Rate Limit Delay

**File:** `src/utils/constants.js`
```javascript
export const RATE_LIMIT_DELAY = 2000; // 2 seconds
// Change to: 3000 for 3 seconds
```

### Change Temperature Units

**File:** `src/services/weatherAPI.js`
```javascript
params: {
  // ...other params
  units: 'metric' // Change to 'imperial' for Fahrenheit
}
```

### Add Custom Weather Conditions

**File:** `src/utils/constants.js`
```javascript
export const WEATHER_CONDITIONS = {
  YourCondition: {
    icon: '🌈',
    gradient: 'linear-gradient(135deg, #color1 0%, #color2 100%)'
  }
};
```

### Customize Color Scheme

**File:** `src/App.css` - Main background
```css
body {
  background: linear-gradient(135deg, #yourcolor1 0%, #yourcolor2 100%);
}
```

**Primary Blue Color:**
Find and replace `#2196f3` in all CSS files with your preferred color.

---

## 🎨 Color Palette

```css
/* Primary Blues */
--primary-blue: #2196f3;
--primary-blue-dark: #1976d2;
--primary-blue-darker: #1565c0;

/* Light Blues (Backgrounds) */
--light-blue-50: #e3f2fd;
--light-blue-100: #bbdefb;
--light-blue-200: #90caf9;

/* Greys */
--grey-50: #fafafa;
--grey-300: #e0e0e0;
--grey-500: #9e9e9e;

/* Blue Greys (Text) */
--blue-grey-300: #90a4ae;
--blue-grey-600: #546e7a;
--blue-grey-800: #37474f;

/* White */
--white: #ffffff;
```

---

## 🐛 Troubleshooting

### API Key Issues

**Error: "Invalid API key"**
```bash
# Check your .env file
# Make sure there are no quotes around the API key
# Restart the development server after changing .env
npm start
```

### City Not Found

- Check spelling of city name
- Try adding country code: "London,UK"
- Some small cities might not be in the database

### CORS Errors

```bash
# This shouldn't happen with OpenWeatherMap, but if it does:
# The API is configured to allow browser requests
# Check if your API key is valid
```

### Cache Not Working

```bash
# Clear browser localStorage
# Open DevTools (F12) > Application > Local Storage
# Right-click > Clear
```

### Location Not Working

- Allow location permissions in browser
- Check if HTTPS is enabled (required for geolocation)
- Some browsers block geolocation on localhost

### Port Already in Use

```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux
lsof -ti:3000 | xargs kill -9
```

---

## 🌐 Deployment

### Deploy to Netlify

```bash
# Build the project
npm run build

# Option 1: Drag & Drop
# Go to netlify.com
# Drag the 'build' folder

# Option 2: Netlify CLI
npm install -g netlify-cli
netlify deploy --prod
```

**Set environment variables in Netlify:**
1. Site settings > Build & deploy > Environment
2. Add `REACT_APP_WEATHER_API_KEY`
3. Add `REACT_APP_WEATHER_API_URL`

### Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Add environment variables when prompted
```

### Deploy to GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json
"homepage": "https://yourusername.github.io/weather-app",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}

# Deploy
npm run deploy
```

⚠️ **Important:** Add environment variables in your hosting platform's dashboard.

---

## 🔐 Security Best Practices

✅ **Never commit `.env` file to Git**
```bash
# .env is already in .gitignore
# Double-check before committing
```

✅ **Use environment variables for API keys**
```javascript
// Good ✓
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

// Bad ✗
const API_KEY = "your-api-key-here";
```

✅ **Implement rate limiting**
- Already implemented in `src/utils/rateLimiter.js`
- Prevents API quota exhaustion

✅ **Cache API responses**
- Reduces unnecessary API calls
- Saves API quota
- Improves performance

---

## 📊 Performance Optimization

- ✅ **Lazy loading** for components
- ✅ **LocalStorage caching** (10-minute duration)
- ✅ **API rate limiting** (2-second delay)
- ✅ **Optimized CSS** with minimal animations
- ✅ **Responsive images** and icons
- ✅ **Code splitting** with React

---

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

**Contribution Ideas:**
- Add 5-day weather forecast
- Add weather maps
- Add multiple language support
- Add dark/light theme toggle
- Add favorite cities feature

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Your Name**
- GitHub: [@siddbhatt18](https://github.com/siddbhatt18/)
- LinkedIn: [Siddharth Bhattacharya](https://www.linkedin.com/in/siddharth-bhattacharya-8b9710247/)

---

## 🙏 Acknowledgments

- Weather data provided by [OpenWeatherMap API](https://openweathermap.org/)
- Built with [Create React App](https://create-react-app.dev/)
- Icons: Native emoji icons
- Inspired by modern weather apps like Weather.com and Apple Weather

---

**⭐ Star this repo if you find it helpful!**
