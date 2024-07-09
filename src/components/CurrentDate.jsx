import React, { useState, useEffect } from "react";
import date from "date-and-time";

const CurrentDate = () => {
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

  return (
    <div className="text-black flex flex-col justify-center w-auto align-middle text-center mx-auto">
      <h1 className="font-black mb-[3px]"> TODAY IS </h1>
      <p className="font-bold text-2xl text-red-700">{currDate} </p>
      <p className="text-2xl text-red-700">{minDate} </p>
    </div>
  );
};

export default CurrentDate;
