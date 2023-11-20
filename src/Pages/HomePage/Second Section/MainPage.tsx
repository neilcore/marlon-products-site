import React from "react";

import docks_hoist from "../../../assets/images/products/docks_hoist.jpg"
import Trailers from "../../../assets/images/products/Trailers.jpg"
import trucks_decks from "../../../assets/images/products/trucks_decks.jpg"
import Boats from "../../../assets/images/products/Boats.jpg"
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <section className="grid gap-y-9">
      {/* text section */}
      <div className="grid gap-4 lg:grid-cols-2 lg:pb-11">
        <h1 className="text-start font-manropebold text-[39px] leading-tight sm:text-[45px] lg:text-[55px] xl:text-[66px]">We've got you covered.</h1>
        <p className="text-start font-manropemedium text-[19px] lg:text-[25px]"> 
          Our boats, trailers, docks, hoists, truck decks and accessories are
          engineered to work hard and play harder, just like we do. We
          constantly update our products based on your feedback, and are always innovating
          new ways to make the good life, well, better and sustainable.
        </p>
      </div>


      <div className="grid gap-y-8 mmobile:gap-y-11 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-4 lg:gap-x-4 xl:grid-cols-4">
        <div className="relative h-auto">
          <img src={Trailers} alt="" className="h-[300px] w-full object-cover rounded-[12px] lg:h-[500px]" />
          <div className="absolute bottom-3 left-0 p-2 ml-5 lg:bottom-8">
            <h1 className="font-manropebold text-white text-[29px] mmobile:text-[35px]">Products</h1>
            <Link to={"/"} className="font-manropebold text-white text-[18px] mmobile:text-[20px]">See More</Link>
          </div>
        </div>
        <div className="relative h-auto">
          <img src={docks_hoist} alt="" className="h-[300px] w-full object-cover rounded-[12px] lg:h-[500px]" />
          <div className="absolute bottom-3 left-0 p-2 ml-5 lg:bottom-8">
            <h1 className="font-manropebold text-white text-[29px] mmobile:text-[35px]">Find A Dealer</h1>
            {/* <span className="font-manropebold text-white text-[18px] mmobile:text-[20px]">See More</span> */}
            <Link to={"/"} className="font-manropebold text-white text-[18px] mmobile:text-[20px]">See More</Link>
          </div>
        </div>
        <div className="relative h-auto">
          <img src={trucks_decks} alt="" className="h-[300px] w-full object-cover rounded-[12px] lg:h-[500px]" />
          <div className="absolute bottom-3 left-0 p-2 ml-5 lg:bottom-8">
            <h1 className="font-manropebold text-white text-[29px] mmobile:text-[35px]">Become a Dealer</h1>
            <Link to={"/"} className="font-manropebold text-white text-[18px] mmobile:text-[20px]">See More</Link>
          </div>
        </div>
        <div className="relative h-auto">
          <img src={Boats} alt="" className="h-[300px] w-full object-cover rounded-[12px] lg:h-[500px]" />
          <div className="absolute bottom-3 left-0 p-2 ml-5 lg:bottom-8">
            <h1 className="font-manropebold text-white text-[29px] mmobile:text-[35px]">Marlon Gear</h1>
            <Link to={"/"} className="font-manropebold text-white text-[18px] mmobile:text-[20px]">See More</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainPage;
