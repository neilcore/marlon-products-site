import React from 'react'

import FirstSectionContainer from "./First Section/FirstSectionContainer"
import SecondSectionContainer from "./Second Section/SecondSectionContainer"
import ThirdSectionContainer from "./Third Section/ThirdSectionContainer"
import ForthSectionContainer from "./Forth Section/ForthSectionContainer"
import FifthSectionContainer from "./Fifth Section/FifthSectionContainer"
import SixContainer from "./Six Section/SixContainer"
import FooterContainer from "../Footer/FooterContainer"

function HomePage() {
  return (
    <>
      <FirstSectionContainer/>
      <SecondSectionContainer/>
      <ThirdSectionContainer/>
      <ForthSectionContainer/>
      <FifthSectionContainer/>
      <SixContainer/>
      <FooterContainer/>
    </>
  )
}

export default HomePage