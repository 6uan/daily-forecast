import React from "react";
import Day from "./components/Day";
import "./output.css";
// import CurrentDate from "./components/CurrentDate";
// import CurrentWeather from "./components/CurrentWeather";
import Header from "./components/Header";
import Background from "./components/Background";
import Footer from "./components/Footer";
import useDayColor from "./hooks/useDayColor";

function App() {
  const now = new Date();
  const dayOfWeek = now.getDay();

  return (
    <>
      <div className="flex min-h-dvh w-screen flex-col items-center justify-center md:min-h-screen">
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
            end="4:00 PM"
            dayOfWeek={dayOfWeek}
            extra="border-x-2 border-b-2 rounded-bl-lg"
          />
          <Day
            day="Tuesday"
            start="10:00 AM"
            end="4:00 PM"
            dayOfWeek={dayOfWeek}
            extra="border-r-2 border-b-2"
          />
          <Day
            day="Wednesday"
            start="1:00 PM"
            end="4:00 PM"
            dayOfWeek={dayOfWeek}
            extra="border-r-2 border-b-2"
          />
          <Day
            day="Thursday"
            start="10:00 AM"
            end="4:00 PM"
            dayOfWeek={dayOfWeek}
            extra="border-r-2 border-b-2"
          />
          <Day
            day="Friday"
            start="1:00 PM"
            end="4:00 PM"
            dayOfWeek={dayOfWeek}
            extra="border-r-2 border-b-2 rounded-br-lg"
          />
        </section>{" "}
      </div>
      <div className="fixed bottom-0 z-10 w-full">
        <Footer />
      </div>
    </>
  );
}

export default App;
