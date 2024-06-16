const BASE_URL = "http://api.weatherapi.com/v1/current.json";

async function getWeather() {
  const API_KEY = "7322df854e9f4108ada232915241506";
  const URL = `${BASE_URL}?key=${API_KEY}&q=New-York`;

  //Fetch the weather data
  const response = await fetch(URL);
  const data = await response.json();
  console.log(data);
  return data;
}

function renderData() {
  class cityData {
    constructor(
      locationName,
      region,
      temperatureF,
      weatherCondition,
      feelsLike,
      windSpeed,
      humidity
    ) {
      this.locationName = locationName;
      this.temperatureF = temperatureF;
      this.weatherCondition = weatherCondition;
      this.region = region;
      this.feelslike = feelsLike;
      this.windspeed = windSpeed;
      this.humidity = humidity;
    }
  }
}

export { getWeather };
