import React from "react";

import Map from "./Map";

import Certifications from "../Footer Certifications/Certifications"
import MobileView from "./Mobile View/MobileView"
import MobileViewCertifications from "./Mobile View/MobileViewCertifications"

const LocationSection = () => {
  return (
    <>
      <div id="footer-upper">
        <div className="footer-office-section">
          <div className="locations">
            <div id="our-locations">
              <h1>Our locations.</h1>
            </div>
            <div className="location-list">
              <div className="location text-start">
                <h1
                  style={{
                    fontFamily: "OpenSans-Medium",
                    fontSize: "35px",
                    marginBottom: "17px",
                  }}
                  className="text-white"
                >
                  BC HEAD OFFICE
                </h1>
                <hr style={{ border: "1px solid white" }} />
              </div>
              <div className="location text-start">
                <h1
                  style={{
                    fontFamily: "OpenSans-Medium",
                    fontSize: "35px",
                    marginBottom: "17px",
                  }}
                  className="text-white"
                >
                  Alberta
                </h1>
                <hr style={{ border: "1px solid white" }} />
              </div>
              <div className="location text-start">
                <h1
                  style={{
                    fontFamily: "OpenSans-Medium",
                    fontSize: "35px",
                    marginBottom: "17px",
                  }}
                  className="text-white"
                >
                  Manitoba
                </h1>
                <hr style={{ border: "1px solid white" }} />
              </div>
              <div className="location text-start">
                <h1
                  style={{
                    fontFamily: "OpenSans-Medium",
                    fontSize: "35px",
                    marginBottom: "17px",
                  }}
                  className="text-white"
                >
                  Washington
                </h1>
                <hr style={{ border: "1px solid white" }} />
              </div>
              <div className="location text-start">
                <h1
                  style={{
                    fontFamily: "OpenSans-Medium",
                    fontSize: "35px",
                    marginBottom: "17px",
                  }}
                  className="text-white"
                >
                  California
                </h1>
                <hr style={{ border: "1px solid white" }} />
              </div>
            </div>
          </div>
        </div>

        <div className="footer-map-section">
          {/* bg-amber-500 */}
          <Map />
        </div>
      </div>

      {/* for mobile view */}
        {/* <MobileView/> */}
        {/* <MobileViewCertifications/> */}
      {/* for mobile view */}

      <Certifications/>
    </>
  );
};

export default LocationSection;
