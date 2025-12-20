import HomeHero from "@/components/homes/HomeHero";
import React from "react";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | MyApp</title>
      </Helmet>

      <div>
        <HomeHero />
      </div>
    </>
  );
};

export default Home;
