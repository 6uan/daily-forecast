import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import HomeCard from "./pages/HomeCard.jsx";
import DayCard from "./pages/DayCard.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomeCard />,
      },
      {
        path: "/day/:day",
        element: <DayCard />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={BrowserRouter} />
  </React.StrictMode>
);
