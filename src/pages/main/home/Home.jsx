import HomeHero from "@/components/homes/HomeHero";
import Perticipate from "@/components/homes/Perticipate";
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
        <Perticipate />
      </div>
    </>
  );
};

export default Home;
