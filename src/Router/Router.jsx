import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Footer from "../Components/Header";
import Home from "../Components/Home";
import HomeLayout from "../Layouts/HomeLayout";
// import Home from "../Components/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
  },
  {
    path: "/*",
    element: <h1>Not found 404</h1>
  },
]);
