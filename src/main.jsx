import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import DayPage from "./pages/DayPage.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/day/:day",
    element: <DayPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={BrowserRouter} />
  </React.StrictMode>
);
