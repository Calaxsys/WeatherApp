import { API_KEY } from "./key";
const BASE_URL = "http://api.weatherapi.com/v1/current.json";

async function getWeather(location) {
  const URL = `${BASE_URL}?key=${API_KEY}&q=${location}`;
}
