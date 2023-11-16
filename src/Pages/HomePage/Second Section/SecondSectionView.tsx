import React from "react";
import "./secondsection.css";

import SocialMediaSideBar from "./SocialMediaSideBar"
import MainPage from "./MainPage"

const SecondSectionView = () => {
  return (
    <>
      <section className="flex flex-row relative h-auto">
        <div className="w-32 hidden lg:block">
          {/* lg:items-center */}
          <SocialMediaSideBar/>
        </div>
        <div className="w-full py-9 px-3 lg:pt-[150px] lg:pr-24 lg:pb-32">
          <MainPage/>
        </div>
      </section>
    </>
  );
};

export default SecondSectionView;
