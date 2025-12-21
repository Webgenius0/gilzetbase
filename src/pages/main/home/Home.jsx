import AwardsPrizes from "@/components/homes/AwardsPrizes";
import HomeHero from "@/components/homes/HomeHero";
import InstagramFeed from "@/components/homes/InstagramFeed";
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
        <AwardsPrizes />
        <InstagramFeed />
      </div>
    </>
  );
};

export default Home;
