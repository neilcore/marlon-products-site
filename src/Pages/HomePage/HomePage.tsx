import React from 'react'

import FirstSectionContainer from "./First Section/FirstSectionContainer"
import SecondSectionContainer from "./Second Section/SecondSectionContainer"
import ThirdSectionContainer from "./Third Section/ThirdSectionContainer"
import ForthSectionContainer from "./Forth Section/ForthSectionContainer"
import FifthSectionContainer from "./Fifth Section/FifthSectionContainer"
import SixContainer from "./Six Section/SixContainer"
// import FooterContainer from "../Footer/FooterContainer"
// import FooterMobileContainer from "../Footer/Mobile/FooterMobileContainer"
import FooterContainer from "../../Components/Footer/FooterContainer"
import FooterMobileContainer from "../../Components/Footer/Mobile/FooterMobileContainer"

function HomePage() {
  return (
    <>
      <FirstSectionContainer/>
      <SecondSectionContainer/>
      <ThirdSectionContainer/>
      <ForthSectionContainer/>
      <FifthSectionContainer/>
      <SixContainer/>
      <FooterMobileContainer/>
      <FooterContainer/>
    </>
  )
}

export default HomePage