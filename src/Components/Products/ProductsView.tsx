import React from "react";
import "./products.css";

import marlonlogowhite from "../../assets/images/logo/marlonlogowhite.png";
import icon_magnifying_glass from "../../assets/images/icons/menu icons/icon _magnifying glass_.svg";
import icon_User_ from "../../assets/images/icons/menu icons/icon _User_.svg";
import Group1 from "../../assets/images/icons/menu icons/Group 1.svg";
import icon_Location_ from "../../assets/images/icons/menu icons/icon _Location_.svg";
import rectangle1 from "../../assets/images/icons/rectangle1.svg";
import Rectangle2 from "../../assets/images/icons/Rectangle2.svg";

import docks_hoist from "../../assets/images/products/docks_hoist.jpg";
import Trailers from "../../assets/images/products/Trailers.jpg";
import trucks_decks from "../../assets/images/products/trucks_decks.jpg";
import Boats from "../../assets/images/products/Boats.jpg";

import latestImport from "../../assets/images/products/Latest News.jpg";
import Marlonize from "../../assets/images/products/Marlonize.jpg";
import top10Docks from "../../assets/images/products/Blog - Top 10 Docks.jpg";
import off30truckdecks from "../../assets/images/products/Blog - 30 off Truck Decks.png";

import united_states from "../../assets/images/icons/flags/united-states.png";
import canadaflagIcon from "../../assets/images/icons/flags/canada.png";

import FooterContainer from "../Footer/FooterContainer";

import MenuContainer from "../Menu/MenuContainer";
import FooterMobileContainer from "../Footer/Mobile/FooterMobileContainer";

