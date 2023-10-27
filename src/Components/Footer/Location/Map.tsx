import React from 'react'

import footer_map from "../../../assets/images/footer/map/Footer Map.png"

const Map = () => {
  return (
    <>
        <div>
            {/* className='bg-lime-300' */}
            <img src={footer_map} alt="" className='absolute w-full' style={{"zIndex": "-1"}} />
            {/* object-cover h-full top-0 left-0 */}
            <div className='office-info text-white'>
                <h1 className='text-white'>
                    BC HEAD OFFICE
                </h1>
                <p className='text-white' id='hours'>Hours</p>
                <p className='text-white' id='hours-info'>Monday to Friday | 8:30AM - 5PM</p>
                <p className='text-white' id='phone'>Phone</p>
                <p className='text-white' id='phone-info'>1-800-663-7367</p>
                <p className='text-white' id='phone-info'>1-604-792-9411</p>
            </div>
        </div>
    </>
  )
}

export default Map