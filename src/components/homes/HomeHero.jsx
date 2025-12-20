import React from "react";

const HomeHero = () => {
  return (
    <>
      <div>
        {/* here i want to make the img bg img so write necessary css */}
        <div
          className="bg-cover bg-center h-276 max-h-screen w-full"
          style={{ backgroundImage: "url('/src/assets/hero/herobg-img.png')" }}
        >
          <div>
            <h1 className="text-4xl font-bold text-white">ART VISION AWARDS</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHero;
