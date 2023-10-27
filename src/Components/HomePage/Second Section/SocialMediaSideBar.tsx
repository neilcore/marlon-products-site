import React from "react";

import facebook_icon from "../../../assets/images/icons/social-media/facebook_icon.svg"
import instagram_icon from "../../../assets/images/icons/social-media/instagram_icon.svg";
import threads from "../../../assets/images/icons/social-media/threads.svg";
import youtube_icon from "../../../assets/images/icons/social-media/youtube_icon.svg";
import linkedin_icon from "../../../assets/images/icons/social-media/linkedin_icon.svg";
import icon_tiktok from "../../../assets/images/icons/social-media/icon _tiktok_.svg";


const SocialMediaSideBar = () => {
  return (
    <>
      <div
        style={{
          borderRadius: "0px 15px 15px 0px",
          backgroundColor: "#ececec",
        }}
        className="home-page-section-2-sm-sidebar-fixed"
      >
        <a href="#" title="Instagram">
          <img
            src={instagram_icon}
            alt="instagram-icon"
            id="sidebar-social-media-icons"
          />
        </a>
        <a href="#" title="Facebook">
          <img
            src={facebook_icon}
            alt="facebook-icon"
            id="sidebar-social-media-icons"
          />
        </a>
        <a href="#" title="LinkedIn">
          <img
            src={linkedin_icon}
            alt="linkedin-icon"
            id="sidebar-social-media-icons"
          />
        </a>
        <a href="#" title="Tiktok">
          <img
            src={icon_tiktok}
            alt="tiktok-icon"
            id="sidebar-social-media-icons"
          />
        </a>
        <a href="#" title="Threads">
          <img
            src={threads}
            alt="threads-icon"
            id="sidebar-social-media-icons"
          />
        </a>
        <a href="#" title="Youtube">
          <img
            src={youtube_icon}
            alt="youtube-icon"
            id="sidebar-social-media-icons"
          />
        </a>
      </div>
    </>
  );
};

export default SocialMediaSideBar;
