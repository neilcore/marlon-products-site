import React from "react";

import "./firstsection.css";

import video1 from "../../../assets/videos/video1.mp4";
import rectangle1 from "../../../assets/images/icons/rectangle1.svg";
import Vector from "../../../assets/images/icons/Vector.svg";

// import MenuContainer from "../../Menu/MenuContainer"
import MenuContainer from "../../../Components/Menu/MenuContainer"

const FirstSectionView = () => {
  return (
    <>
      <section className="relative h-screen">
        <video
          src={video1}
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ zIndex: -1 }}
        ></video>

        <div className="h-screen relative z-2 flex flex-col justify-between py-9 px-7 xl:px-16">
          <MenuContainer/>
          <div id="title">
            <h1 className="text-start text-white font-manropelight text-[27px] sm:text-[33px] md:text-[35px] lg:text-[43px] xl:text-[55px] xl:text-center laptopL:text-center hybridL:text-[65px]">
              North America's <br /> best manufacturer of <br />
            </h1>
            <div className="flex items-center mmobile:justify-end">
              <div><img src={rectangle1} alt="" className="w-5 h-5 mr-1 xl:w-10 xl:h-10 hybridL:w-12 hybridL:h-12"/></div>
              <div>
                <h1
                  className="text-white font-manropebold text-[27px] sm:text-[33px] md:text-[35px] lg:text-[43px] lg:mr-40 xl:text-[55px] xl:mr-0 laptopL:mr-14 2xl:mr-60 hybridL:mr-72 hybridL:text-[65px]"
                >
                  Boating Products.
                </h1>
              </div>
            </div>
          </div>
          <div>
            <img src={Vector} alt="arrow-down" className="w-[50px] h-[50px] xl:ml-8"/>
          </div>
        </div>

        <div className="polygon-top-right absolute top-0 right-0 w-2/4 h-3/4 bg-[#414244] opacity-90 z-1"></div>
        {/* w-2/4 h-3/4 */}
        <div className="polygon-bottom-left absolute bottom-0 left-0 w-1/2 h-2/4 bg-white opacity-80 z-1"></div>
        
      </section>
    </>
  );
};

export default FirstSectionView;
