import React from "react";

import "./thirdsection.css";

import Rectangle2 from "../../../assets/images/icons/Rectangle2.svg";
import VectorUp from "../../../assets/images/icons/VectorUp.png";

const ThirdSectionView = () => {
  return (
    <>
      <div
        className="third-section flex"
        style={{ backgroundColor: "#ececec" }}
      >
        <div
          style={{ width: "90px", paddingTop: "10%", paddingLeft: "8px" }}
          id="arrow-grid"
        >
          <a href="#">
            <img
              src={VectorUp}
              alt=""
              width={40}
              height={40}
              style={{ color: "#848484" }}
            />
          </a>
        </div>
        <div
          className="showcasing"
        >
          <ul className="text-center" style={{ marginBottom: "70px" }}>
            <li className="inline-block" style={{ marginRight: "15px" }}>
              <img src={Rectangle2} alt="" width={17} height={17} />
            </li>
            <li className="inline-block">
              <p
                style={{
                  fontSize: "20px",
                  fontFamily: "OpenSans-ExtraBold",
                  letterSpacing: "3px",
                }}
              >
                WHO WE ARE
              </p>
            </li>
          </ul>

          <div className="learn-more grid gap-4 grid-cols-1 grid-rows-2 text-center">
            <div id="learn-more-catchphrase">
              <h1>
                We build and represent quality products <br /> that make the
                outdoors more fun.
              </h1>
            </div>
            <div>
              {/* className="bg-red-400" */}
              <div className="mt-11">
                <a
                  href="#"
                  className="text-white"
                  style={{
                    backgroundColor: "#3d3d3d",
                    fontSize: "25px",
                    borderRadius: "10px",
                    padding: "20px 40px 20px 40px",
                    marginTop: "90px",
                  }}
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThirdSectionView;
