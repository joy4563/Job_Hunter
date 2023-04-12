import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DreamJob from "./Components/DreamJob/DreamJob";
import Statistics from "./Components/Statistics/Statistics";
import AppliedJobs from "./Components/AppliedJobs/AppliedJobs";
import Home from "./Components/Home/Home";
import Blog from "./Components/Blog/Blog";
import StartApplying from "./Components/StartApplying/StartApplying";
import ViewDetails from "./Components/ViewDetails/ViewDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children: [
            {
                path: "/",
                element: <DreamJob></DreamJob>,
            },
            {
                path: "/statistics",
                element: <Statistics></Statistics>,
            },

            {
                path: "/appliedJobs",
                element: <AppliedJobs></AppliedJobs>,
            },
            {
                path: "/blog",
                element: <Blog></Blog>,
            },
            {
                path: "/startaApplying",
                element: <StartApplying></StartApplying>,
            },
            {
                path: "/viewDetails/:jobId",
                element: <ViewDetails></ViewDetails>,
                loader: async ({ params }) => {
                    const loadedJob = await fetch("/job.json");
                    const jobDes = await loadedJob.json();
                    const getData = [];
                    for (let i = 0; i < jobDes.length; i++) {
                        if (jobDes[i].id === params.jobId) {
                            getData.push(jobDes[i]);
                        }
                    }
                    return getData;
                },
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
