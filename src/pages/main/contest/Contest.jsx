import ContestHero from "@/components/contests/ContestHero";
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
    </div>
  );
};

export default Contest;
