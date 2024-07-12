import React, { useState, useEffect } from "react";
import { axiosInstance, weatherUrl, weatherKey } from "../utils/axiosInstance";
import date from "date-and-time";

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
    <div className="rounded-t-lg border-2 bg-white p-10">
      <div className="flex flex-row justify-center space-x-8 align-middle">
        <div className="flex w-auto flex-col text-black">
          {/* Current Date */}
          <div className="flex flex-col items-end justify-start">
            <p className="text-3xl md:text-4xl font-extrabold text-green-900">
              {currDate}{" "}
            </p>
            <p className="text-2xl text-black">{minDate} </p>
          </div>
          {/* CONTAINER FOR TEMP AND ICON */}
          <div className="flex h-28 flex-row items-center justify-center">
            {/* TEMP VAL */}
            <div className="degree-symbol ml-5 text-7xl font-bold">
              {JSON.stringify(forecast.temperature).replace(/"/g, "")}
            </div>
            {/* ICON IMG */}
            <div className="flex flex-1 items-center justify-center">
              <img
                className="size-auto object-contain p-5"
                src="https://basmilius.github.io/weather-icons/production/line/all/cloudy.svg"
              />
            </div>
          </div>
          {/* FORECAST of LOCATION */}
          <div className="text-md max-w-[290px] text-black">
            {JSON.stringify(forecast.shortForecast).replace(/"/g, "")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
