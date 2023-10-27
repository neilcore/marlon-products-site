import React from "react";

import "./sixsection.css";

import Rectangle2 from "../../../assets/images/icons/Rectangle2.svg";
import bestboats1 from "../../../assets/images/home page/bestboats1.jpg";
import bestboats2 from "../../../assets/images/home page/newBOAT2.jpg";

const SixView = () => {
  return (
    <>
      <div className="six-section-main">
        <div className="six-section-news-updates">
          {/* bg-orange-400 */}
          <div className="mb-6">
            {/* bg-lime-200 */}
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
          <div className="six-section-news-update-catchphrase mb-6">
            <h1 className="text-white">
              Latest news <br /> and updates.
            </h1>
          </div>
          <div className="six-section-news-update-view-all-btn mb-6">
            <a href="#" className="text-white">
              View All
            </a>
          </div>
        </div>
        
        <div className="six-section-img-previews h-full">
          {/* bg-orange-400 */}
          <div className="six-section-img-previews-image bg-white">
            <div>
              {/* className="bg-yellow-300" */}
              <img src={bestboats1} alt="" className="w-full object-fill" />
            </div>
            <div className="six-section-img-previews-image-text">
              {/* bg-yellow-400 */}
              <h2>Best Boats of 2023</h2>
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
          <div className="six-section-img-previews-image bg-white">
            <div>
              {/* className="bg-yellow-300" */}
              <img
                src={bestboats2}
                alt=""
                className="w-full object-fill"
                width={852}
                height={571}
              />
            </div>
            <div className="six-section-img-previews-image-text">
              {/* bg-yellow-400 */}
              <h2>Best Boats of 2023</h2>
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
    </>
  );
};

export default SixView;
