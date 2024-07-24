import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoadingPage from "./pages/LoadingPage.js";
import ResultPage from "./pages/ResultPage.js";
import StartPage from "./pages/StartPage.js";
import WritePage from "./pages/WritePage.js";
import InformationPage from "./pages/InformationPage.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/loading",
    element: <LoadingPage />,
  },
  {
    path: "/result/:id",
    element: <ResultPage />,
  },
  {
    path: "/start",
    element: <StartPage />,
  },
  {
    path: "/write",
    element: <WritePage />,
  },
  {
    path: "/information",
    element: <InformationPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
