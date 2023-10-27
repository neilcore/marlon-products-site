import React from 'react'

import marlonlogowhite from "../../../../assets/images/logo/marlonlogowhite.png";
import nextArrow from "../../../../assets/images/icons/nextArrow.png"

import facebook_icon from "../../../../assets/images/icons/social-media/white icons/icon _Facebook F icon_.svg"
import instagram_icon from "../../../../assets/images/icons/social-media/white icons/icon _instagram icon_.svg";
import threads from "../../../../assets/images/icons/social-media/white icons/threads.svg";
import youtube_icon from "../../../../assets/images/icons/social-media/white icons/icon _youtube icon_.svg";
import linkedin_icon from "../../../../assets/images/icons/social-media/white icons/icon _linkedin_.svg";
import icon_tiktok from "../../../../assets/images/icons/social-media/white icons/icon _tiktok_.svg";

const MobileViewCertifications = () => {
  return (
    <>
        <div className='mobile-view-certification-inbox'>
            {/* bg-yellow-200 */}
            <div id='marlon-logo-white' className='text-center flex justify-center' style={{"marginBottom": "22px"}}>
                <img src={marlonlogowhite} alt="" className='w-full' />
            </div>
            <hr style={{"border": "1px solid white", "marginBottom": "35px"}} />
            <h2 style={{"fontFamily": "Opensans-Bold", "fontSize": "25px", "color": "#bbbbbb", "marginBottom": "17px"}} className='text-start'>
                Our insights to your inbox.
            </h2>
            <div>
                <input
                    className='w-full outline-none' type='text' placeholder='Name:'
                    style={{
                        "padding": "8px", "paddingLeft": "10px", "height": "70px", "borderRadius": "8px",
                        "marginBottom": "17px"
                    }}
                />
                <div className='flex flex-row justify-between' style={{"marginBottom": "20px"}}>
                    <div className='text-start' style={{"width": "70%"}}>
                        <input
                            className='w-full outline-none' type='text' placeholder='Email:'
                            style={{
                                "padding": "8px", "paddingLeft": "10px", "height": "70px", "borderRadius": "8px",
                                "marginBottom": "17px"
                            }}
                        />
                    </div>
                    <div style={{"width": "27%"}}>
                        <img
                            src={nextArrow} alt="" className='bg-white float-right'
                            style={{
                                "padding": "10px", "borderRadius": "10px",
                                "width": "70px", "height": "70px"
                            }}
                        />
                    </div>
                </div>
                <h2 style={{"fontFamily": "Opensans-Bold", "color": "#bbbbbb", "fontSize": "30px", "marginBottom": "20px"}} className='text-start'>
                    Our Certifications
                </h2>
                <h2 className='text-start' style={{"marginBottom": "35px"}}>CERTIFICATES HERE</h2>
                <hr style={{"border": "1px solid white", "marginBottom": "35px"}} />
                <div className='flex flex-row flex-start' style={{"marginBottom": "100px"}}>
                    <div style={{"marginRight": "17px"}}>
                        <img src={instagram_icon} alt="" style={{"width": "30px", "height": "30px"}} />
                    </div>
                    <div style={{"marginRight": "17px"}}>
                        <img src={facebook_icon} alt="" style={{"width": "30px", "height": "30px"}} />
                    </div>
                    <div style={{"marginRight": "17px"}}>
                        <img src={threads} alt="" style={{"width": "30px", "height": "30px"}} />
                    </div>
                    <div style={{"marginRight": "17px"}}>
                        <img src={youtube_icon} alt="" style={{"width": "30px", "height": "30px"}} />
                    </div>
                    <div style={{"marginRight": "17px"}}>
                        <img src={linkedin_icon} alt="" style={{"width": "30px", "height": "30px"}} />
                    </div>
                    <div style={{"marginRight": "17px"}}>
                        <img src={icon_tiktok} alt="" style={{"width": "30px", "height": "30px"}} />
                    </div>
                </div>
                <div className='text-start'>
                    <p style={{"marginBottom": "12px", "fontSize": "20px", "fontFamily": "Manrope-Medium"}} className='text-white'>&copy; 2023 Marlon Products</p>
                    <p className='text-white' style={{"fontSize": "20px", "fontFamily": "Manrope-Medium"}}>Privacy Policy</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default MobileViewCertifications