import mergeClassNames from "../utils/mergeClass.js";

const Day = ({ day, start, end, bgColor, extra }) => {
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

  const baseClass =
    "grid h-40 flex-1 place-content-center text-xs text-black hover:bg-gray-800 hover:text-white";
  const mergedClassNames = mergeClassNames(baseClass, bgColor, extra);
  return (
    <div className={mergedClassNames}>
      {/* DAY abbreviate on small screen */}
      <span className="hidden text-center text-2xl md:inline">{day}</span>
      <span className="inline text-center text-2xl md:hidden">
        {dayAbbreviations[day]}
      </span>
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
