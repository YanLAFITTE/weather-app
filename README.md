# Weather App

Welcome to the Weather App! This web application allows you to check the current weather conditions for a specific location.

## Features

- Display current weather information (temperature, weather description, humidity, wind speed).
- Automatically fetches weather data every hour to keep information up-to-date.
- Responsive design for both desktop and mobile devices.

## Technologies Used

- HTML
- CSS
- JavaScript

## Getting Started

1. Clone this repository to your local machine.
2. Obtain an API key from [OpenWeatherMap](https://openweathermap.org/).
3. Add the following code to `conf.js`, replacing `YOUR_API_KEY` with your actual API key:

```javascript
const apiKey = "YOUR_API_KEY";
export default apiKey;
```

## Configuration

- Modify `conf.json` to set the default town for weather information retrieval.

## Credits

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/).
