import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AppliedJob from './Components/AppliedJob/AppliedJob';
import Statistics from './Components/Statistics/Statistics';
import Home from './Components/Home/Home';
import ErrorPage from '../src/Components/ErrorPage/ErrorPage';
import jobDesLoader from './Components/Loader/Loader';
import JobDetails from './Components/JobDetails/JobDetails';
import Blog from './Components/Blog/Blog';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: jobDesLoader
      },
      {
        path: '/appliedJob',
        element: <AppliedJob></AppliedJob>
      },
      {
        path: '/blogs',
        element: <Blog></Blog>
      },
      {
        path: '/statistic',
        element: <Statistics></Statistics>
      },
      {
        path: '/jobDetails/:jobId',
        element: <JobDetails></JobDetails>,
        loader: async ({ params }) => {
          const loadedJob = await fetch('/job.json');
          const jobDes = await loadedJob.json();
          const getData = [];
          for (let i = 0; i < jobDes.length; i++){
            if (jobDes[i].id === params.jobId) {
              getData.push(jobDes[i]);
            }
          }
          return getData;
        }
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
