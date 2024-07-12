import React, { useState, useEffect } from "react";
import { axiosInstance, weatherUrl, weatherKey } from "../utils/axiosInstance";
import date from "date-and-time";
import WeatherIcon from "./WeatherIcon";

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  const pattern = "ddd, MMM DD YYYY";
  const minutepattern = "h:mm:ss A";
  const currDate = date.format(currentTime, pattern);
  const minDate = date.format(currentTime, minutepattern);

  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axiosInstance.get(`/forecast`);
        setWeatherData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchWeather();
    console.log(JSON.stringify(weatherData, null, 2));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  const forecast = weatherData.properties.periods[0];

  return (
    <div className="rounded-t-lg border-2 bg-white p-8">
      <div className="flex flex-row justify-center space-x-8 align-middle">
        <div className="flex w-auto flex-col text-black">
          {/* Current Date */}
          <div className="flex flex-col items-end justify-start">
            <p className="text-3xl font-extrabold text-green-900 md:text-4xl">
              {currDate}{" "}
            </p>
            <p className="text-2xl text-black">{minDate} </p>
          </div>
          {/* CONTAINER FOR TEMP AND ICON */}
          <div className="mb-4 flex h-28 flex-row items-center justify-center">
            {/* TEMP VAL */}
            <div className="degree-symbol ml-5 text-7xl font-bold">
              {JSON.stringify(forecast.temperature).replace(/"/g, "")}
            </div>
            {/* ICON IMG */}
            <WeatherIcon weather={forecast.shortForecast} />
          </div>
          {/* FORECAST of LOCATION */}
          <div className="text-md max-w-[290px] text-center text-black">
            {JSON.stringify(forecast.shortForecast).replace(/"/g, "")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
