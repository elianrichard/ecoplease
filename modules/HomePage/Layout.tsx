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
    <div className="relative overflow-x-hidden pt-16">
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
          <div className="aspect-video w-full xs:px-0 px-5 xs:w-2/3 lg:w-1/2">
            <iframe
              className="h-full w-full"
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
