import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";

import Classes from "../Pages/Classes/Classes";
import AdminDashboard from "../Pages/Dashboard/AdminDashboard";
import InstructorDashboard from "../Pages/Dashboard/InstructorDashboard";
import ManageUsers from "../Pages/Dashboard/ManageUsers";
import InstructorPage from "../Pages/InstructorPage/InstructorPage";
import AdminRoutes from "./AdminRoutes";

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
        element: (
          <AdminRoutes>
            <AdminDashboard></AdminDashboard>
          </AdminRoutes>
        ),
      },
      {
        path: "/manageUsers",
        element: (
          <AdminRoutes>
            <ManageUsers></ManageUsers>
          </AdminRoutes>
        ),
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

  // all dashboard routes starts here
]);
