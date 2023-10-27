import React from "react";

import Rectangle2 from "../../../assets/images/icons/Rectangle2.svg";
import backArrow from "../../../assets/images/icons/backArrow.png"
import nextArrow from "../../../assets/images/icons/nextArrow.png"

import default_profile from "../../../assets/images/profiles/default.png"

const CustomerReview = () => {
  return (
    <>
      <div className="text-center flex flex-col relative">
        {/* bg-amber-600 */}
        <div id="customer-review-title">
          {/* className="bg-lime-300" */}
          <h1>What our customer say.</h1>
        </div>
        <div className="carousel flex justify-between">
          {/* bg-red-300 */}
          <div className="flex items-center" id="arrow-back">
            <div
              className="text-start bg-white"
              style={{
                width: "auto",
                height: "110px",
                padding: "30px",
                borderRadius: "15px",
              }}
            >
              <a href="#">
                <img src={backArrow} alt="" width={55} height={55} />
              </a>
            </div>
          </div>
          <div id="customer-review-carousel">
            <fieldset className="bg-white" style={{ borderRadius: "15px" }}>
              <legend>
                <img
                  src={default_profile}
                  alt="Avatar"
                  style={{ width: "150px", borderRadius: "50%" }}
                />
              </legend>
              <div style={{ padding: "40px" }}>
                <p
                  style={{
                    fontFamily: "Manrope-Medium",
                    fontSize: "22px",
                    marginBottom: "25px",
                  }}
                  className="text-start"
                >
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
                    <li
                      className="inline-block"
                      style={{ marginRight: "10px" }}
                    >
                      <img src={Rectangle2} alt="" width={17} height={17} />
                    </li>
                    <li className="inline-block">
                      <p
                        style={{
                          fontSize: "24px",
                          fontFamily: "Manrope-Medium",
                        }}
                      >
                        Denise Sandlers
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </fieldset>

            {/* mobile-view-arrows --- display: none by default --- activated only in mobile view */}
            <div id="mobile-view-arrows">
              <div
                className="bg-white"
                style={{ padding: "30px", borderRadius: "15px" }}
              >
                <a href="#">
                  <img src={backArrow} alt="" width={55} height={55} />
                </a>
              </div>
              <div
                className="bg-white"
                style={{ padding: "30px", borderRadius: "15px" }}
              >
                <a href="#">
                  <img src={nextArrow} alt="" width={55} height={55} />
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center" id="arrow-next">
            <div
              className="text-end bg-white"
              style={{
                width: "auto",
                height: "110px",
                padding: "30px",
                borderRadius: "15px",
              }}
            >
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
