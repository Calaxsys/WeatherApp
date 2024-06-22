import { processRequiredData } from "./fetchWeather";
//Declare const and add event listener to search button
const searchBtn = document.getElementById("search-input-btn");

//HTML for city, country name display
const locationTitleDisplay = document.getElementById("location-title-display");
//HTML for local time and date display
const localDateTimeDisplay = document.getElementById("local-date-time");
//HTML for temp display
const tempDisplay = document.getElementById("temp-display");
//HTML for feels like display
const feelsLikeDisplay = document.getElementById("feels-like");
//HTML for humidity display
const humidityDisplay = document.getElementById("humidity");
//HTML for wind speed display
const windSpeedDisplay = document.getElementById("wind-speed");

searchBtn.addEventListener("click", () => {
  const searchInputValue = document.getElementById("search-input").value;
  const trimmedString = searchInputValue.toLowerCase().trim();
  updateWeatherDisplay(trimmedString);
});

async function updateWeatherDisplay(location) {
  try {
    const response = await processRequiredData(location);

    locationTitleDisplay.textContent = `${response.name}, ${response.region} ${response.country}`;
    localDateTimeDisplay.textContent = response.localTime;
    tempDisplay.textContent = `${response.tempF}°F`;
    feelsLikeDisplay.textContent = `Feels Like: ${response.feelsLikeF}`;
    humidityDisplay.textContent = `Humidity Level: ${response.humidity}%`;
    windSpeedDisplay.textContent = `Wind Speed: ${response.windSpeedMPH} mph`;
  } catch (error) {
    console.error("There has been a problem updating the DOM: ", error);
    throw error;
  }
}
