import React from "react";

import docks_hoist from "../../../assets/images/products/docks_hoist.jpg"
import Trailers from "../../../assets/images/products/Trailers.jpg"
import trucks_decks from "../../../assets/images/products/trucks_decks.jpg"
import Boats from "../../../assets/images/products/Boats.jpg"

const MainPage = () => {
  return (
    <>
      <div id="title-and-description" style={{ marginBottom: "90px" }}>
        <div style={{ flex: "50%" }} id="title-and-description-catchphrase">
          <h1 className="text-7xl" style={{ fontFamily: "Manrope-Bold" }}>
            We've got you covered.
          </h1>
        </div>
        <div style={{ flex: "50%" }}>
          <p style={{ fontFamily: "Manrope-Medium" }}>
            Our boats, trailers, docks, hoists, truck decks and accessories are{" "}
            <br />
            engineered to work hard and play harder, just like we do. We
            constantly <br />
            update our products based on your feedback, and are always
            innovating <br />
            new ways to make the good life, well, better and sustainable.
          </p>
        </div>
      </div>

      <div className="title-and-description-service">
        <div
          className="service-preview relative"
          style={{ flex: "25%", height: "450px" }}
        >
          <img
            src={Trailers}
            alt="trailers"
            style={{ borderRadius: "12px", height: "450px" }}
          />

          <div
            style={{
              lineHeight: "90%",
              fontSize: "45px",
              fontFamily: "Manrope-Bold",
            }}
            className="absolute bottom-7 left-0 p-2 ml-5 text-white"
          >
            Products <br />
            <span style={{ fontSize: "23px" }}>See More</span>
          </div>
        </div>
        <div
          className="service-preview relative"
          style={{ flex: "25%", height: "450px" }}
        >
          <img
            src={docks_hoist}
            alt="trailers"
            style={{ borderRadius: "12px", height: "450px" }}
          />

          <div
            style={{
              lineHeight: "90%",
              fontSize: "45px",
              fontFamily: "Manrope-Bold",
            }}
            className="absolute bottom-7 left-0 p-2 ml-5 text-white"
          >
            Find a Dealer <br />
            <span style={{ fontSize: "23px" }}>See More</span>
          </div>
        </div>
        <div
          className="service-preview relative"
          style={{ flex: "25%", height: "450px" }}
        >
          <img
            src={trucks_decks}
            alt="trailers"
            style={{ borderRadius: "12px", height: "450px" }}
          />

          <div
            style={{
              lineHeight: "90%",
              fontSize: "45px",
              fontFamily: "Manrope-Bold",
            }}
            className="absolute bottom-7 left-0 p-2 ml-5 text-white"
          >
            Become a <br />
            Dealer <br />
            <span style={{ fontSize: "23px" }}>See More</span>
          </div>
        </div>
        <div
          className="service-preview relative"
          style={{ flex: "25%", height: "450px" }}
        >
          <img
            src={Boats}
            alt="trailers"
            style={{ borderRadius: "12px", height: "450px" }}
          />

          <div
            style={{
              lineHeight: "90%",
              fontSize: "45px",
              fontFamily: "Manrope-Bold",
            }}
            className="absolute bottom-7 left-0 p-2 ml-5 text-white"
          >
            Marlon Gear <br />
            <span style={{ fontSize: "23px" }}>See More</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
