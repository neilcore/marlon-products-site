import React from 'react'

import LocationView from "./LocationView"
import MapView from "./MapView"

function MobileView() {
  return (
    <>
      <div className='location-map-mobile-view'>
        <MapView />
        <LocationView />
        <div className='office-hours-phone'>
          <h1 className='text-white' style={{"fontFamily": "Opensans-Bold", "fontSize": "23px", "marginBottom": "13px"}}>
            BC HEAD OFFICE
          </h1>
          <h2 className='text-white' style={{"fontFamily": "Opensans-Bold", "fontSize": "18px", "marginBottom": "5px"}}>HOURS</h2>
          <p className='text-white' style={{"fontFamily": "Opensans-Regular", "marginBottom": "13px"}}>
            Monday to Friday | 8:30AM - 5PM
          </p>
          <h2 className='text-white' style={{"fontFamily": "Opensans-Bold", "fontSize": "18px", "marginBottom": "5px"}}>PHONE</h2>
          <p className='text-white' style={{"fontFamily": "Opensans-Regular", "marginBottom": "13px"}}>
            1-800-663-7367 <br />
            1-800-663-7367
          </p>
        </div>
      </div>
    </>
  )
}

export default MobileView