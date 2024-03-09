import apiKeyValue from "./conf.js";
document.addEventListener("DOMContentLoaded", function () {
   // Fetch weather data
   const fetchWeather = (town) => {
      const apiKey = apiKeyValue;
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${town}&appid=${apiKey}&units=metric`;

      fetch(apiUrl)
         .then((response) => response.json())
         .then((weatherData) => {
            displayWeather(weatherData);
         })
         .catch((error) => {
            console.error("Error fetching weather data", error);
         });
   };

   // Display weather data
   const displayWeather = (weatherData) => {
      console.log(weatherData);
   };

   // Load default town configuration
   fetch("conf.json")
      .then((response) => response.json())
      .then((data) => {
         const town = data.town;
         fetchWeather(town);

         // Fetch weather data every hour (3600000 milliseconds = 1 hour)
         setInterval(() => fetchWeather(town), 3600000);
      })
      .catch((error) => {
         console.error("Error loading town configuration", error);
      });
});
