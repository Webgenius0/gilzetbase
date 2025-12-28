import AwardsPrizes from "@/components/homes/AwardsPrizes";
import CategorySlider from "@/components/homes/CategorySlider";
import Upcomingevent from "@/components/homes/Upcomingevent";
import JuryEvaluation from "@/components/howitworks/JuryEvaluation";
import ReceiveRewards from "@/components/howitworks/ReceiveRewards";
import SubscriptionPlans from "@/components/howitworks/SubscriptionPlans";
import UploadPhotos from "@/components/howitworks/UploadPhotos";
import WinnerPrice from "@/components/howitworks/WinnerPrice";
import WorkHero from "@/components/howitworks/WorkHero";
import React from "react";
import { Helmet } from "react-helmet-async";

const HowitWork = () => {
  return (
    <div>
      <Helmet>
        <title>How It Work | MyApp</title>
      </Helmet>

      <div>
        <WorkHero />
        <SubscriptionPlans />
        <UploadPhotos />
        <CategorySlider />
        <JuryEvaluation />
        <Upcomingevent />
        <WinnerPrice />
        <ReceiveRewards />
      </div>
    </div>
  );
};

export default HowitWork;
