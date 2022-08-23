import React from "react";

import LandingHero from "./LandingHero";
import VideoCounter from "./VideoCounter";
import PerksComparison from "./PerksComparison";
import JoinedContent from "./JoinedContent";
import Partners from "./Partners";
import Testimonial from "./Testimonial";
import Certification from "./Certification";

const Layout = () => {
  return (
    <div className="overflow-x-hidden">
      <LandingHero />
      <VideoCounter />
      <PerksComparison />
      <JoinedContent>
        <Partners />
        <Testimonial />
        <Certification />
      </JoinedContent>
    </div>
  );
};

export default Layout;
