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
        const response = await axiosInstance.get(`/current.json`, {
          params: {
            key: weatherKey,
            q: "25.759454,-80.373842",
            lang: "en",
          },
        });
        setWeatherData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchWeather();
  }, [weatherKey]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex flex-row border-2">
      <div className="border-2">
        <div className="text-4xl font-extrabold text-black">
          {JSON.stringify(weatherData.location.name).replace(/"/g, "")}📍
        </div>

        <div className="text-2xl text-black">
          {JSON.stringify(weatherData.current.condition.text).replace(/"/g, "")}
        </div>
        <div className="text-4xl font-extrabold text-black">
          {JSON.stringify(weatherData.current.temp_f).replace(/"/g, "")} F°
        </div>
      </div>
      <div className="border-2 size-full">
        <img
          src={`https:${JSON.stringify(weatherData.current.condition.icon).replace(/"/g, "")}`}
        />
      </div>

      {/* {
  "location": {
    "name": "Sweetwater",
    "region": "Florida",
    "country": "United States of America",
    "lat": 25.76,
    "lon": -80.37,
    "tz_id": "America/New_York",
    "localtime_epoch": 1720716538,
    "localtime": "2024-07-11 12:48"
  },
  "current": {
    "last_updated_epoch": 1720716300,
    "last_updated": "2024-07-11 12:45",
    "temp_c": 31.7,
    "temp_f": 89.1,
    "is_day": 1,
    "condition": {
      "text": "Overcast",
      "icon": "//cdn.weatherapi.com/weather/64x64/day/122.png",
      "code": 1009
    },
    "wind_mph": 4.3,
    "wind_kph": 6.8,
    "wind_degree": 250,
    "wind_dir": "WSW",
    "pressure_mb": 1017,
    "pressure_in": 30.02,
    "precip_mm": 0.46,
    "precip_in": 0.02,
    "humidity": 52,
    "cloud": 100,
    "feelslike_c": 37.8,
    "feelslike_f": 100.1,
    "windchill_c": 28.6,
    "windchill_f": 83.5,
    "heatindex_c": 31.4,
    "heatindex_f": 88.4,
    "dewpoint_c": 21.4,
    "dewpoint_f": 70.5,
    "vis_km": 16,
    "vis_miles": 9,
    "uv": 6,
    "gust_mph": 7.8,
    "gust_kph": 12.6
  } }*/}
    </div>
  );
};

export default CurrentWeather;
