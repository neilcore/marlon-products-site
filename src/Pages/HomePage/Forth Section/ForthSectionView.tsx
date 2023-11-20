import React from "react";

import "./fourthsection.css";

import SellingProducts from "./SellingProducts"
import CustomerReview from "./CustomerReview"

interface Props {
  slides: any[],
}


const ForthSectionView = ({
  slides,
}: Props) => {
  return (
    <>
      <div className="main relative px-3.5 py-10 lg:px-16 lg:py-24 xl:px-24 xl:py-40">
        <SellingProducts/>
        <CustomerReview slides={slides} />
      </div>
    </>
  );
};

export default ForthSectionView;
