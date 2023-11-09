import React from "react";

import "./thirdsection.css";

import Rectangle2 from "../../../assets/images/icons/Rectangle2.svg";
import VectorUp from "../../../assets/images/icons/VectorUp.png";

const ThirdSectionView = () => {
  return (
    <>
      <div className="third-section flex bg-[#ececec] h-full">
        <div className="hidden md:block md:w-[90px] md:pt-[10%] md:pl-2">
          <a href="#">
            <img src={VectorUp} alt="arrow-up" width={40} height={40}
            />
          </a>
        </div>
        <div className="w-full py-12 px-3.5 md:py-20">
          <ul className="text-center mb-[40px]">
            <li className="inline-block mr-[15px]">
              <img src={Rectangle2} alt="" width={17} height={17} />
            </li>
            <li className="inline-block">
              <p className="text-xl font-openextrabold tracking-[3px]">
                WHO WE ARE
              </p>
            </li>
          </ul>

          <div className="grid gap-4 text-center">
            <div>
              <h1 className="text-[37px] font-manropebold leading-tight sm:text-[50px] lg:text-[60px]">
                We build and represent quality products <br /> that make the
                outdoors more fun.
              </h1>
            </div>
            <div>
              <div className="mt-11">
                <a href="#" className="text-white bg-[#3d3d3d] text-[25px] rounded-[10px] py-5 px-10 mt-[90px]" > Learn More </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThirdSectionView;
