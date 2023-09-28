import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Home from "./components/Home.jsx";
import Donation from "./components/Donation.jsx";
import DonationDetails from "./components/DonationDetails.jsx";
import Statistics from "./components/Statistics.jsx";
import NotFound from "./components/NotFound.jsx";
import "./index.css";
import { getDonation } from "./utility/localStorage.js";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "*",
                element: <NotFound></NotFound>,
            },
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("../data.json"),
            },
            {
                path: "/donation",
                element: <Donation></Donation>,
                loader: () => fetch("../data.json"),
            },
            {
                path: "/statistics",
                element: <Statistics></Statistics>,
                loader: () => fetch("../data.json"),
            },
            {
                path: "/details/:category_index",
                element: <DonationDetails></DonationDetails>,
                loader: ({ params }) =>
                    fetch("../data.json")
                        .then((res) => res.json())
                        .then((data) => {
                            return [
                                data[params.category_index],
                                params.category_index,
                            ];
                        }),
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
