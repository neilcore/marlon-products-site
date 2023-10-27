import React from 'react'

import "./footer.css"

import LocationSection from "./Location/LocationSection"

const FooterView = () => {
  return (
    <>
      <div className='footer-main bh-white'>
        {/* bg-yellow-400 */}
        <LocationSection/>
      </div>
    </>
  )
}

export default FooterView