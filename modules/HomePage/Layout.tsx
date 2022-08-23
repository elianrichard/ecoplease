import React, { useState } from "react";

import LandingHero from "./LandingHero";
import VideoCounter from "./VideoCounter";
import PerksComparison from "./PerksComparison";
import JoinedContent from "./JoinedContent";
import Partners from "./Partners";
import Testimonial from "./Testimonial";
import Certification from "./Certification";
import ModalContainer from "../../components/_common/ModalContainer";

const Layout = () => {
  const [isShowVideoModal, setIsShowVideoModal] = useState<boolean>(false);

  return (
    <div className="overflow-x-hidden pt-16 relative">
      <LandingHero />
      <VideoCounter setVideoModal={setIsShowVideoModal} />
      <PerksComparison />
      <JoinedContent>
        <Partners />
        <Testimonial />
        <Certification />
      </JoinedContent>
      {isShowVideoModal && (
        <ModalContainer
          additionalClass="flex justify-center items-center"
          setModal={setIsShowVideoModal}
        >
          <div className="bg-white w-1/2 aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/1fueZCTYkpA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </ModalContainer>
      )}
    </div>
  );
};

export default Layout;
