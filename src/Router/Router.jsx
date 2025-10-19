import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Footer from "../Components/Header";
import Home from "../Pages/Home";
import HomeLayout from "../Layouts/HomeLayout";
import CategoryNews from "../Pages/CategoryNews";

import Register from "../Pages/Register";
import Login from "../Pages/Login";
import AuthLayout from "../Layouts/AuthLayout";
import NewsDetails from "../Pages/NewsDetails";
import PrivateRoute from "../Provider/PrivateRoute";
import Loading from "../Pages/Loading";

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
        hydrateFallbackElement: <Loading></Loading>,
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
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/news-details/:id",
    element: (
      <PrivateRoute>
        <NewsDetails></NewsDetails>
      </PrivateRoute>
    ),
    loader: () => fetch("/news.json"),
    hydrateFallbackElement: <Loading></Loading>,
  },

  {
    path: "/*",
    element: <h1>Not found 404</h1>,
  },
]);
