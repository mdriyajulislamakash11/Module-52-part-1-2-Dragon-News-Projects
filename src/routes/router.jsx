// router.jsx
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import DragonNews from "../components/DragonNews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <DragonNews />, 
        loader: () => fetch("/news.json")
      },
      {
        path: "/category/:id",
        element: <DragonNews />,
        loader: () => fetch("/news.json")
      }
    ]
  }
]);

export default router;
