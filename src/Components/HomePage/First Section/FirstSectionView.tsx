import React from "react";

import "./firstsection.css";

import video1 from "../../../assets/videos/video1.mp4";
import marlonlogowhite from "../../../assets/images/logo/marlonlogowhite.png";
import searchicon from "../../../assets/images/icons/searchicon.png";
import locationicon from "../../../assets/images/icons/locationicon.png";
import usericon from "../../../assets/images/icons/usericon.png";
import menuicon from "../../../assets/images/icons/menuicon.png";
import rectangle1 from "../../../assets/images/icons/rectangle1.svg";
import Vector from "../../../assets/images/icons/Vector.svg";

import MobileViewMenu from "./MobileViewMenu"

const FirstSectionView = () => {
  return (
    <>
      <div className="relative h-screen">
        <video
          src={video1}
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ zIndex: -1 }}
        ></video>
        <div
          className="first-section relative flex flex-col justify-between h-screen"
          // p-12
          style={{ zIndex: 2 }}
        >
          <div
            className="w-full flex justify-between"
            id="head-section-menu-computer-view"
          >
            <div id="marlon-logo-div">
              <img
                src={marlonlogowhite}
                alt="MARLON-RECREATIONAL-PRODUCTS-LOGO"
              />
            </div>

            <div>
              <ul className="list-none m-0 p-0 overflow-hidden">
                <li className="float-left" id="search-icon">
                  <a
                    href="#"
                    className="block text-center text-black p-4 no-underline"
                  >
                    <img src={searchicon} alt="" width={22} height={22} />
                  </a>
                </li>
                <li className="float-left" id="location-icon">
                  <a
                    href="#"
                    className="block text-center text-black p-4 no-underline"
                  >
                    <img src={locationicon} alt="" width={22} height={22} />
                  </a>
                </li>
                <li className="float-left" id="user-icon">
                  <a
                    href="#"
                    className="block text-center text-black p-4 no-underline"
                  >
                    <img src={usericon} alt="" width={22} height={22} />
                  </a>
                </li>
                <li className="float-left" id="menu-icon">
                  <a
                    href="#"
                    className="block text-center text-black p-4 no-underline flex align-center"
                  >
                    <img
                      src={rectangle1}
                      alt=""
                      width={22}
                      height={22}
                      className="inline mr-3.5"
                    />
                    <p
                      className="inline mr-3.5 text-white"
                      style={{ fontFamily: "Manrope-Regular" }}
                    >
                      MENU
                    </p>
                    <img
                      src={menuicon}
                      alt=""
                      width={22}
                      height={22}
                      className="inline mr-0"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* intended for mobile view screen upper menu */}
          <MobileViewMenu/>
          {/* intended for mobile view screen upper menu */}

          <div className="text-center" id="first-section-middle-title">
            {/* bg-red-200 */}
            <h1 className="text-white">
              North America's best manufacturer of <br />
            </h1>
            <ul className="list-none m-0 p-0 overflow-hidden">
              {/* style={{"marginLeft": "51%"}} */}
              <li className="float-left text-white text-right">
                {/* style={{"fontSize": "55px"}} */}
                <img
                  id="first-section-middle-title-rectangle-img"
                  src={rectangle1}
                  alt=""
                  className="inline"
                />
                {/* mr-3.5 */}
              </li>
              <li
                className="float-left text-white text-right"
                style={{ fontFamily: "Manrope-Bold" }}
              >
                Boating Products.
              </li>
            </ul>
          </div>

          <div className="w-full">
            <img
              src={Vector}
              alt="arrow-down"
              id="head-section-menu-arrow-down"
            />
          </div>
        </div>

        <div
          className="polygon-top-right absolute top-0 right-0 w-2/4 h-3/4 opacity-90"
          style={{
            zIndex: 1,
          }}
        ></div>
        <div
          className="polygon-bottom-left absolute bottom-0 left-0 w-1/2 h-2/4 opacity-80"
          style={{ zIndex: 1 }}
        ></div>
        
      </div>
    </>
  );
};

export default FirstSectionView;
