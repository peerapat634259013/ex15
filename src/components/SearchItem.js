import React from "react";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://plus.unsplash.com/premium_photo-1678286771657-cf22aa97faf0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Appartment</h1>
        <space className="siDistance">500m from center</space>
        <span className="sitaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartments with Air conditioning
        </span>
        <span className="siFeatures">
          Entire Studio - 1 bathroom - 21 square meters 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="CancelOpSubtitle">
          You can cancel later, so lock in ths great price today !
        </span>
      </div>

      <div className="siDetails">
        <div className="siRating">
          <span> Excellent </span>
          <button> 8.9 </button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$112</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};
export default SearchItem;