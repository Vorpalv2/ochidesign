import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { SpeedInsights } from "@vercel/speed-insights/next";

import Service from "./routes/Service.jsx";
import ErrorPage from "./routes/Errorpage.jsx";
import { Ourworks } from "./routes/Ourworks.jsx";
import Aboutus from "./routes/Aboutus.jsx";
import { Insights } from "./routes/Insights.jsx";
import Contact from "./routes/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Services",
    element: <Service />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Ourworks",
    element: <Ourworks />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Aboutus",
    element: <Aboutus />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Insights",
    element: <Insights />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Contact",
    element: <Contact />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
