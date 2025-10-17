import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Footer from "../Components/Header";
import Home from "../Pages/Home";
import HomeLayout from "../Layouts/HomeLayout";
import CategoryNews from "../Pages/CategoryNews";
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
        loader: ()=> fetch("/news.json")
      },
    ],
  },
  {
    path: "/*",
    element: <h1>Not found 404</h1>,
  },
]);
