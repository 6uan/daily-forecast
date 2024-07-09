import mergeClassNames from "../utils/mergeClass.js";

const Day = ({ day, start, end, className, extra, ...props }) => {
  const baseClass =
    "text-xs hover:bg-gray-800 hover:text-white grid place-content-center text-black h-40 flex-1";
  const mergedClassNames = mergeClassNames(baseClass, className, extra);
  console.log("class name" + className);
  return (
    <div className={mergedClassNames} {...props}>
      <h1 className="text-center text-2xl">{day}</h1>
      <p className="text-center text-sm">
        {start} <br /> to <br /> {end}
      </p>
    </div>
  );
};
export default Day;
