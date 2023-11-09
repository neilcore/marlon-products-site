import React from 'react'
import footer_map from "../../assets/images/home page/Footer Map.png"
import marlonlogowhite from "../../assets/images/logo/marlonlogowhite.png"
import CertificationIcons from "../../assets/images/icons/Certification Icons.svg"

import facebook_icon from "../../assets/images/icons/social-media/white icons/icon _Facebook F icon_.svg"
import instagram_icon from "../../assets/images/icons/social-media/white icons/icon _instagram icon_.svg";
import threads from "../../assets/images/icons/social-media/white icons/threads.svg";
import youtube_icon from "../../assets/images/icons/social-media/white icons/icon _youtube icon_.svg";
import linkedin_icon from "../../assets/images/icons/social-media/white icons/icon _linkedin_.svg";
import icon_tiktok from "../../assets/images/icons/social-media/white icons/icon _tiktok_.svg";

import nextArrow from "../../assets/images/icons/nextArrow.png"

import "./footer.css"

const FooterView = () => {
  return (
    <>
        {/* mobile & tablet view */}
        <section className='footer-section h-full relative lg:hidden'>
            <div className='h-[700px]'>
                <h1 className='text-center font-manropebold text-[35px] py-12'>Our locations.</h1>
                <div className='bg-yellow-500 h-[551px]'>
                    <img src={footer_map} alt="" className='object-cover h-full' />
                </div>
            </div>
            <div className='relative bg-[#3d3d3d] h-full px-6 pt-32 pb-8 sm:px-10'>
                <div className='mb-5'>
                    <h1 className='text-white text-start font-openregular text-[30px] mb-4'>BC Head Office</h1>
                    <hr style={{"border": "1px solid white"}} />
                </div>
                <div className='mb-5'>
                    <h1 className='text-white text-start font-openregular text-[30px] mb-4'>Alberta</h1>
                    <hr style={{"border": "1px solid white"}} />
                </div>
                <div className='mb-5'>
                    <h1 className='text-white text-start font-openregular text-[30px] mb-4'>Manitoba</h1>
                    <hr style={{"border": "1px solid white"}} />
                </div>
                <div className='mb-5'>
                    <h1 className='text-white text-start font-openregular text-[30px] mb-4'>Washington</h1>
                    <hr style={{"border": "1px solid white"}} />
                </div>
                <div>
                    <h1 className='text-white text-start font-openregular text-[30px] mb-4'>California</h1>
                </div>
            </div>

            <div
                className='
                bg-[#4b4b4b] absolute rounded-xl z-3 p-7 top-[520px] left-[5px] text-white mmobile:p-9 mmobile:left-[23px]
                sm:w-[600px] sm:h-[400px] sm:top-[370px]
                '
            >
                <h2 className='font-manropebold text-[22px] text-white text-start mb-5 sm:text-[40px]'>BC Head Office</h2>
                <div className='mb-5'>
                    <p className='text-start text-white font-manropesemibold text-[20px] sm:text-[30px]'>Hours</p>
                    <p className='text-white text-start font-manroperegular text-[17px] sm:text-[25px]'>Monday to Friday | 8:30AM - 5PM</p>
                </div>
                <div>
                    <p className='text-start text-white font-manropesemibold text-[20px] sm:text-[30px]'>Phone</p>
                    <p className='text-white text-start font-manroperegular text-[17px] sm:text-[25px]'>1-800-663-7367</p>
                    <p className='text-white text-start font-manroperegular text-[17px] sm:text-[25px]'>1-604-792-9411</p>
                </div>
            </div>


            <div className='relative px-6 py-12 grid gap-y-7 sm:px-10'>
                <div className='flex justify-center'>
                    <img src={marlonlogowhite} alt="" className='text-center' />
                </div>
                <hr style={{"border": "1px solid white"}} />
                <h1 className='text-start text-[#bbbbbb] font-opensemibold text-[27px]'>
                    Our insights to your inbox.
                </h1>
                <div>
                    <div id="input-container" className="flex w-full mb-5" style={{"marginRight": "15px"}}>
                        <input className="input-field w-full text-[18px] p-5 pl-3.5 rounded-[13px] outline-none" type="text" placeholder="Name:" />
                    </div>
                    <div className='flex flex-row justify-between'>
                        <div id="input-container" className="flex w-full" style={{"marginRight": "15px"}}>
                            <div id="input-container" className="flex w-full">
                                <input className="input-field w-full text-[18px] p-5 pl-3.5 rounded-[13px] outline-none" type="email" placeholder="Email:" />
                            </div>
                        </div>
                        <img src={nextArrow} alt="" className='bg-white p-3.5 rounded-[11px] w-[65px] h-[65px]' />
                    </div>
                </div>
                <h1 className='text-start text-[#bbbbbb] font-opensemibold text-[27px]'>
                    Our certifications.
                </h1>
                <img src={CertificationIcons} alt="marlon-certifications" width={200} height={200} />
                <hr style={{"border": "1px solid white"}} />
                <div className='flex flex-row justify-between mb-8 sm:justify-start'>
                    <a href="#" title="Instagram" className='sm:mr-3.5'><img src={instagram_icon} alt="instagram-icon" className='w-[30px] h-[30px]' /></a>
                    <a href="#" title="Facebook" className='sm:mr-3.5'><img src={facebook_icon} alt="facebook-icon" className='w-[30px] h-[30px]' /></a>
                    <a href="#" title="Threads" className='sm:mr-3.5'><img src={threads} alt="threads-icon" className='w-[30px] h-[30px]' /></a>
                    <a href="#" title="Youtube" className='sm:mr-3.5'><img src={youtube_icon} alt="youtube-icon" className='w-[30px] h-[30px]' /></a>
                    <a href="#" title="LinkedIn" className='sm:mr-3.5'><img src={linkedin_icon} alt="linkedin-icon" className='w-[30px] h-[30px]' /></a>
                    <a href="#" title="Tiktok"><img src={icon_tiktok} alt="tiktok-icon" /></a>
                </div>
                <p className='text-white font-manropemedium text-[20px]'>&copy; 2023 Marlon Products</p>
            </div>
        </section>
    </>
  )
}

export default FooterView