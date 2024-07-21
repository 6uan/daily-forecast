import Footer from "../components/Footer";
import Day from "../components/Day";
import Header from "../components/Header";
import Background from "../components/Background";

const DayPage = () => {
  const now = new Date();
  const dayOfWeek = now.getDay();
  return (
    <>
      <div className="flex min-h-dvh w-screen flex-col items-center justify-center md:min-h-screen">
        <Background />
        <div className="grid w-3/5 min-w-[350px] max-w-[900px] grid-cols-5 grid-rows-1 md:min-w-[600px]">
          <div className="col-start-1 col-end-6 row-start-1 row-end-2">
            <Header />
          </div>
          <div className="row-start-2 row-end-3 h-full">
            <Day
              day="Monday"
              start="1:00 PM"
              end="4:00 PM"
              dayOfWeek={dayOfWeek}
              extra="border-x-2 border-b-2 rounded-bl-lg"
            />
          </div>
          <div className="row-start-2 row-end-3 h-full">
            <Day
              day="Tuesday"
              start="10:00 AM"
              end="4:00 PM"
              dayOfWeek={dayOfWeek}
              extra="border-r-2 border-b-2"
            />
          </div>
          <div className="row-start-2 row-end-3 h-full">
            <Day
              day="Wednesday"
              start="1:00 PM"
              end="4:00 PM"
              dayOfWeek={dayOfWeek}
              extra="border-r-2 border-b-2"
            />
          </div>
          <div className="row-start-2 row-end-3 h-full">
            <Day
              day="Thursday"
              start="10:00 AM"
              end="4:00 PM"
              dayOfWeek={dayOfWeek}
              extra="border-r-2 border-b-2"
            />
          </div>
          <div className="row-start-2 row-end-3 h-full">
            <Day
              day="Friday"
              start="1:00 PM"
              end="4:00 PM"
              dayOfWeek={dayOfWeek}
              extra="border-r-2 border-b-2 rounded-br-lg"
            />
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 z-10 w-full">
        <Footer />
      </div>
    </>
  );
};
export default DayPage;
