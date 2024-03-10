import fetchWeather from "./fetchData.js";
import displayWeather from "./displayData.js";

document.addEventListener("DOMContentLoaded", function () {
   let town;
   let lastUpdatedTime = null;
   // Load default town configuration
   fetch("conf.json")
      .then((response) => {
         if (!response.ok) {
            throw new Error("Failed to load town configuration");
         }
         return response.json();
      })
      .then((data) => {
         town = data.town;
         fetchAndDisplayWeather(town);
      })
      .catch((error) => {
         console.error(error.message);
      });

   const fetchAndDisplayWeather = (town) => {
      fetchWeather(town)
         .then((weatherData) => {
            lastUpdatedTime = new Date();
            displayWeather(weatherData);
         })
         .catch((error) => {
            console.error(error.message);
         });
   };

   const checkRefresh = () => {
      // Get the current time
      const currentTime = new Date();
      // Calculate the elapsed time since the last data update
      const elapsedMilliseconds = currentTime - lastUpdatedTime;
      // Define the refresh interval
      const refreshInterval = 3600000;
      // Check if the elapsed time exceeds the refresh interval
      if (elapsedMilliseconds >= refreshInterval) {
         console.log("Refreshing weather data...");
         fetchAndDisplayWeather(town);
      } else {
         console.log("Data still fresh, no need to refresh.");
      }
   };

   // Fetch weather data every hour (3600000 milliseconds = 1 hour)
   setInterval(checkRefresh, 3600000);
});
