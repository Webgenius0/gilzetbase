import RootLayout from "@/layouts/rootlayout";
import NotFound from "@/layouts/NotFound";
import Categorie from "@/pages/main/categorie/Categorie";
import Home from "@/pages/main/home/Home";
import { createBrowserRouter } from "react-router";
import Manifesto from "@/pages/main/manifesto/Manifesto";
import Winner from "@/pages/main/winner/Winner";
import About from "@/pages/main/About/About";
import MegazinePage from "@/pages/main/Magazine/MegazinePage";
import MagazineDetails from "@/pages/main/Magazine/MagazineDetails";
import FAQPage from "@/pages/main/Faq/FAQPage";


export const router = createBrowserRouter([
  {
    path: '/',
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
        path: 'megazine',
        element: <MegazinePage />,
      },
      {
  path: 'megazine/:id',
  element: <MagazineDetails />,
},
      {
  path: 'faq',
  element: <FAQPage />,
},
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
