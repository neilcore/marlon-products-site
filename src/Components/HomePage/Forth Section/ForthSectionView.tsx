import React from "react";

import "./fourthsection.css";

import SellingProducts from "./SellingProducts"
import CustomerReview from "./CustomerReview"

const ForthSectionView = () => {
  return (
    <>
      <div className="main">
        <SellingProducts/>
        <CustomerReview/>
      </div>
    </>
  );
};

export default ForthSectionView;
