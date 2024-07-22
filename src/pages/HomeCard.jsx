import Header from "../components/Header";
import Day from "../components/Day";

const HomeCard = () => {
  const now = new Date();
  const dayOfWeek = now.getDay();
  const days = [
    {
      day: "Monday",
      start: "1:00 PM",
      end: "4:00 PM",
      extra: "border-x-2 border-b-2 rounded-bl-lg",
    },
    {
      day: "Tuesday",
      start: "10:00 AM",
      end: "4:00 PM",
      extra: "border-r-2 border-b-2",
    },
    {
      day: "Wednesday",
      start: "1:00 PM",
      end: "4:00 PM",
      extra: "border-r-2 border-b-2",
    },
    {
      day: "Thursday",
      start: "10:00 AM",
      end: "4:00 PM",
      extra: "border-r-2 border-b-2",
    },
    {
      day: "Friday",
      start: "1:00 PM",
      end: "4:00 PM",
      extra: "border-r-2 border-b-2 rounded-br-lg",
    },
  ];
  return (
    <div className="grid w-3/5 min-w-[350px] max-w-[900px] grid-cols-5 grid-rows-1 md:min-w-[600px]">
      <div className="col-start-1 col-end-6 row-start-1 row-end-2">
        <Header />
      </div>
      {days.map(({ day, start, end, extra }, index) => (
        <div key={index} className="row-start-2 row-end-3 h-full">
          <Day
            day={day}
            start={start}
            end={end}
            dayOfWeek={dayOfWeek}
            extra={extra}
          />
        </div>
      ))}
    </div>
  );
};

export default HomeCard;
