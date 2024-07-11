import axios from "axios";

export const weatherUrl = import.meta.env.VITE_WEATHER_URL;
export const weatherKey = import.meta.env.VITE_WEATHER_KEY;

export const axiosInstance = axios.create({
  baseURL: "https://api.weather.gov/gridpoints/MFL/103,49",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    "User-Agent": "(myweatherapp.com, contact@myweatherapp.com)", // Your app information
    Accept: "application/geo+json", // You can change this to the desired format
  },
});
export default axiosInstance;
