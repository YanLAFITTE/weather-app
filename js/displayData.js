const displayData = (weatherData) => {
   const cityElement = document.querySelector(".city");
   const iconElement = document.querySelector(".section1-icon");
   const descElement = document.querySelector(".section1-desc");
   const tempElement = document.querySelector(".temperature-left");
   const tempDayElement = document.querySelector(".temperature-day");
   const tempNightElement = document.querySelector(".temperature-night");
   const humidityElement = document.querySelector(".humidity");
   const windElement = document.querySelector(".wind");

   cityElement.textContent = weatherData.name;

   iconElement.src = getWeatherIcon(weatherData.weather[0].icon);

   descElement.textContent = weatherData.weather[0].description;

   tempElement.textContent = `${Math.floor(weatherData.main.temp)}°c`;
   tempDayElement.textContent = `${Math.floor(weatherData.main.temp_max)}°`;
   tempNightElement.textContent = `${Math.floor(weatherData.main.temp_min)}°`;

   humidityElement.textContent = `humidité: ${weatherData.main.humidity} %`;
   windElement.textContent = `vent: ${Math.floor(weatherData.wind.speed)} km/h`;
};

// Function to get weather icon based on icon code
const getWeatherIcon = (iconCode) => {
   // Map icon codes to corresponding filenames of custom icons
   const iconMap = {
      "01d": "sun.svg",
      "01n": "moon.svg",
      "02d": "cloudy.svg",
      "02n": "cloudy.svg",
      "03d": "clouds.svg",
      "03n": "clouds.svg",
      "04d": "clouds.svg",
      "04n": "clouds.svg",
      "09d": "rain.svg",
      "09n": "rain.svg",
      "10d": "rain.svg",
      "10n": "rain.svg",
      "11d": "thunderstorm.svg",
      "11n": "thunderstorm.svg",
      "13d": "snow.svg",
      "13n": "snow.svg",
      "50d": "mist.svg",
      "50n": "mist.svg",
   };

   // Check if there's a custom icon available for the given icon code
   if (iconMap.hasOwnProperty(iconCode)) {
      // Return the path to the custom icon file
      return `./icons/${iconMap[iconCode]}`;
   } else {
      // If no custom icon is available, return a default icon path
      return "icons/cloudy.svg";
   }
};

export default displayData;
