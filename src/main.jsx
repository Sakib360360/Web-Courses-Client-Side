import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./Components/Routes/Routes";
import "./index.css";
import AuthProvider from "./Components/Providers/AuthProvider";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="">
    <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
    </div>
  </React.StrictMode>
);
