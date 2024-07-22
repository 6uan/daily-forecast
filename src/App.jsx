import { useState, React } from "react";
import Day from "./components/Day";
import "./output.css";
import Header from "./components/Header";
import Background from "./components/Background";
import Footer from "./components/Footer";
import HomeCard from "./pages/HomeCard";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="flex min-h-dvh w-screen flex-col items-center justify-center md:min-h-screen">
        <Background />
        <Outlet />
      </div>
      <div className="fixed bottom-0 z-10 w-full">
        <Footer />
      </div>
    </>
  );
}

export default App;
