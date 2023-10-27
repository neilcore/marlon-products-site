import React from 'react'

import footer_map from "../../../../assets/images/home page/Footer Map.png"

const MapView = () => {
  return (
    <>
        <div className='mobile-view-map-view'>
          {/* bg-amber-900 */}
            <h1>Our locations.</h1>
            <div className='bg-red-200'>
              <img src={footer_map} alt="" />
            </div>
        </div>
    </>
  )
}

export default MapView