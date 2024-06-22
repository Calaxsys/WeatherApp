import { processRequiredData } from "./fetchWeather";
//Declare const and add event listener to search button
const searchBtn = document.getElementById("search-input-btn");

searchBtn.addEventListener("click", () => {
  const searchInputValue = document.getElementById("search-input").value;
  const trimmedString = searchInputValue.toLowerCase().trim();
  updateWeatherDisplay(trimmedString);
});

async function updateWeatherDisplay(location) {
  try {
    const { processedData } = await processRequiredData(location);
  } catch (error) {
    console.error("There has been a problem updating the DOM: ", error);
    throw error;
  }
}
