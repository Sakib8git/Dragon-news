import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Footer from "../Components/Header";
import Home from "../Pages/Home";
import HomeLayout from "../Layouts/HomeLayout";
import CategoryNews from "../Pages/CategoryNews";

import Register from "../Pages/Register";
import Login from "../Pages/Login";
import AuthLayout from "../Layouts/AuthLayout";

// import Home from "../Components/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/category/:id",
        Component: CategoryNews,
        loader: () => fetch("/news.json"),
      },
    ],
  },

  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register> ,
      },
    ],
  },
  {
    path: "/news",
    element: <h1>News</h1>,
  },

  {
    path: "/*",
    element: <h1>Not found 404</h1>,
  },
]);
