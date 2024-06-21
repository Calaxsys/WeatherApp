import { API_KEY } from "./key";
const BASE_URL = "http://api.weatherapi.com/v1/current.json";

async function getWeather(location) {
  const URL = `${BASE_URL}?key=${API_KEY}&q=${location}`;
  const response = await fetch(URL, { mode: "cors" });
  const locationData = await response.json();
  console.log(locationData.location);
}

export { getWeather };
