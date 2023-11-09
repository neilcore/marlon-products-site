import React from 'react'

import footer_map from "../../../../assets/images/home page/Footer Map.png"

const MapView = () => {
  return (
    <>
        <div className='mt-16'>
          {/* bg-amber-900 mobile-view-map-view */}
            <h1>Our locations.</h1>
            <div className='bg-red-200'>
              <img src={footer_map} alt="" />
            </div>
        </div>
    </>
  )
}

export default MapView