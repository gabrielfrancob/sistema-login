import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/login";
import Home from "../pages/home/home";
import Cadastro from "../pages/cadastro/cadastro";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "cadastro",
    element: <Cadastro />,
  },
]);
