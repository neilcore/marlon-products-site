import React from "react";

import "./fifthsection.css";

import marlonLOGOBLACK from "../../../assets/images/logo/marlonLOGOBLACK.svg"
import karavan from "../../../assets/images/logo/karavan.svg"
import karavan_logo from "../../../assets/images/logo/Karavan logo.png"
import super_clamp from "../../../assets/images/logo/superclamp_1 1.png"
import high_field from "../../../assets/images/logo/Highfield-Logo-2021 1.png"
import shore_master from "../../../assets/images/logo/ShoreMaster-Blue-Logo 1.jpg"

const FifthSectionView = () => {
  return (
    <>
      <div className="fifth-section-main">
        {/* bg-yellow-500 */}
        <div id="fifth-section-title" className="text-center">
          {/* bg-violet-400 */}
          <p>The brands we worked with.</p>
        </div>

        <div className="fifth-section-brands">
          {/* bg-stone-300 */}
          <div className="fifth-section-brands-brand">
            {/* <img src={brand5} alt="" width={150} height={150} /> */}
            <img src={super_clamp} width={150} height={150} alt="" />
          </div>
          <div className="fifth-section-brands-brand">
            {/* <img src={karavan} alt="" width={230} height={230} /> */}
            <img src={karavan_logo} width={230} height={230} alt="" />
          </div>
          <div className="fifth-section-brands-brand">
            <img
              src={marlonLOGOBLACK}
              alt=""
              className="fifth-section-brands-marlon-brand-center"
              height={450}
              width={450}
            />
          </div>
          <div className="fifth-section-brands-brand">
            {/* <img src={brand5} alt="" width={230} height={230} /> */}
            <img src={high_field} width={230} height={230} alt="" />
          </div>
          <div className="fifth-section-brands-brand">
            {/* <img src={brand3} alt="" width={150} height={150} /> */}
            <img src={shore_master} width={150} height={150} alt="" />
          </div>
        </div>

        {/* for mobile view ==== display: none by default */}
        <div className="fifth-section-mobile-view">
          {/* <div>
                <img src={marlonLOGOBLACK} alt="" height={260} width={260} />
            </div> */}
          <div style={{ marginBottom: "30px" }}>
            <img src={super_clamp} alt="" height={150} width={150} />
          </div>
          <div>
            {/* <img src={karavan} alt="" height={260} width={260} /> */}
            <img src={karavan} alt="" height={200} width={200} />
          </div>
          <div>
            <img src={marlonLOGOBLACK} alt="" height={260} width={260} />
          </div>
          <div>
            {/* <img src={brand5} alt="" height={260} width={260} /> */}
            <img src={high_field} alt="" height={200} width={200} />
          </div>
          <div style={{ marginBottom: "30px" }}>
            {/* <img src={brand3} alt="" height={260} width={260} /> */}
            <img src={shore_master} alt="" height={150} width={150} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FifthSectionView;
