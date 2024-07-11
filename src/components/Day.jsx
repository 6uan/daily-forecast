import mergeClassNames from "../utils/mergeClass.js";

const Day = ({ day, start, end, bgColor, extra }) => {
  const baseClass =
    "grid h-40 flex-1 place-content-center text-xs text-black hover:bg-gray-800 hover:text-white";
  const mergedClassNames = mergeClassNames(baseClass, bgColor, extra);
  return (
    <div className={mergedClassNames}>
      <h1 className="text-center text-2xl">{day}</h1>
      <p className="text-center text-sm">
        {start} <br /> to <br /> {end}
      </p>
    </div>
  );
};
export default Day;
