import React from "react";

import marlonlogowhite from "../../../assets/images/logo/marlonlogowhite.png";
import facebook_icon from "../../../assets/images/icons/social-media/white icons/icon _Facebook F icon_.svg"
import instagram_icon from "../../../assets/images/icons/social-media/white icons/icon _instagram icon_.svg";
import threads from "../../../assets/images/icons/social-media/white icons/threads.svg";
import youtube_icon from "../../../assets/images/icons/social-media/white icons/icon _youtube icon_.svg";
import linkedin_icon from "../../../assets/images/icons/social-media/white icons/icon _linkedin_.svg";
import icon_tiktok from "../../../assets/images/icons/social-media/white icons/icon _tiktok_.svg";
import nextArrow from "../../../assets/images/icons/nextArrow.png"

const Certifications = () => {
  return (
    <>
      <div className="marlon-certifications-bottom">
        {/* bg-lime-200 */}
        <div className="flex-vertical">
            {/* bg-cyan-200 */}
          <div>
            <div className="certifications-section">
                {/* bg-indigo-300 */}
              <div className="certificate-social-media-icons text-start" id="left">
                {/* bg-rose-950 */}
                <div style={{ marginBottom: "50px" }}>
                    {/* className="certificate-social-media-icons" */}
                  <img src={marlonlogowhite} alt="" />
                  <h3>Our Certifications</h3>
                  <p>CERTIFICATIONS HERE</p>
                </div>
                <div className="inline-social-media-icons"> 
                {/* bg-sky-200 */}
                    <a href="#" title="Instagram"><img src={instagram_icon} alt="" style={{"color": "white"}} /></a>
                    <a href="#" title="Facebook"><img src={facebook_icon} alt="" /></a>
                    <a href="#" title="Threads"><img src={threads} alt="" /></a>
                    <a href="#" title="Youtube"><img src={youtube_icon} alt="" /></a>
                    <a href="#" title="LinkedIn"><img src={linkedin_icon} alt="" /></a>
                    <a href="#" title="Tiktok"><img src={icon_tiktok} alt="" /></a>
                </div>
              </div>

              <div id="right">
                {/* className="bg-purple-500" */}
                <div>
                    {/* className="bg-sky-700" */}
                    <h3>Our insights to your inbox</h3>
                    <div className="inbox-input-fields">
                        {/* bg-teal-200 */}
                        <div id="input-container" className="flex w-full" style={{"marginRight": "15px"}}>
                            {/* bg-neutral-400 */}
                            <input className="input-field w-full" type="text" placeholder="Name:" />
                        </div>
                        <div id="input-container" className="flex w-full" style={{"marginRight": "15px"}}>
                            {/* bg-lime-300 */}
                            <div id="input-container" className="flex w-full">
                                {/* bg-neutral-400 */}
                                <input className="input-field w-full" type="email" placeholder="Email:" />
                            </div>
                        </div>
                        {/* <a href="#">
                            <img src={nextArrow} alt="" />
                        </a> */}
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
