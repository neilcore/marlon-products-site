import React from "react";

import Rectangle2 from "../../../assets/images/icons/Rectangle2.svg";
import backArrow from "../../../assets/images/icons/backArrow.png"
import nextArrow from "../../../assets/images/icons/nextArrow.png"

import default_profile from "../../../assets/images/profiles/default.png"

const CustomerReview = () => {
  return (
    <>
      <div className="relative">
        <h1 className="text-center font-manropebold text-[35px] mb-12 sm:text-[45px] md:text-[55px]">What our customer say.</h1>
        <div className="lg:flex lg:flex-row lg:justify-center">
          <div className="hidden lg:w-40 lg:flex lg:flex-col lg:justify-center">
            <div className="flex justify-start">
              <a href="#" className="bg-white p-7 rounded-lg">
                <img src={backArrow} alt="" className="w-12 h-12" />
              </a>
            </div>
          </div>
          <fieldset className="bg-white rounded-[12px] mb-6 lg:w-full lg:mx-7">
            <legend className="text-center">
                <img src={default_profile} alt="Avatar" className="w-[150px] rounded-full text-center"/>
            </legend>
            <div className="p-8 lg:p-10 xl:p-12">
              <p className="font-openregular text-[22px] text-start mb-6">
                Marlon’s customer service team was incredibly knowledgeable
                and helpful, guiding me through the process of finding the
                perfect products tailored to my needs. They truly understood
                my passion for recreational activities and went above and
                beyond to ensure I had the best equipment possible. It's
                evident that they genuinely care about their customers and
                their satisfaction.
              </p>
              <div>
                <ul className="text-center">
                  <li className="inline-block mr-2.5"><img src={Rectangle2} alt="" width={17} height={17} /></li>
                  <li className="inline-block font-opensemibold text-[22px] text-[#3d3d3d]">Denise Sandlers</li>
                </ul>
              </div>
            </div>
          </fieldset>
          <div className="hidden lg:w-40 lg:flex lg:flex-col lg:justify-center">
            <div className="flex justify-end">
              <a href="#" className="bg-white p-7 rounded-lg">
                <img src={nextArrow} alt="" className="w-12 h-12" />
              </a>
            </div>
          </div>

          <div className="flex flex-row justify-between sm:px-44 md:px-60 lg:hidden">
            <div className="bg-white p-7 rounded-[10px]">
              <a href="#">
                <img src={backArrow} alt="" width={55} height={55} />
              </a>
            </div>
            <div className="bg-white p-7 rounded-[10px]">
              <a href="#">
                <img src={nextArrow} alt="" width={55} height={55} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerReview;
