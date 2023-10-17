import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";

import Classes from "../Pages/Classes/Classes";
import AdminDashboard from "../Pages/Dashboard/AdminDashboard";
import InstructorDashboard from "../Pages/Dashboard/InstructorDashboard";
import InstructorPage from "../Pages/InstructorPage/InstructorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/adminDashboard",
        element: <AdminDashboard></AdminDashboard>,
      },
      {
        path: "/istructorDashboard",
        element: <InstructorDashboard></InstructorDashboard>,
      },
      {
        path: "/instructors",
        element: <InstructorPage></InstructorPage>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
    ],
  },
]);
