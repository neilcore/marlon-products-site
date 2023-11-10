import React from "react";

import marlonlogowhite from "../../../assets/images/logo/marlonlogowhite.png";
import facebook_icon from "../../../assets/images/icons/social-media/white icons/icon _Facebook F icon_.svg"
import instagram_icon from "../../../assets/images/icons/social-media/white icons/icon _instagram icon_.svg";
import threads from "../../../assets/images/icons/social-media/white icons/threads.svg";
import youtube_icon from "../../../assets/images/icons/social-media/white icons/icon _youtube icon_.svg";
import linkedin_icon from "../../../assets/images/icons/social-media/white icons/icon _linkedin_.svg";
import icon_tiktok from "../../../assets/images/icons/social-media/white icons/icon _tiktok_.svg";
import nextArrow from "../../../assets/images/icons/nextArrow.png"
import CertificationIcons from "../../../assets/images/icons/Certification Icons.svg"

const Certifications = () => {
  return (
    <>
      <div className="marlon-certifications-bottom">
        {/* bg-lime-200 */}
        <div className="flex-vertical">
          <div>
            <div className="certifications-section">
              <div className="certificate-social-media-icons text-start" id="left">
                <div style={{ marginBottom: "50px" }}>
                    {/* className="certificate-social-media-icons" */}
                  <img src={marlonlogowhite} alt="" />
                  <h3>Our Certifications</h3>
                  <img src={CertificationIcons} alt="marlon-certifications" width={250} height={250} style={{"marginBottom": "20%"}} />
                </div>
                <div className="inline-social-media-icons"> 
                {/* bg-sky-200 */}
                    <a href="#" title="Instagram"><img src={instagram_icon} alt="instagram-icon" /></a>
                    <a href="#" title="Facebook"><img src={facebook_icon} alt="facebook-icon" /></a>
                    <a href="#" title="Threads"><img src={threads} alt="threads-icon" /></a>
                    <a href="#" title="Youtube"><img src={youtube_icon} alt="youtube-icon" /></a>
                    <a href="#" title="LinkedIn"><img src={linkedin_icon} alt="linkedin-icon" /></a>
                    <a href="#" title="Tiktok"><img src={icon_tiktok} alt="tiktok-icon" /></a>
                </div>
              </div>

              <div id="right">
                <div>
                    <h3>Our insights to your inbox</h3>
                    <div className="inbox-input-fields">
                      <div id="input-container" className="flex w-full" style={{"marginRight": "15px"}}>
                        <input className="input-field w-full" type="text" placeholder="Name:" />
                      </div>
                      <div id="input-container" className="flex w-full" style={{"marginRight": "15px"}}>
                          <div id="input-container" className="flex w-full">
                            <input className="input-field w-full" type="email" placeholder="Email:" />
                          </div>
                      </div>
                      <img src={nextArrow} alt="" />
                    </div>
                </div>
              </div>
              
            </div>
            <hr style={{ border: "1px solid white" }} />
          </div>
          <div className="copyright-section">
            <p className="text-white" style={{"fontFamily": "Manrope-Medium"}}>
                &copy; 2023 Marlon Products
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Certifications;
