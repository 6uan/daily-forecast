import React from "react";
import Day from "./components/Day";
import "./output.css";
// import CurrentDate from "./components/CurrentDate";
// import CurrentWeather from "./components/CurrentWeather";
import Header from "./components/Header";
import Background from "./components/Background";
import Footer from "./components/Footer";

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
  const defaultColor = "bg-white";

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <Background />
      <header className="w-3/5 min-w-[350px] md:min-w-[600px]">
        {/* <CurrentDate /> */}
        {/* <CurrentWeather /> */}
        <Header />
      </header>
      <section className="flex w-3/5 min-w-[350px] flex-row items-center justify-center md:min-w-[600px]">
        <Day
          day="Monday"
          start="1:00 PM"
          end="3:00 PM"
          bgColor={dayOfWeek === 1 ? bgColor : defaultColor}
          extra="border-x-2 border-b-2 rounded-bl-lg"
        />
        <Day
          day="Tuesday"
          start="10:00 AM"
          end="3:00 PM"
          bgColor={dayOfWeek === 2 ? bgColor : defaultColor}
          extra="border-r-2 border-b-2"
        />
        <Day
          day="Wednesday"
          start="1:00 PM"
          end="3:00 PM"
          bgColor={dayOfWeek === 3 ? bgColor : defaultColor}
          extra="border-r-2 border-b-2"
        />
        <Day
          day="Thursday"
          start="10:00 AM"
          end="3:00 PM"
          bgColor={dayOfWeek === 4 ? bgColor : defaultColor}
          extra="border-r-2 border-b-2"
        />
        <Day
          day="Friday"
          start="1:00 PM"
          end="3:00 PM"
          bgColor={dayOfWeek === 5 ? bgColor : defaultColor}
          extra="border-r-2 border-b-2 rounded-br-lg"
        />
      </section>{" "}
      <Footer />
    </div>
  );
}

export default App;
