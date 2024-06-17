const BASE_URL = "http://api.weatherapi.com/v1/current.json";

async function getWeather() {
  const API_KEY = "7322df854e9f4108ada232915241506";
  const URL = `${BASE_URL}?key=${API_KEY}&q=New-York`;

  //Fetch the weather data
  const response = await fetch(URL);
  const data = await response.json();
  // console.log(data.current);
  const city = new cityData(
    data.location.name,
    data.location.region,
    data.location.country,
    data.current.temp_f,
    data.current.condition.text,
    data.current.feelslike_f,
    data.current.wind_mph,
    data.current.humidity
  );
  console.log(city);
}

class cityData {
  constructor(
    locationName,
    region,
    country,
    temperatureF,
    weatherCondition,
    feelsLike,
    windSpeed,
    humidity
  ) {
    this.locationName = locationName;
    this.region = region;
    this.country = country;
    this.temperatureF = temperatureF;
    this.weatherCondition = weatherCondition;
    this.feelslike = feelsLike;
    this.windspeed = windSpeed;
    this.humidity = humidity;
  }
}

export { getWeather };
