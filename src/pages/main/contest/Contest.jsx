import AboutContest from "@/components/contests/AboutContest";
import AvailableCategories from "@/components/contests/AvailableCategories";
import ContestHero from "@/components/contests/ContestHero";
import EligibilityRules from "@/components/contests/EligibilityRulees";
import AwardsPrizes from "@/components/homes/AwardsPrizes";
import HowitWork from "@/components/homes/HowitWork";
import React from "react";
import { Helmet } from "react-helmet-async";
import img from "../../../assets/contest/gradient-bg.png";
import Juryboard from "@/components/homes/Juryboard";

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
      <EligibilityRules />
      <HowitWork />
      <Juryboard />
      <div className="relative py-12 bg-background flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        {/* Background - using a dark blurred image for the bokeh effect */}
        <div className="absolute inset-0 z-0">
          <img
            src={img}
            alt="Background"
            className="w-full h-full object-cover brightness-[0.4] blur-sm scale-110"
          />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto">
          <button className="bg-[#C6A45C] hover:bg-[#b08d45] text-white font-medium px-8 py-3 rounded-md transition-all duration-300 uppercase tracking-widest text-sm shadow-xl">
            Submit a Photo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contest;
