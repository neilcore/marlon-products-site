import React from "react";

import Group1 from "../../assets/images/icons/menu icons/Group 1.svg";
import icon_Location_ from "../../assets/images/icons/menu icons/icon _Location_.svg";
import rectangle1 from "../../assets/images/icons/rectangle1.svg";
import Rectangle2 from "../../assets/images/icons/Rectangle2.svg";

const MenuMobileView = () => {
  return (
    <>
      <div
        className="flex flex-row justify-end relative"
        // bg-gray-400
        style={{ marginBottom: "8%", zIndex: "2" }}
      >
        <ul className="list-none m-0 p-0 overflow-hidden">
          <li className="float-left" id="menu-icon">
            <a
              href="#"
              className="block text-center text-black p-4 no-underline flex align-center"
            >
              <img
                src={rectangle1}
                alt=""
                width={18}
                height={18}
                className="inline mr-2.5"
              />
              <p
                className="inline mr-2.5 text-white"
                style={{ fontFamily: "Manrope-Bold", fontSize: "18px" }}
              >
                MENU
              </p>
              <img src={Group1} alt="" width={18} height={18} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MenuMobileView;
