import React from "react";

import { Space } from "antd";

import pontoon_boats from "../../../assets/images/home page/pontoon_boats.jpg";
import TruckDecks from "../../../assets/images/home page/TruckDecks.jpg";
import welded_boats from "../../../assets/images/home page/welded_boats.jpg";

import Rectangle2 from "../../../assets/images/icons/Rectangle2.svg";

const SellingProducts = () => {
  return (
    <>
      {" "}
      <Space className="grid gap-y-9 h-auto mb-16 relative">
        <div>
          <div className="mb-7">
            <ul className="text-start">
              <li className="inline-block mr-[15px]">
                <img src={Rectangle2} alt="" width={17} height={17} />
              </li>
              <li className="inline-block">
                <p className="tracking-[3px] font-openextrabold text-[17px]">
                  BEST SELLERS
                </p>
              </li>
            </ul>
          </div>
          <div className="mb-7">
            <h1 className="font-manropebold text-[40px] md:text-[42px] lg:text-[50px] xl:text-[60px]">
              Elevate your leisure with the hottest <br />
              recreational products of the year.
            </h1>
          </div>
        </div>

        <div className="grid gap-y-6 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-4 lg:gap-x-6 lg:gap-y-6 xl:grid-cols-3">
          <div className="relative h-auto">
            <img src={pontoon_boats} alt="" className="h-[300px] w-full object-cover rounded-[12px] lg:h-[500px]" />
            <div className="absolute bottom-3 left-0 p-2 ml-5">
              <h1 className="font-manropebold text-white text-[29px] mmobile:text-[35px]">Pontoon Boats</h1>
              <span className="font-manropebold text-white text-[18px] mmobile:text-[20px]">See More</span>
            </div>
          </div>
          <div className="relative h-auto">
            <img src={welded_boats} alt="" className="h-[300px] w-full object-cover rounded-[12px] lg:h-[500px]" />
            <div className="absolute bottom-3 left-0 p-2 ml-5">
              <h1 className="font-manropebold text-white text-[29px] mmobile:text-[35px]">Welded Boats</h1>
              <span className="font-manropebold text-white text-[18px] mmobile:text-[20px]">See More</span>
            </div>
          </div>
          <div className="relative h-auto">
            <img src={TruckDecks} alt="" className="h-[300px] w-full object-cover rounded-[12px] lg:h-[500px]" />
            <div className="absolute bottom-3 left-0 p-2 ml-5">
              <h1 className="font-manropebold text-white text-[29px] mmobile:text-[35px]">Truck Decks</h1>
              <span className="font-manropebold text-white text-[18px] mmobile:text-[20px]">See More</span>
            </div>
          </div>
        </div>

        <div>
          <a href="#" className="text-white no-underline block bg-[#3d3d3d] text-[20px] rounded-[10px] py-[15px] px-[30px] w-56">
            View All Products
          </a>
        </div>
      </Space>
    </>
  );
};

export default SellingProducts;
