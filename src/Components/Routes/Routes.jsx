import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

import AdminDashboard from "../Pages/Dashboard/AdminDashboard";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"/adminDashboard",
          element:<AdminDashboard></AdminDashboard>
        }
      
      ]
    }
  ]);