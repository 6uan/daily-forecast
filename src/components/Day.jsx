import mergeClassNames from "../utils/mergeClass.js";

const Day = ({ day, start, end, bgColor, extra }) => {
  const baseClass =
    "text-xs hover:bg-gray-800 hover:text-white grid place-content-center text-black h-40 flex-1";
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
