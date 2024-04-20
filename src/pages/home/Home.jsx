import React from "react";

import {
  HeroSection,
  AboutSection,
  ScheduleSection,
  PricingSection,
  ContactSection,
} from "./containers";

const Home = () => {
  return (
    <div>
      {/* HERO */}
      <HeroSection />

      {/* ABOUT */}
      <AboutSection />

      {/* SCHEDULE */}
      <ScheduleSection />

      {/* PRICING */}
      <PricingSection />

      {/* CONTACT */}
      <ContactSection />
    </div>
  );
};

export default Home;
