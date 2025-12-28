import RootLayout from "@/layouts/rootlayout";
import NotFound from "@/layouts/NotFound";
import Categorie from "@/pages/main/categorie/Categorie";
import Home from "@/pages/main/home/Home";
import { createBrowserRouter } from "react-router";
import Manifesto from "@/pages/main/manifesto/Manifesto";
import Winner from "@/pages/main/winner/Winner";
import AboutPage from "@/pages/main/About/About";
import About from "@/pages/main/About/About";
import Contest from "@/pages/main/contest/Contest";
import HowitWork from "@/pages/main/howitwork/HowitWork";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true, //  means "/"
        element: <Home />,
      },
      // {
      //   path: "about",
      //   //element: <About />,
      // },
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
        path: "/about",
        element: <About />,
      },
      {
        path: "contest",
        element: <Contest />,
      },
      { path: "howitwork", element: <HowitWork /> },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
