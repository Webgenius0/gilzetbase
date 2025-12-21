import AwardsPrizes from "@/components/homes/AwardsPrizes";
import CategorySlider from "@/components/homes/CategorySlider";
import HomeHero from "@/components/homes/HomeHero";
import HowitWork from "@/components/homes/HowitWork";
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
        <CategorySlider />
        <HowitWork />
      </div>
    </>
  );
};

export default Home;
