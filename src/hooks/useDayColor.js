import { useState, useEffect } from "react";

const useDayColor = () => {
  const [bgColor, setBgColor] = useState("bg-white");

  useEffect(() => {
    const now = new Date();
    const dayOfWeek = now.getDay(); // Sunday - 0, Monday - 1, ..., Saturday - 6

    // Define background colors for each day
    const dayColors = [
      "bg-white",       // Sunday - 0
      "bg-emerald-200", // Monday - 1
      "bg-emerald-200", // Tuesday - 2
      "bg-emerald-200", // Wednesday - 3
      "bg-emerald-200", // Thursday - 4
      "bg-emerald-200", // Friday - 5
      "bg-white",       // Saturday - 6
    ];

    // Get the background color for the current day
    setBgColor(dayColors[dayOfWeek]);
  }, []);

  return bgColor;
};

export default useDayColor;
