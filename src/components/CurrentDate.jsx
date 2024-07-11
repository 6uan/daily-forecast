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
    <div className="flex w-auto flex-col items-end justify-start text-black">
      {/* <h1 className="mb-[2px] font-black"> TODAY IS </h1> */}
      <p className="text-4xl font-extrabold text-green-900">{currDate} </p>
      <p className="text-2xl text-black">{minDate} </p>
    </div>
  );
};

export default CurrentDate;
