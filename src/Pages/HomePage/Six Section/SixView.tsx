import React from "react";

import "./sixsection.css";

import Rectangle2 from "../../../assets/images/icons/Rectangle2.svg";
import bestboats1 from "../../../assets/images/home page/bestboats1.jpg";
import bestboats2 from "../../../assets/images/home page/newBOAT2.jpg";

const SixView = () => {
  return (
    <>
      <section
        className="
          six-section h-full bg-cover bg-no-repeat bg-center px-3.5 py-12 flex flex-col
          sm:px-8 sm:py-20 lg:px-16 lg:py-28 xl:flex-row xl:justify-between xl:px-24 xl:py-40
        "
      >
        <div className="mb-11 xl:mr-14 xl:max-w-auto">
          <ul className="text-start mb-7">
            <li className="inline-block" style={{ marginRight: "15px" }}>
              <img src={Rectangle2} alt="" width={17} height={17} />
            </li>
            <li className="inline-block">
              <p
                className="text-white font-openextrabold tracking-[3px] text-[17px] md:text-[19px]"
              >
                KEEP UP-TO-DATE
              </p>
            </li>
          </ul>

          <h1 className="text-white text-[40px] font-manropesemibold mb-5 sm:text-[50px] sm:mb-7 md:text-[60px] md:mb-7 lg:hidden" style={{"lineHeight": "1.1"}}>
            Latest news and updates.
          </h1>

          <h1 className="hidden lg:block lg:text-white lg:font-manropesemibold lg:mb-10 lg:text-[75px] xl:text-[60px]" style={{"lineHeight": "1.1"}}>
            Latest news <br /> and updates.
          </h1>

          <div>
            <a
              href="#"
              className="
              shadow-md
              bg-white text-[#3d3d3d] text-[18px] font-manroperegular inline-block py-2.5 px-8 rounded-xl
              lg:py-4 lg:px-10
              "
            >
              View All
            </a>
          </div>

        </div>
        <div className="grid gap-4 lg:grid-cols-2 xl:w-[75rem]">
          <div className="bg-white rounded-2xl shadow-md">
            <div>
              <img src={bestboats1} alt="" className="w-full object-fill rounded-t-2xl" />
            </div>
            <div className="p-5 sm:p-8 md:p-10">
              <h2 className="font-manropebold text-[27px] mb-5">Best Boats of 2023</h2>
              <p className="font-manropemedium text-[20px] mb-5 sm:mb-8">
                Lorem ipsum dolor sit amet consectetur. Quisque scelerisque
                turpis elit vitae in vulputate imperdiet. Iaculis nisl in in
                dolor gravida. Duis quis laoreet quam suspendis.
              </p>
              <a href="#" className="text-white font-manropemedium text-center bg-[#3d3d3d] text-[17px] p-3 rounded-xl sm:py-4 sm:px-7 md:py-5 md:px-10 md:text-[20px]">
                Read More
              </a>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-md">
            <div>
              <img src={bestboats2} alt="" className="w-full object-fill rounded-t-2xl" />
            </div>
            <div className="p-5 sm:p-8 md:p-10">
              <h2 className="font-manropebold text-[27px] mb-5">Best Boats of 2023</h2>
              <p className="font-manropemedium text-[20px] mb-5 sm:mb-8">
                Lorem ipsum dolor sit amet consectetur. Quisque scelerisque
                turpis elit vitae in vulputate imperdiet. Iaculis nisl in in
                dolor gravida. Duis quis laoreet quam suspendis.
              </p>
              <a href="#" className="text-white font-manropemedium text-center bg-[#3d3d3d] text-[17px] p-3 rounded-xl sm:py-4 sm:px-7 md:py-5 md:px-10 md:text-[20px]">
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SixView;
