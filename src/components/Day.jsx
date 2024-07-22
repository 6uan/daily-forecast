import mergeClassNames from "../utils/mergeClass.js";
import useDayColor from "../hooks/useDayColor.js";
import { Link } from "react-router-dom";

const Day = ({ day, start, end, dayOfWeek, extra }) => {
  const bgColor = useDayColor();
  const defaultColor = "bg-white";

  const dayAbbreviations = {
    Monday: "Mon",
    Tuesday: "Tue",
    Wednesday: "Wed",
    Thursday: "Thu",
    Friday: "Fri",
    Saturday: "Sat",
    Sunday: "Sun",
  };

  const abbreviateTime = (time) => {
    return time.replace(":00 ", "");
  };

  const isToday = (day) => {
    const dayMap = {
      Sunday: 0,
      Monday: 1,
      Tuesday: 2,
      Wednesday: 3,
      Thursday: 4,
      Friday: 5,
      Saturday: 6,
    };
    return dayMap[day] === dayOfWeek;
  };

  const baseClass =
    "grid h-40 flex-1 place-content-center text-xs text-black hover:bg-gray-800 hover:text-white";

  const computedBgColor = isToday(day) ? bgColor : defaultColor;
  const mergedClassNames = mergeClassNames(baseClass, computedBgColor, extra);
  return (
    <div className={mergedClassNames}>
      {/* DAY abbreviate on small screen */}
      <Link to={`/day/${day.toLowerCase()}`} className="hidden md:inline">
        <span className="text-center text-2xl hover:font-semibold">{day}</span>
      </Link>
      <Link to={`/day/${day.toLowerCase()}`} className="inline md:hidden">
        <span className="text-center text-2xl hover:font-semibold">
          {dayAbbreviations[day]}
        </span>
      </Link>

      {/*  TIME abbreviate on small screen */}
      <span className="hidden text-center text-sm md:inline">
        {start} <br /> to <br /> {end}
      </span>
      <span className="inline text-center text-sm md:hidden">
        {abbreviateTime(start)} <br /> to <br /> {abbreviateTime(end)}
      </span>

      {/* <p className="text-center text-sm">
        {start} <br /> to <br /> {end}
      </p> */}
    </div>
  );
};
export default Day;
