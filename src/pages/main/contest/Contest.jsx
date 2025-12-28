import AboutContest from "@/components/contests/AboutContest";
import AvailableCategories from "@/components/contests/AvailableCategories";
import ContestHero from "@/components/contests/ContestHero";
import AwardsPrizes from "@/components/homes/AwardsPrizes";
import React from "react";
import { Helmet } from "react-helmet-async";

const Contest = () => {
  return (
    <div>
      <div>
        <Helmet>
          <title>Contest | MyApp</title>
        </Helmet>
      </div>
      <ContestHero />
      <AboutContest />
      <AvailableCategories />
      <AwardsPrizes />
    </div>
  );
};

export default Contest;
