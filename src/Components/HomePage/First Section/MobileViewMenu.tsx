import React from "react";

import menuicon from "../../../assets/images/icons/menuicon.png";
import rectangle1 from "../../../assets/images/icons/rectangle1.svg";

const MobileViewMenu = () => {
  return (
    <>
      <div className="w-full flex justify-end" id="head-section-menu-mobile-view">
        <div className="flex justify-end">
          <a href="#" className="block text-center text-black p-4 no-underline flex align-center">
            <img
              src={rectangle1}
              alt=""
              width={15}
              height={15}
              className="inline mr-1"
            />
            <p className="inline mr-1 text-white">MENU</p>
            <img
              src={menuicon}
              alt=""
              width={20}
              height={20}
              className="inline mr-0"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default MobileViewMenu;