const ProductsView = () => {
  return (
    <>
      <section className="products-first-section h-screen relative">
        <div className="relative z-2">
          <MenuContainer />
        </div>

        <div className="catchphrase-description">
          <ul className="list-none m-0 p-0 overflow-hidden">
            <li className="text-white float-left text-right">
              <img src={rectangle1} alt="" className="inline" />
            </li>
            <li id="catchphrase" className="float-left text-white text-right">
              Our Wide Range of Products. <br />
            </li>
          </ul>
          <p className="text-white text-start" id="description">
            A short brief introduction to the page. Viverra vitae cras rutrum
            malesuada. Aenean dictum <br />
            mattis consequat amet elementum quis ut tortor. Dui mattis nunc
            morbi risus. Enim.
          </p>
        </div>

        <div className="polygon-top-right bg-[#414244] absolute top-0 right-0 w-2/4 h-3/4 opacity-90 z-1"></div>
      </section>

      <section className="py-9 px-3 sm:px-8 sm:py-20 lg:px-16 lg:py-28 xl:px-24 xl:py-34">
        <div className="grid gap-y-9">
          <div className="grid gap-4 lg:grid-cols-2 lg:pb-11">
            <h1 className="text-start font-manropebold text-[39px] leading-tight sm:text-[45px] lg:text-[55px] xl:text-[66px]">
              Products designed to endure the elements.
            </h1>
            <p className="text-start font-manropemedium text-[19px] lg:text-[25px]">
              We build and representquality products that make the outdoors more fun. 
              Whether your kind of fun is on land or water, we ve got you covered. Our boats, 
              trailers, docks, hoists, truck decks and accessories are engineered to last.
            </p>
          </div>

          <div className="grid gap-y-8 mmobile:gap-y-11 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-4 lg:gap-x-4 xl:grid-cols-4">
            <div className="relative h-auto">
              <img
                src={Trailers}
                alt=""
                className="h-[300px] w-full object-cover rounded-[12px] lg:h-[500px]"
              />
              <div className="absolute bottom-3 left-0 p-2 ml-5">
                <h1 className="font-manropebold text-white text-[30px] sm:text-[35px] lg:text-[40px]">
                  Trailers
                </h1>
                <span className="font-manropebold text-white text-[20px]">
                  See More
                </span>
              </div>
            </div>
            <div className="relative h-auto">
              <img
                src={trucks_decks}
                alt=""
                className="h-[300px] w-full object-cover rounded-[12px] lg:h-[500px]"
              />
              <div className="absolute bottom-3 left-0 p-2 ml-5">
                <h1 className="font-manropebold text-white text-[30px] sm:text-[35px] lg:text-[40px]">
                  Truck Decks
                </h1>
                <span className="font-manropebold text-white text-[20px]">
                  See More
                </span>
              </div>
            </div>
            <div className="relative h-auto">
              <img
                src={Boats}
                alt=""
                className="h-[300px] w-full object-cover rounded-[12px] lg:h-[500px]"
              />
              <div className="absolute bottom-3 left-0 p-2 ml-5">
                <h1 className="font-manropebold text-white text-[30px] sm:text-[35px] lg:text-[40px]">
                  Boats
                </h1>
                <span className="font-manropebold text-white text-[20px]">
                  See More
                </span>
              </div>
            </div>
            <div className="relative h-auto">
              <img
                src={docks_hoist}
                alt=""
                className="h-[300px] w-full object-cover rounded-[12px] lg:h-[500px]"
              />
              <div className="absolute bottom-3 left-0 p-2 ml-5">
                <h1 className="font-manropebold text-white text-[30px] sm:text-[35px] lg:text-[40px]">
                  Docks + Hoists
                </h1>
                <span className="font-manropebold text-white text-[20px]">
                  See More
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="products-third-section">
        <div id="section-one">
          <div id="title">
            <ul>
              <li className="inline-block" style={{ marginRight: "15px" }}>
                <img src={Rectangle2} alt="" width={17} height={17} />
              </li>
              <li className="inline-block">
                <p
                  style={{
                    fontSize: "17px",
                    fontFamily: "OpenSans-ExtraBold",
                    letterSpacing: "3px",
                  }}
                >
                  SHOP PARTS
                </p>
              </li>
            </ul>
          </div>
          <div id="location">
            <h1>Check out our wide selection of parts!</h1>
            <div>
              <a href="#" className="text-white" id="shop-canada">
                Shop Canada{" "}
                <img
                  src={canadaflagIcon}
                  alt=""
                  className="inline"
                  style={{ marginLeft: "18px" }}
                />
              </a>
              <a href="#" className="text-white" id="shop-canada">
                Shop USA{" "}
                <img
                  src={united_states}
                  alt=""
                  className="inline"
                  style={{ marginLeft: "18px" }}
                />
              </a>
            </div>
          </div>

          <div className="latest-news">
            <div>
              <ul>
                <li style={{ marginRight: "15px" }}>
                  <img src={Rectangle2} alt="" />
                </li>
                <li>
                  <p>LATEST NEWS</p>
                </li>
              </ul>
              <h1 className="text-white">
                Be first to hear about new products, tips, <br />
                and more.
              </h1>
              <a href="#" className="text-white">
                Sign Up
              </a>
            </div>
          </div>

          <div className="shop-now-section">
            <div id="preview-img">
              <img src={Marlonize} alt="" />
            </div>
            <div id="text">
              <div>
                <h1>Marlonize yourself.</h1>
                <p>
                  Everything you need for your outdoor adventures. Look no
                  further than our <br />
                  Marlon merchandise, your ultimate companion for all things
                  adventure!
                </p>
                <a href="#" className="text-white">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section
        className="
          products-keep-up-to-date
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
              <p className="text-white font-openextrabold tracking-[3px] text-[17px] md:text-[19px]">
                KEEP UP-TO-DATE
              </p>
            </li>
          </ul>

          <h1
            className="text-white text-[40px] font-manropebold mb-5 sm:text-[50px] sm:mb-7 md:text-[60px] md:mb-7 lg:hidden"
            style={{ lineHeight: "1.1" }}
          >
            The latest product news and updates.
          </h1>

          <h1
            className="hidden lg:block lg:text-white lg:font-manropebold lg:mb-10 lg:text-[75px] xl:text-[60px]"
            style={{ lineHeight: "1.1" }}
          >
            The latest <br /> product <br /> news and updates.
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
              <img
                src={top10Docks}
                alt=""
                className="w-full object-fill rounded-t-2xl"
              />
            </div>
            <div className="p-5 sm:p-8 md:p-10">
              <h2 className="font-manropebold text-[27px] mb-5">
                Top 10 Affordable Docks
              </h2>
              <p className="font-manropemedium text-[20px] mb-5 sm:mb-8">
                Lorem ipsum dolor sit amet consectetur. Quisque scelerisque
                turpis elit vitae in vulputate imperdiet. Iaculis nisl in in
                dolor gravida. Duis quis laoreet quam suspendis.
              </p>
              <a
                href="#"
                className="text-white font-manropemedium text-center bg-[#3d3d3d] text-[17px] p-3 rounded-xl sm:py-4 sm:px-7 md:py-5 md:px-10 md:text-[20px]"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-md">
            <div>
              <img
                src={off30truckdecks}
                alt=""
                className="w-full object-fill rounded-t-2xl"
              />
            </div>
            <div className="p-5 sm:p-8 md:p-10">
              <h2 className="font-manropebold text-[27px] mb-5">
                30% Off Truck Decks
              </h2>
              <p className="font-manropemedium text-[20px] mb-5 sm:mb-8">
                Lorem ipsum dolor sit amet consectetur. Quisque scelerisque
                turpis elit vitae in vulputate imperdiet. Iaculis nisl in in
                dolor gravida. Duis quis laoreet quam suspendis.
              </p>
              <a
                href="#"
                className="text-white font-manropemedium text-center bg-[#3d3d3d] text-[17px] p-3 rounded-xl sm:py-4 sm:px-7 md:py-5 md:px-10 md:text-[20px]"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>

      <FooterMobileContainer />
      <FooterContainer />
    </>
  );
};

export default ProductsView;
