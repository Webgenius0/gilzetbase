import AwardsPrizes from "@/components/homes/AwardsPrizes";
import CategorySlider from "@/components/homes/CategorySlider";
import HomeHero from "@/components/homes/HomeHero";
import HowitWork from "@/components/homes/HowitWork";
import InstagramFeed from "@/components/homes/InstagramFeed";
import Juryboard from "@/components/homes/Juryboard";
import Magazine from "@/components/homes/Magazine";
import Newsletter from "@/components/homes/Newsletter";
import Perticipate from "@/components/homes/Perticipate";
import Upcomingevent from "@/components/homes/Upcomingevent";
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
        <Upcomingevent />
        <Magazine/>
        <Juryboard/>
        <Newsletter/>
      </div>
    </>
  );
};

export default Home;
