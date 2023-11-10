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

import MenuView from "../Menu/MenuView";
import MenuMobileView from "../Menu/MenuMobileView";

import FooterContainer from "../Footer/FooterContainer";

import MenuContainer from "../Menu/MenuContainer"

const ProductsView = () => {
  return (
    <>
      <section className="products-first-section h-screen relative">
        {/* products-first-section */}

        {/* <div id="products-computer-view-menu" className="relative">
          <MenuView />
        </div> */}
        <MenuContainer/>

        {/* <div id="products-mobile-view-menu">
          <MenuMobileView />
        </div> */}

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

      <div className="products-second-section">
        {/* bg-red-200 */}
        <div className="title-and-description">
          {/* bg-red-400 */}
          <div id="text-one">
            <ul className="text-start">
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
                  PRODUCTS
                </p>
              </li>
            </ul>
          </div>
          <div id="text-two">
            <div id="catchphrase">
              <h1>
                Products designed to <br />
                endure the elements.
              </h1>
            </div>
            <div id="description">
              <p style={{ marginTop: "10px" }}>
                We build and representquality products that make the outdoors
                more fun. <br />
                Whether your kind of fun is on land or water, we ve got you
                covered. Our boats, <br />
                trailers, docks, hoists, truck decks and accessories are
                engineered to last. <br />
              </p>
            </div>
          </div>
        </div>
        <div className="preview-images">
          {/* bg-orange-100 */}
          <div className="relative">
            <img src={Trailers} alt="trailer" />
            <div className="p-2 ml-5 text-white" id="text">
              Products <br />
              <span>See More</span>
            </div>
          </div>

          <div className="relative">
            <img src={trucks_decks} alt="trailer" />
            <div className="p-2 ml-5 text-white" id="text">
              Truck Decks <br />
              <span>See More</span>
            </div>
          </div>

          <div className="relative">
            <img src={Boats} alt="trailer" />
            <div className="p-2 ml-5 text-white" id="text">
              Boats <br />
              <span>See More</span>
            </div>
          </div>

          <div className="relative">
            <img src={docks_hoist} alt="trailer" />
            <div className="p-2 ml-5 text-white" id="text">
              Docks + Hoists <br />
              <span>See More</span>
            </div>
          </div>
        </div>
      </div>

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

      <div className="products-keep-up-to-date">
        <div className="text">
          <div className="mb-6">
            <ul className="text-start">
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
                  className="text-white"
                >
                  KEEP UP-TO-DATE
                </p>
              </li>
            </ul>
          </div>
          <div className="catchphrase">
            <h1 className="text-white">
              The latest <br />
              product <br />
              news and <br />
              updates. <br />
            </h1>
          </div>
          <div className="mb-6" id="btn">
            <a href="#" className="text-white">
              View All
            </a>
          </div>
        </div>
        <div className="preview-img">
          <div id="img" className="bg-white">
            <div>
              <img src={top10Docks} alt="" />
            </div>
            <div id="description">
              <h2>Top 10 Affordable Docks</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Quisque scelerisque
                turpis elit vitae in vulputate imperdiet. Iaculis nisl in in
                dolor gravida. Duis quis laoreet quam suspendis.
              </p>
              <a href="#" className="text-white">
                Read More
              </a>
            </div>
          </div>
          <div id="img" className="bg-white">
            <div>
              <img src={off30truckdecks} alt="" />
            </div>
            <div id="description">
              <h2>30% OFF Truck Decks!</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Quisque scelerisque
                turpis elit vitae in vulputate imperdiet. Iaculis nisl in in
                dolor gravida. Duis quis laoreet quam suspendis.
              </p>
              <a href="#" className="text-white">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>

      <FooterContainer />
    </>
  );
};

export default ProductsView;
