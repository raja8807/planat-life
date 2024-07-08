import React from "react";
import BannerSection from "./sections/banner/banner";
import DoWeCareSection from "./sections/dow_we_care/dow_we_care";
import WeDoCareSection from "./sections/we_do_care/we_do_care";
import WhyNamSection from "./sections/why_nam/why_nam";

const HomeScreen = () => {
  return (
    <main>
      <BannerSection />
      <DoWeCareSection />
      <WeDoCareSection/>
      <WhyNamSection/>
    </main>
  );
};

export default HomeScreen;
