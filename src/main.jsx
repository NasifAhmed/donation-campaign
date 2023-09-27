import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Donation from "./components/Donation.jsx";
import Statistics from "./components/Statistics.jsx";
import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "/donation",
                element: <Donation></Donation>,
            },
            {
                path: "/statistics",
                element: <Statistics></Statistics>,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
