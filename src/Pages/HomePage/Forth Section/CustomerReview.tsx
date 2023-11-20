import React, { useState } from "react";

import Rectangle2 from "../../../assets/images/icons/Rectangle2.svg";
import backArrow from "../../../assets/images/icons/backArrow.png";
import nextArrow from "../../../assets/images/icons/nextArrow.png";

import default_profile from "../../../assets/images/profiles/default.png";
import { Button } from "antd";

interface CustomerReviewProps {
  slides: any[];
}
const CustomerReview = ({ slides }: CustomerReviewProps) => {
  let [current, setCurrent] = useState<number>(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <>
      <div className="relative">
        <h1 className="text-center font-manropebold text-[35px] mb-12 sm:text-[45px] md:text-[55px]">
          What our customer say.
        </h1>
        <div className="lg:flex lg:flex-row lg:justify-center">
          <div className="hidden lg:w-40 lg:flex lg:flex-col lg:justify-center">
            <div className="flex justify-start">
              <Button
                className="bg-white p-7 rounded-lg h-24 shadow-none border-none hover:border-orange-900"
                onClick={previousSlide}
              >
                <img src={backArrow} alt="" className="w-12 h-12" />
              </Button>
            </div>
          </div>

          <div className="overflow-hidden w-[100%] mb-6 lg:mx-7">
            <div className="flex transition ease-out duration-500" style={{ transform: `translateX(-${current * 100}%)`}}>
              {slides?.map((review: any) => {
                return (
                  <fieldset className="bg-white rounded-[12px] min-w-full" key={review?.key}>
                    {/* lg:mx-7 mb-6 lg:w-full */}
                    <legend className="text-center">
                      <img
                        src={default_profile}
                        alt="Avatar"
                        className="w-[150px] rounded-full text-center"
                      />
                    </legend>

                    <div className="p-8 lg:p-10 xl:p-12">
                      <p className="font-openregular text-[22px] text-start mb-6">
                        {review?.comment}
                      </p>
                      <div>
                        <ul className="text-center">
                          <li className="inline-block mr-2.5">
                            <img
                              src={Rectangle2}
                              alt=""
                              width={17}
                              height={17}
                            />
                          </li>
                          <li className="inline-block font-opensemibold text-[22px] text-[#3d3d3d]">
                            {review?.customer_name}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </fieldset>
                );
              })}
            </div>
          </div>

          <div className="hidden lg:w-40 lg:flex lg:flex-col lg:justify-center">
            <div className="flex justify-end">
              {/* <div className="bg-white p-7 rounded-lg">
                <img src={nextArrow} alt="" className="w-12 h-12" />
              </div> */}
              <Button
                className="bg-white p-7 rounded-lg shadow-none h-24 border-none"
                onClick={nextSlide}
              >
                <img src={nextArrow} alt="" className="w-12 h-12" />
              </Button>
            </div>
          </div>

          <div className="flex flex-row justify-around sm:px-44 md:px-60 lg:hidden">
            <div>
              {/* <a href="#">
                <img src={backArrow} alt="" width={55} height={55} />
              </a> */}
              <Button
                onClick={previousSlide}
                className="p-7 rounded-[10px] h-28 border-none shadow-none bg-white"
              >
                <img src={backArrow} alt="" width={55} height={55} />
              </Button>
            </div>
            <div>
              {/* <a href="#">
                <img src={nextArrow} alt="" width={55} height={55} />
              </a> */}
              <Button
                className="p-7 rounded-[10px] h-28 border-none shadow-none bg-white"
                onClick={nextSlide}
              >
                <img src={nextArrow} alt="" width={55} height={55} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerReview;
