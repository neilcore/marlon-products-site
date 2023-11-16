import React from "react";

// import "./fifthsection.css";

import marlonLOGOBLACK from "../../../assets/images/logo/marlonLOGOBLACK.svg"
import karavan from "../../../assets/images/logo/karavan.svg"
import karavan_logo from "../../../assets/images/logo/Karavan logo.png"
import super_clamp from "../../../assets/images/logo/superclamp_1 1.png"
import high_field from "../../../assets/images/logo/Highfield-Logo-2021 1.png"
import shore_master from "../../../assets/images/logo/ShoreMaster-Blue-Logo 1.jpg"

const FifthSectionView = () => {
  return (
    <>
      <section className="h-full px-3.5 py-14 pb-20 md:py-36 xl:py-56">
        <h1 className="text-center font-manropemedium text-[25px] pb-14 sm:text-[30px] md:text-[35px]">The brands we worked with.</h1>
        {/* pt-16 */}
        <div className="grid gap-y-12 lg:flex lg:flex-row lg:justify-between">
          <div className="lg:flex lg:justify-center lg:items-center">
            <img src={super_clamp} width={150} height={150} alt="" className="text-center mr-auto ml-auto" />
          </div>
          <div className="lg:flex lg:justify-center lg:items-center">
            <img src={karavan_logo} width={230} height={230} alt="" className="text-center mr-auto ml-auto" />
          </div>
          <div className="lg:flex lg:justify-center lg:items-center">
            <img
              src={marlonLOGOBLACK}
              alt=""
              className="text-center mr-auto ml-auto"
              height={450}
              width={450}
            />
          </div>
          <div className="lg:flex lg:justify-center lg:items-center">
            <img src={high_field} width={230} height={230} alt="" className="text-center mr-auto ml-auto" />
          </div>
          <div className="lg:flex lg:justify-center lg:items-center">
            <img src={shore_master} width={150} height={150} alt="" className="text-center mr-auto ml-auto" />
          </div>
        </div>
      </section>
    </>
  );
};

export default FifthSectionView;
