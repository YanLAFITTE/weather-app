import apiKeyValue from "./conf.js";

const fetchData = async (town) => {
   const apiKey = apiKeyValue;
   const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${town}&appid=${apiKey}&units=metric&lang=fr`;

   const response = await fetch(apiUrl);
   if (!response.ok) {
      throw new Error("Failed to fetch weather data");
   }
   return await response.json();
};

export default fetchData;
