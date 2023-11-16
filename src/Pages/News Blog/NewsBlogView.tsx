import React from "react";

import "./blog.css";

import marlonlogowhite from "../../assets/images/logo/marlonlogowhite.png"

import rectangle1 from "../../assets/images/icons/rectangle1.svg";
import Rectangle2 from "../../assets/images/icons/Rectangle2.svg";
import Group1 from "../../assets/images/icons/menu icons/Group 1.svg";

// import FooterContainer from "../Footer/FooterContainer";
import FooterContainer from "../../Components/Footer/FooterContainer"
import FooterMobileContainer from "../../Components/Footer/Mobile/FooterMobileContainer"

import top10Docks from "../../assets/images/products/Blog - Top 10 Docks.jpg";

import bestboats1 from "../../assets/images/home page/bestboats1.jpg";

const NewsBlogView = () => {
  return (
    <div>
      <div className="news-blog-first-section h-screen bg-center bg-cover bg-no-repeat relative py-6 px-3 sm:px-8 lg:h-full lg:pb-60 xl:pb-96 xl:px-14 xl:pt-14">
        <div className="mb-40 flex justify-center sm:justify-start">
          <img src={marlonlogowhite} alt="marlon-logo" />
        </div>
        <div className="z-2 relative lg:ml-10">
          <div className="sm:mb-7 lg:flex lg:items-center">
            <img src={rectangle1} alt="" className="mr-5 sm:w-[50px] sm:h-[50px] xl:w-[63px] xl:h-[63px]" />
            <p className="font-manropebold text-white text-[40px] sm:text-[60px] lg:text-[60px] xl:text-[90px]">
                Discover the Latest at Marlon
            </p>
          </div>
          
          <p className="text-white text-start font-manropemedium text-[20px] lg:ml-[66px] lg:text-[23px] xl:ml-20">
            A short brief introduction to the page. Viverra vitae cras rutrum
            malesuada. Aenean dictum
            mattis consequat amet elementum quis ut tortor. Dui mattis nunc
            morbi risus. Enim.
          </p>
        </div>
      </div>

      <div className="px-3 py-20 h-full text-center sm:px-8 lg:py-24 xl:py-52">
        <ul className="mb-10">
          <li className="inline-block" style={{ marginRight: "15px" }}>
            <img src={Rectangle2} alt="" width={17} height={17} />
          </li>
          <li className="inline-block">
            <p className="font-openextrabold text-[17px] tracking-[3px]">
              MEDIA KIT
            </p>
          </li>
        </ul>
        <h1 className="font-manropebold text-[40px] mb-10 sm:text-[45px] xl:text-[65px]">
          Download our media kit.
        </h1>
        <a href="#" className="text-white bg-[#3d3d3d] py-3.5 px-7 text-[20px] rounded-xl xl:text-[23px] xl:py-5 xl:px-10">
          Learn More
        </a>
      </div>

      <div className="blog-media-kit-section bg-white grid gap-10 h-full px-3 py-10 relative sm:px-8 sm:py-20 lg:px-12 lg:py-28 xl:px-28 xl:py-24">
        <div className="grid gap-10 h-full relative lg:grid-cols-2">
          <div>
            <img
              src={bestboats1}
              alt=""
              className="h-[300px] w-full object-cover rounded-[12px] md:h-[450px] lg:h-[500px] xl:h-[600px]"
            />
          </div>
          <div>
            <h1 className="text-[30px] font-manropelight mb-3">Featured</h1>
            <hr style={{ border: "1px solid #3d3d3d" }} className="mb-10" />
            <h1 className="font-manropebold text-[40px] mb-5 sm:text-[45px]">
              Best Boats of 2023
            </h1>
            <p className="text-start font-manropemedium text-[18px] mb-10 sm:text-[20px]">
              Description of blog article. Lorem ipsum dolor sit amet
              consectetur. At blandit etiam iaculis vulputate justo condimentum.
              Pulvinar in viverra egestas quis mattis. Est erat rutrum auctor et
              dictum neque. Non rutrum vivamus sagittis comem.
            </p>
            <a
              href="#"
              className="text-white bg-[#3d3d3d] py-3.5 px-7 text-[20px] rounded-xl"
            >
              Read More
            </a>
          </div>
        </div>

        <div className="text-center relative">
          <div>
            <h1 className="text-[40px] font-manropelight mb-3 lg:text-start">
              Filters
            </h1>
            <div className="grid gap-4 mb-10 sm:flex sm:flex-col sm:items-center sm:justify-center lg:flex lg:flex-row lg:flex-wrap lg:justify-between">
              <div className="bg-[#edecec] p-3 text-[25px] text-[#3d3d3d] font-manropemedium rounded-xl sm:w-64">
                All
              </div>
              <div className="bg-[#edecec] p-3 text-[25px] text-[#3d3d3d] font-manropemedium rounded-xl sm:w-64">
                Events
              </div>
              <div className="bg-[#edecec] p-3 text-[25px] text-[#3d3d3d] font-manropemedium rounded-xl sm:w-64">
                News
              </div>
              <div className="bg-[#edecec] p-3 text-[25px] text-[#3d3d3d] font-manropemedium rounded-xl sm:w-64">
                Tools
              </div>
              <div className="bg-[#edecec] p-3 text-[25px] text-[#3d3d3d] font-manropemedium rounded-xl sm:w-64">
                Products
              </div>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-3 lg:grid-rows-2 lg:gap-5">
            {/* xl:w-[75rem] */}
            <div className="bg-[#edecec] rounded-2xl">
              <div>
                <img
                  src={top10Docks}
                  alt=""
                  className="w-full object-fill rounded-t-2xl"
                />
              </div>
              <div className="p-5 sm:p-8 md:p-10 lg:p-5 xl:p-10">
                <h2 className="font-manropebold text-start text-[27px] mb-5">
                  Article #
                </h2>
                <p className="font-manropemedium text-start text-[20px] mb-5 sm:mb-8">
                  Lorem ipsum dolor sit amet consectetur. Quisque scelerisque
                  turpis elit vitae in vulputate imperdiet. Iaculis nisl in in
                  dolor gravida. Duis quis laoreet quam suspendis.
                </p>
                <div className="flex">
                  <a
                    href="#"
                    className="text-white font-manropemedium bg-[#3d3d3d] text-[17px] p-3 rounded-xl sm:py-4 sm:px-7 md:py-5 md:px-10 md:text-[20px]"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-[#edecec] rounded-2xl">
              <div>
                <img
                  src={top10Docks}
                  alt=""
                  className="w-full object-fill rounded-t-2xl"
                />
              </div>
              <div className="p-5 sm:p-8 md:p-10 lg:p-5 xl:p-10">
                <h2 className="font-manropebold text-start text-[27px] mb-5">
                  Article #
                </h2>
                <p className="font-manropemedium text-start text-[20px] mb-5 sm:mb-8">
                  Lorem ipsum dolor sit amet consectetur. Quisque scelerisque
                  turpis elit vitae in vulputate imperdiet. Iaculis nisl in in
                  dolor gravida. Duis quis laoreet quam suspendis.
                </p>
                <div className="flex">
                  <a
                    href="#"
                    className="text-white font-manropemedium bg-[#3d3d3d] text-[17px] p-3 rounded-xl sm:py-4 sm:px-7 md:py-5 md:px-10 md:text-[20px]"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-[#edecec] rounded-2xl">
              <div>
                <img
                  src={top10Docks}
                  alt=""
                  className="w-full object-fill rounded-t-2xl"
                />
              </div>
              <div className="p-5 sm:p-8 md:p-10 lg:p-5 xl:p-10">
                <h2 className="font-manropebold text-start text-[27px] mb-5">
                  Article #
                </h2>
                <p className="font-manropemedium text-start text-[20px] mb-5 sm:mb-8">
                  Lorem ipsum dolor sit amet consectetur. Quisque scelerisque
                  turpis elit vitae in vulputate imperdiet. Iaculis nisl in in
                  dolor gravida. Duis quis laoreet quam suspendis.
                </p>
                <div className="flex">
                  <a
                    href="#"
                    className="text-white font-manropemedium bg-[#3d3d3d] text-[17px] p-3 rounded-xl sm:py-4 sm:px-7 md:py-5 md:px-10 md:text-[20px]"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-[#edecec] rounded-2xl">
              <div>
                <img
                  src={top10Docks}
                  alt=""
                  className="w-full object-fill rounded-t-2xl"
                />
              </div>
              <div className="p-5 sm:p-8 md:p-10 lg:p-5 xl:p-10">
                <h2 className="font-manropebold text-start text-[27px] mb-5">
                  Article #
                </h2>
                <p className="font-manropemedium text-start text-[20px] mb-5 sm:mb-8">
                  Lorem ipsum dolor sit amet consectetur. Quisque scelerisque
                  turpis elit vitae in vulputate imperdiet. Iaculis nisl in in
                  dolor gravida. Duis quis laoreet quam suspendis.
                </p>
                <div className="flex">
                  <a
                    href="#"
                    className="text-white font-manropemedium bg-[#3d3d3d] text-[17px] p-3 rounded-xl sm:py-4 sm:px-7 md:py-5 md:px-10 md:text-[20px]"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-[#edecec] rounded-2xl">
              <div>
                <img
                  src={top10Docks}
                  alt=""
                  className="w-full object-fill rounded-t-2xl"
                />
              </div>
              <div className="p-5 sm:p-8 md:p-10 lg:p-5 xl:p-10">
                <h2 className="font-manropebold text-start text-[27px] mb-5">
                  Article #
                </h2>
                <p className="font-manropemedium text-start text-[20px] mb-5 sm:mb-8">
                  Lorem ipsum dolor sit amet consectetur. Quisque scelerisque
                  turpis elit vitae in vulputate imperdiet. Iaculis nisl in in
                  dolor gravida. Duis quis laoreet quam suspendis.
                </p>
                <div className="flex">
                  <a
                    href="#"
                    className="text-white font-manropemedium bg-[#3d3d3d] text-[17px] p-3 rounded-xl sm:py-4 sm:px-7 md:py-5 md:px-10 md:text-[20px]"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-[#edecec] rounded-2xl">
              <div>
                <img
                  src={top10Docks}
                  alt=""
                  className="w-full object-fill rounded-t-2xl"
                />
              </div>
              <div className="p-5 sm:p-8 md:p-10 lg:p-5 xl:p-10">
                <h2 className="font-manropebold text-start text-[27px] mb-5">
                  Article #
                </h2>
                <p className="font-manropemedium text-start text-[20px] mb-5 sm:mb-8">
                  Lorem ipsum dolor sit amet consectetur. Quisque scelerisque
                  turpis elit vitae in vulputate imperdiet. Iaculis nisl in in
                  dolor gravida. Duis quis laoreet quam suspendis.
                </p>
                <div className="flex">
                  <a
                    href="#"
                    className="text-white font-manropemedium bg-[#3d3d3d] text-[17px] p-3 rounded-xl sm:py-4 sm:px-7 md:py-5 md:px-10 md:text-[20px]"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
            <a href="#" className="text-white font-manropemedium bg-[#3d3d3d] text-[17px] p-3 px-16 rounded-xl sm:py-4 sm:px-7 md:py-5 md:px-10 md:text-[20px]">
                Load More
            </a>
        </div>
      </div>

      <FooterMobileContainer />
      <FooterContainer />
    </div>
  );
};

export default NewsBlogView;
