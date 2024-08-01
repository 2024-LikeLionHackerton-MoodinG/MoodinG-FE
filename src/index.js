import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoadingPage from "./pages/LoadingPage.js";
import ResultPage from "./pages/ResultPage.js";
import StartPage from "./pages/StartPage.js";
import WritePage from "./pages/WritePage.js";
import InformationPage from "./pages/InformationPage.js";
import CharacterPage from "./pages/CharacterPage.js";
import GuidePage from "./pages/GuidePage.js";

const router = createBrowserRouter([
  {
    path: "/loading/:id",
    element: <LoadingPage />,
  },
  {
    path: "/result/:id",
    element: <ResultPage />,
  },
  {
    path: "/",
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
  {
    path: "/information/character",
    element: <CharacterPage />,
  },
  {
    path: "/information/guide",
    element: <GuidePage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
