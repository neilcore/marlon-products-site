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
      <div className="bg-[#ececec] w-16 mt-48" style={{"borderRadius": "0px 15px 15px 0px"}}>
        <a href="#" title="Instagram">
          <img
            src={instagram_icon}
            alt="instagram-icon"
            id="sidebar-social-media-icons"
            className="block text-center p-4 text-[#848484] w-[60px] h-[60px]"
          />
        </a>
        <a href="#" title="Facebook">
          <img
            src={facebook_icon}
            alt="facebook-icon"
            id="sidebar-social-media-icons"
            className="block text-center p-4 text-[#848484] w-[60px] h-[60px]"
          />
        </a>
        <a href="#" title="LinkedIn">
          <img
            src={linkedin_icon}
            alt="linkedin-icon"
            id="sidebar-social-media-icons"
            className="block text-center p-4 text-[#848484] w-[60px] h-[60px]"
          />
        </a>
        <a href="#" title="Tiktok">
          <img
            src={icon_tiktok}
            alt="tiktok-icon"
            id="sidebar-social-media-icons"
            className="block text-center p-4 text-[#848484] w-[60px] h-[60px]"
          />
        </a>
        <a href="#" title="Threads">
          <img
            src={threads}
            alt="threads-icon"
            id="sidebar-social-media-icons"
            className="block text-center p-4 text-[#848484] w-[60px] h-[60px]"
          />
        </a>
        <a href="#" title="Youtube">
          <img
            src={youtube_icon}
            alt="youtube-icon"
            id="sidebar-social-media-icons"
            className="block text-center p-4 text-[#848484] w-[60px] h-[60px]"
          />
        </a>
      </div>
    </>
  );
};

export default SocialMediaSideBar;
