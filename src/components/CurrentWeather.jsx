import React, { useEffect, useState } from "react";
import { axiosInstance, weatherUrl, weatherKey } from "../utils/axiosInstance";

console.log(weatherUrl, weatherKey);

const CurrentWeather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axiosInstance.get(`/forecast/hourly`);
        setWeatherData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  console.log(JSON.stringify(weatherData, null, 2));

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  const forecast = weatherData.properties.periods[0];

  return (
    <div className="flex flex-row text-black">
      <div>
        {/* LOCATION of weather */}
        <h1 className="text-4xl font-extrabold">Sweetwater, FL</h1>

        {/* CONTAINER FOR TEMP AND ICON */}
        <div className="flex h-32 flex-row items-center justify-center">
          {/* TEMP VAL */}
          <div className="degree-symbol ml-5 text-7xl font-bold">
            {JSON.stringify(forecast.temperature).replace(/"/g, "")}
          </div>
          {/* ICON IMG */}
          <div className="justify-centere flex flex-1 items-center">
            <img
              className="size-auto object-contain p-3"
              src="https://basmilius.github.io/weather-icons/production/line/all/cloudy.svg"
            />
          </div>
        </div>

        {/* FORECAST of LOCATION */}
        <div className="text-md text-black">
          {JSON.stringify(forecast.shortForecast).replace(/"/g, "")}
        </div>

        {/* <div className="text-4xl font-extrabold text-black">
          {JSON.stringify(weatherData.current.temp_f).replace(/"/g, "")} F°
        </div>
         */}
      </div>
      {/* <div className="size-full border-2">
        <img
          src={`https:${JSON.stringify(weatherData.current.condition.icon).replace(/"/g, "")}`}
        />
      </div> */}
    </div>
  );
};

export default CurrentWeather;