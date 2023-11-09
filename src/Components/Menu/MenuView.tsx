import React from "react";

import marlonlogowhite from "../../assets/images/logo/marlonlogowhite.png"
import icon_magnifying_glass from "../../assets/images/icons/menu icons/icon _magnifying glass_.svg";
import icon_User_ from "../../assets/images/icons/menu icons/icon _User_.svg";
import Group1 from "../../assets/images/icons/menu icons/Group 1.svg";
import icon_Location_ from "../../assets/images/icons/menu icons/icon _Location_.svg";
import rectangle1 from "../../assets/images/icons/rectangle1.svg";
import Rectangle2 from "../../assets/images/icons/Rectangle2.svg"

import "./menucss.css"

const MenuView = () => {
  return (
    <>
      <div id="menu" className="flex flex-row flex-wrap justify-between z-2">
        <img
          src={marlonlogowhite}
          alt="marlon-logo"
          id="marlon-logo"
          width={250}
          height={250}
        />
        <div>
          <ul className="list-none m-0 p-0 overflow-hidden">
            <li className="float-left sm:hidden" id="search-icon">
              <a
                href="#"
                className="block text-center text-black p-4 no-underline"
              >
                <img
                  src={icon_magnifying_glass}
                  width={25}
                  height={25}
                  alt=""
                />
              </a>
            </li>
            <li className="float-left sm:hidden lg:block" id="location-icon">
              <a
                href="#"
                className="block text-center text-black p-4 no-underline"
              >
                <img src={icon_Location_} alt="" width={22} height={22} />
              </a>
            </li>
            <li className="float-left sm:hidden lg:block" id="user-icon">
              {/* xmobile:hidden */}
              <a
                href="#"
                className="block text-center text-black p-4 no-underline"
              >
                <img src={icon_User_} alt="" width={22} height={22} />
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
                  width={20}
                  height={20}
                  className="inline mr-3.5"
                />
                <p
                  className="inline mr-3.5 text-white"
                  style={{ fontFamily: "Manrope-Bold", fontSize: "20px" }}
                >
                  MENU
                </p>
                <img src={Group1} alt="" width={22} height={22} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MenuView;
