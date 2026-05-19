import { createBrowserRouter } from "react-router-dom";
import { Landing } from "../Components/Landing/Landing";
import Login from "../Components/LoginPage/Login";
import Register from "../Components/RegisterPage/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
