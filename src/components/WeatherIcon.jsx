import React from "react";
import useFavicon from "../hooks/useFavicon";

const getIconFilename = (weather) => {
  const lowerCaseWeather = weather.toLowerCase();

  const now = new Date();
  const isNight = now.getHours() >= 19;

  // Showers And Thunderstorms Likely
  if (
    lowerCaseWeather.includes("thunderstorm") &&
    lowerCaseWeather.includes("showers")
  )
    return "thunderstorms-rain";
  // Untested
  if (lowerCaseWeather.includes("showers") || lowerCaseWeather.includes("rain"))
    return "rain";
  // Untested
  if (lowerCaseWeather.includes("snow")) return "snow";
  // Untested
  if (
    lowerCaseWeather.includes("cloudy") ||
    lowerCaseWeather.includes("overcast")
  )
    return isNight ? "overcast-night" : "overcast-day";
  // Untested
  if (lowerCaseWeather.includes("clear")) return "clear-day";
  // Untested
  if (lowerCaseWeather.includes("sunny")) return "clear-day";
  // Untested
  if (lowerCaseWeather.includes("fog") || lowerCaseWeather.includes("mist"))
    return "fog";

  // Default icon
  return "not-available";
};

const WeatherIcon = ({ weather }) => {
  const iconFilename = getIconFilename(weather);
  useFavicon(iconFilename);
  return (
    <div className="flex flex-1 items-center justify-center">
      <img
        className="size-auto object-contain p-2"
        src={`https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/${iconFilename}.svg`}
      />
    </div>
  );
};

export default WeatherIcon;
