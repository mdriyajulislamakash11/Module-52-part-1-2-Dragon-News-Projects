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
        path: "/category/:id",
        element: <DragonNews />,
        loader: () => fetch("/news.json") // ✅ শুধু ফাইল লোড করো
      }
    ]
  }
]);

export default router;
