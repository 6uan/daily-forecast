import React from "react";
import Day from "./components/Day";
import CurrentDate from "./components/CurrentDate";
import "./output.css";

function App() {
  const now = new Date();
  const dayOfWeek = now.getDay(); // Sunday - 0, Monday - 1, ..., Saturday - 6

  // Define background colors for each day
  const dayColors = [
    "bg-white", // Sunday - 0
    "bg-emerald-200", // Monday - 1
    "bg-emerald-200", // Tuesday - 2
    "bg-emerald-200", // Wednesday - 3
    "bg-emerald-200", // Thursday - 4
    "bg-emerald-200", // Friday - 5
    "bg-white", // Saturday - 6
  ];

  // Get the background color for the current day
  const bgColor = dayColors[dayOfWeek];

  return (
    <div className="w-screen h-screen bg-white flex flex-col justify-center items-center border-4">
      <header className="border-2 w-3/5 min-w-[600px] p-10 rounded-t-lg bg-white">
        <CurrentDate />
      </header>

      <section className="w-3/5 min-w-[600px] flex flex-row justify-center items-center ">
        <Day
          day="Monday"
          start="1:00 PM"
          end="3:00 PM"
          bgColor={dayOfWeek === 1 ? bgColor : "bg-white"}
          extra="border-x-2 border-b-2 rounded-bl-lg"
        />
        <Day
          day="Tuesday"
          start="10:00 AM"
          end="3:00 PM"
          bgColor={dayOfWeek === 2 ? bgColor : "bg-white"}
          extra="border-r-2 border-b-2"
        />
        <Day
          day="Wednesday"
          start="1:00 PM"
          end="3:00 PM"
          bgColor={dayOfWeek === 3 ? bgColor : "bg-white"}
          extra="border-r-2 border-b-2"
        />
        <Day
          day="Thursday"
          start="10:00 AM"
          end="3:00 PM"
          bgColor={dayOfWeek === 4 ? bgColor : "bg-white"}
          extra="border-r-2 border-b-2"
        />
        <Day
          day="Friday"
          start="1:00 PM"
          end="3:00 PM"
          bgColor={dayOfWeek === 5 ? bgColor : "bg-white"}
          extra="border-r-2 border-b-2 rounded-br-lg"
        />
      </section>
    </div>
  );
}

export default App;
