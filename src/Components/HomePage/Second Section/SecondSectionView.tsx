import React from "react";
import "./secondsection.css";

import SocialMediaSideBar from "./SocialMediaSideBar"
import MainPage from "./MainPage"

const SecondSectionView = () => {
  return (
    <>
      <div id="second-section-main-view">
        <div className="flex items-center mr-4 w-20">
            <SocialMediaSideBar/>
        </div>
        <div className="main-page">
            <MainPage/>
        </div>
      </div>
    </>
  );
};

export default SecondSectionView;
