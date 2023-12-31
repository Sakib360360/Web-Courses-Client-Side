import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";

import Dashboard from "../Layouts/Dashboard/Dashboard";
import LoginLayout from "../Layouts/LoginLayout/LoginLayout";
import Classes from "../Pages/Classes/Classes";
import AdminDashboard from "../Pages/Dashboard/AdminDashboard";
import InstructorDashboard from "../Pages/Dashboard/InstructorDashboard";
import ManageClasses from "../Pages/Dashboard/ManageClasses";
import ManageUsers from "../Pages/Dashboard/ManageUsers";
import InstructorPage from "../Pages/InstructorPage/InstructorPage";
import Login from "../Pages/Login/Login";
import AdminRoutes from "./AdminRoutes";
import InstructorRoutes from "./InstructorRoutes";

import AboutUs from "../Pages/AboutUs/AboutUs";
import Contact from "../Pages/Contact/Contact";
import AddAClass from "../Pages/Dashboard/AddAClass";
import EnrolledClasses from "../Pages/Dashboard/EnrolledClasses";
import InstructorHome from "../Pages/Dashboard/InstructorHome";
import MyClasses from "../Pages/Dashboard/MyClasses";
import Payment from "../Pages/Dashboard/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory";
import StudentHome from "../Pages/Dashboard/StudentHome";
import StudentSelectedClasses from "../Pages/Dashboard/StudentSelectedClasses";
import Register from "../Pages/Register/Register";
import Service from "../Pages/Service/Service";

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
        path: "/courses",
        element: <Classes></Classes>,
      },
      {
        path: "/aboutUS",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/contactUS",
        element: <Contact></Contact>,
      },
      {
        path: "/ourService",
        element: <Service></Service>,
      },
    ],
  },

  // all dashboard routes starts here
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>, //element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>  will be un comment later
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      //student routes
      {
        path: "studenthome",
        element: <StudentHome></StudentHome>,
      },
      {
        path: "selectedClasses",
        element: <StudentSelectedClasses></StudentSelectedClasses>,
      },
      {
        path: "enrolledClasses",
        element: <EnrolledClasses></EnrolledClasses>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },
      // instructor routes
      {
        path: "instructorHome",
        element: (
          <InstructorRoutes>
            <InstructorHome></InstructorHome>
          </InstructorRoutes>
        ),
      },
      {
        path: "addAClass",
        element: (
          <InstructorRoutes>
            <AddAClass></AddAClass>
          </InstructorRoutes>
        ),
      },
      {
        path: "myClasses",
        element: (
          <InstructorRoutes>
            <MyClasses></MyClasses>
          </InstructorRoutes>
        ),
      },
      // {
      //     path:'updateAClass',
      //     element:<UpdateAClass></UpdateAClass>
      // },
      // admin routes
      {
        path: "adminHome",
        element: (
          <AdminRoutes>
            <AdminDashboard></AdminDashboard>
          </AdminRoutes>
        ),
      },

      {
        path: "manageClasses",
        element: (
          <AdminRoutes>
            <ManageClasses></ManageClasses>
          </AdminRoutes>
        ),
      },
      {
        path: "manageUsers",
        element: (
          <AdminRoutes>
            <ManageUsers></ManageUsers>
          </AdminRoutes>
        ),
      },
    ],
  },
  //login-layout
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);
