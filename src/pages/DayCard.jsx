import Footer from "../components/Footer";
import Background from "../components/Background";
import { GiCrossedBones } from "react-icons/gi";
import { TbMedicalCrossFilled, TbCrosshair } from "react-icons/tb";
import { Link } from "react-router-dom";

const DayPage = () => {
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
    <>
      <div className="grid w-3/5 min-w-[350px] max-w-[900px] grid-cols-5 grid-rows-[315px,160px] md:min-w-[600px]">
        <div className="col-start-1 col-end-6 row-start-1 row-end-3 rounded-lg border-2 bg-white">
          <Link to={"/"}>
            <TbCrosshair className="right-0 top-0 m-2 size-8 text-black" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default DayPage;
