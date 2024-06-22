import { API_KEY } from "./key";
const BASE_URL = "http://api.weatherapi.com/v1/current.json";

async function getWeather(location) {
  const URL = `${BASE_URL}?key=${API_KEY}&q=${location}`;
  try {
    const response = await fetch(URL, { mode: "cors" });
    if (!response.ok) {
      throw new Error("Response was not ok: " + response.statusText);
    }
    const locationData = await response.json();
    // console.log(locationData);
    return { locationData };
  } catch (error) {
    console.error("There has been a problem fetching data", error);
    throw error;
  }
}

async function processRequiredData(location) {
  try {
    const { locationData } = await getWeather(location);

    //Extract required data for app display
    const processedData = {
      name: locationData.location.name,
      country: locationData.location.country,
      region: locationData.location.region,
      localTime: locationData.location.localtime,
      condition: locationData.current.condition.text,
      tempF: locationData.current.temp_f,
      tempC: locationData.current.temp_c,
      feelsLikeF: locationData.current.feelslike_f,
      feelsLikeC: locationData.current.feelslike_c,
      humidity: locationData.current.humidity,
      windSpeedMPH: locationData.current.wind_mph,
    };
    console.log(processedData);
    return processedData;
  } catch (error) {
    console.error("There has been a problem processing the data:", error);
    throw error;
  }
}

export { processRequiredData };
