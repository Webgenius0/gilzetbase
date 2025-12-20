import RootLayout from "@/layouts/rootlayout";
import Home from "@/pages/main/home/Home";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
   {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true, //  means "/"
        element: <Home />,
      },
      {
        path: "about",
        //element: <About />,
      },
      {
        path: "contact",
        //element: <Contact />,
      },
    ],
  },
]);
