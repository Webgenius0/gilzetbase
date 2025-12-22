import RootLayout from "@/layouts/rootlayout";
import NotFound from "@/layouts/NotFound";
import Categorie from "@/pages/main/categorie/Categorie";
import Home from "@/pages/main/home/Home";
import { createBrowserRouter } from "react-router";
import Manifesto from "@/pages/main/manifesto/Manifesto";
import Winner from "@/pages/main/winner/Winner";

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
        path: "categories",
        element: <Categorie />,
      },
      {
        path: "manifestos",
        element: <Manifesto />,
      },
      {
        path: "winner",
        element: <Winner />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
