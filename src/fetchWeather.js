import { API_KEY } from "./key";
const BASE_URL = "http://api.weatherapi.com/v1/current.json";

async function getWeather(location) {
  const URL = `${BASE_URL}?key=${API_KEY}&q=${location}`;

  try {
    //Fetch the weather data
    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (!data.location || !data.current) {
      throw new Error("Invalid data structure received from API");
    }

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
    return city;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
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

function searchWeather(event) {
  event.preventDefault();
  console.log("Form submission prevented");
  const cityInput = document.getElementById("search-input");
  if (cityInput) {
    getWeather(cityInput)
      .then((city) => {
        console.log(city);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  } else {
    alert("Please enter a location.");
  }
}

function initializeDefaultSearch() {
  const defaultLocation = "New York";
  getWeather(defaultLocation)
    .then((city) => {
      console.log(`Default location:`, city);
    })
    .catch((error) => {
      alert(
        "Error fetching weather data for default location. Please try again."
      );
    });
}

export { initializeDefaultSearch, searchWeather };
