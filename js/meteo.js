import fetchWeather from "./fetchData.js";
import displayWeather from "./displayData.js";

document.addEventListener("DOMContentLoaded", function () {
   // Load default town configuration
   fetch("conf.json")
      .then((response) => {
         if (!response.ok) {
            throw new Error("Failed to load town configuration");
         }
         return response.json();
      })
      .then((data) => {
         const town = data.town;
         fetchAndDisplayWeather(town);
      })
      .catch((error) => {
         console.error(error.message);
      });

   const fetchAndDisplayWeather = (town) => {
      fetchWeather(town)
         .then((weatherData) => {
            displayWeather(weatherData);
         })
         .catch((error) => {
            console.error(error.message);
         });
   };

   // Fetch weather data every hour (3600000 milliseconds = 1 hour)
   setInterval(() => fetchAndDisplayWeather(town), 3600000);
});
