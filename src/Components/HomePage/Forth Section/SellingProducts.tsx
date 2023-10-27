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
      <Space
        direction="vertical"
        size={"large"}
        style={{
          display: "flex",
          flexDirection: "column",
          height: "auto",
          marginBottom: "9%",
        }}
        className="ant-spacing relative"
      >
        {/* bg-red-600 */}
        <div>
          <div>
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
                  BEST SELLERS
                </p>
              </li>
            </ul>
          </div>
          <div id="catch-prase">
            <h1>
              Elevate your leisure with the hottest <br />
              recreational products of the year.
            </h1>
          </div>
        </div>

        <div className="products-preview">
          <div className="products-img relative">
            <img src={pontoon_boats} alt="" />
            <div
              className="absolute bottom-7 left-0 p-2 ml-5 text-white"
              id="products-img-description"
            >
              Pontoon Boats <br />{" "}
              <span>
                <a href="#">See More</a>
              </span>
            </div>
          </div>
          <div className="products-img relative">
            <img src={welded_boats} alt="" />
            <div
              className="absolute bottom-7 left-0 p-2 ml-5 text-white"
              id="products-img-description"
            >
              Welded Boats <br />{" "}
              <span>
                <a href="#">See More</a>
              </span>
            </div>
          </div>
          <div className="products-img relative">
            <img src={TruckDecks} alt="" />
            <div
              className="absolute bottom-7 left-0 p-2 ml-5 text-white"
              id="products-img-description"
            >
              Truck Decks <br />{" "}
              <span>
                <a href="#">See More</a>
              </span>
            </div>
          </div>
        </div>

        <div id="all-products-link">
          <a href="#" className="text-white">
            View All Products
          </a>
        </div>
      </Space>
    </>
  );
};

export default SellingProducts;
