import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";

import Classes from "../Pages/Classes/Classes";
import Login from "../Pages/Login/Login"
import AdminDashboard from "../Pages/Dashboard/AdminDashboard";
import InstructorDashboard from "../Pages/Dashboard/InstructorDashboard";
import ManageUsers from "../Pages/Dashboard/ManageUsers";
import InstructorPage from "../Pages/InstructorPage/InstructorPage";
import AdminRoutes from "./AdminRoutes";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import ManageClasses from "../Pages/Dashboard/ManageClasses";
import LoginLayout from "../Layouts/LoginLayout/LoginLayout";
import Register from "../Pages/Regsiter/Register";
import InstructorHome from "../Pages/Dashboard/InstructorHome";
import InstructorRoutes from "./InstructorRoutes";
import AddAClass from "../Pages/Dashboard/AddAClass";
import MyClasses from "../Pages/Dashboard/MyClasses";


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
  {
    path:'dashboard',
    element:<Dashboard></Dashboard>, //element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>  will be un comment later
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        //student routes
        // {
        //     path:'studenthome',
        //     element:<StudentHome></StudentHome>
        // },
        // {
        //     path:'selectedClasses',
        //     element:<StudentSelectedClasses></StudentSelectedClasses>
        // },
        // {
        //     path:'enrolledClasses',
        //     element:<StudentEnrolledClasses></StudentEnrolledClasses>
        // },
        // {
        //     path:'payment',
        //     element:<Payment></Payment>
        // },
        // {
        //     path:'paymentHistory',
        //     element:<StudentPaymentHistory></StudentPaymentHistory>
        // },
        // instructor routes
        {
            path:'instructorHome',
            element:<InstructorRoutes><InstructorHome></InstructorHome></InstructorRoutes>
        },
        {
            path:'addAClass',
            element:<InstructorRoutes><AddAClass></AddAClass></InstructorRoutes>
        },
        {
            path:'myClasses',
            element:<InstructorRoutes><MyClasses></MyClasses></InstructorRoutes>
        },
        // {
        //     path:'updateAClass',
        //     element:<UpdateAClass></UpdateAClass>
        // },
        // admin routes
        {
            path:'adminHome',
            element:<AdminRoutes><AdminDashboard></AdminDashboard></AdminRoutes>
        },
        
        {
            path:'manageClasses',
            element:<AdminRoutes><ManageClasses></ManageClasses></AdminRoutes>
        },
        {
            path:'manageUsers',
            element:<AdminRoutes><ManageUsers></ManageUsers></AdminRoutes>
        }



        
    ]
},
//login-layout
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  }

]);
