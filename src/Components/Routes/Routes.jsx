import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

import AdminDashboard from "../Pages/Dashboard/AdminDashboard";
import InstructorDashboard from "../Pages/Dashboard/InstructorDashboard";
import AdminRoutes from "./AdminRoutes";
import ManageUsers from "../Pages/Dashboard/ManageUsers";


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
          element:<AdminRoutes><AdminDashboard></AdminDashboard></AdminRoutes>
        },
        {
          path:"/manageUsers",
          element:<AdminRoutes><ManageUsers></ManageUsers></AdminRoutes>
        },
        {
          path:"/istructorDashboard",
          element:<InstructorDashboard></InstructorDashboard>
        }
      
      ]
    }
  ]);