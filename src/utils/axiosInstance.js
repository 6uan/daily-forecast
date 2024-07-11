import axios from "axios";

export const weatherUrl = import.meta.env.VITE_WEATHER_URL;
export const weatherKey = import.meta.env.VITE_WEATHER_KEY;

export const axiosInstance = axios.create({
  baseURL: "https://api.weatherapi.com/v1", // Base URL for WeatherAPI
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

export default axiosInstance;
