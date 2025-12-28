import RootLayout from "@/layouts/rootlayout";
import NotFound from "@/layouts/NotFound";
import Categorie from "@/pages/main/categorie/Categorie";
import Home from "@/pages/main/home/Home";
import { createBrowserRouter } from "react-router";
import Manifesto from "@/pages/main/manifesto/Manifesto";
import Winner from "@/pages/main/winner/Winner";
import About from "@/pages/main/About/About";
<<<<<<< HEAD
import MegazinePage from "@/pages/main/Magazine/MegazinePage";
import MagazineDetails from "@/pages/main/Magazine/MagazineDetails";


export const router = createBrowserRouter([
  {
    path: '/',
=======
import Contest from "@/pages/main/contest/Contest";
import HowitWork from "@/pages/main/howitwork/HowitWork";
import SubmitPhotoForm from "@/components/SubmitPhotoForm";

export const router = createBrowserRouter([
  {
    path: "/",
>>>>>>> 77ce2e04621c18d47e519c180437b710f8809e9b
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      // {
      //   path: "about",
      //   //element: <About />,
      // },
      {
        path: 'categories',
        element: <Categorie />,
      },
      {
        path: 'manifestos',
        element: <Manifesto />,
      },
      {
        path: 'winner',
        element: <Winner />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
<<<<<<< HEAD
        path: 'megazine',
        element: <MegazinePage />,
      },
      {
  path: 'megazine/:id',
  element: <MagazineDetails />,
},
      {
        path: '*',
=======
        path: "contest",
        element: <Contest />,
      },
      { path: "howitwork", element: <HowitWork /> },
      { path: "submit-photo", element: <SubmitPhotoForm /> },
      {
        path: "*",
>>>>>>> 77ce2e04621c18d47e519c180437b710f8809e9b
        element: <NotFound />,
      },
    ],
  },
]);
