import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/login/login-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
]);
