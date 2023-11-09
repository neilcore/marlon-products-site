import React from 'react'

import "./footer.css"

import LocationSection from "./Location/LocationSection"

const FooterView = () => {
  return (
    <>
      <div className='footer-main bg-white'>
        <LocationSection/>
      </div>
    </>
  )
}

export default FooterView