import axios from "axios";

const NASA_APOD_URL = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`;
const OPEN_WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather`;
const OPEN_WEATHER_API_KEY = import.meta.env.OPEN_WEATHER_API_KEY;


export const fetchApodData = async () => {
  const response = await axios.get(NASA_APOD_URL);
  return response;
}

export const fetchCurrentWeather = async (lat, lon) => {
  const url = `${OPEN_WEATHER_URL}?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}&units=metric`;
  const response = await axios.get(url);
  return response;
}