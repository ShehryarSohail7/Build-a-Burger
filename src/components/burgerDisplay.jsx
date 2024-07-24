import React from "react";
import topbun from "../images/top_bun.png";
import bottombun from "../images/bottom_bun.png";

const BurgerDisplay = (props) => {
  return (
    <div className="d-flex justify-content-center">
      <div
        className=" col-4 d-flex flex-column align-items-center mt-3"
        style={{ overflow: "scroll", height: "500px", width: "650px" }}
      >
        <img src={topbun} alt="top bun" style={{ height: "115px" }} />

        {/* <p>Please select ingredients.</p> */}
        {4.0 + props.salad + props.chicken + props.cheese + props.meat ===
        4.0 ? (
          <b>
            <p>Please select ingredients.</p>
          </b>
        ) : (
          <div></div>
        )}
        {/* <img src={saladimage} alt="salad piece" style={{ width: "530px" }} /> */}
        {props.saladArr}
        {props.chickenArr}
        {props.cheeseArr}
        {props.meatArr}

        <img src={bottombun} alt="bottom bun" style={{ height: "79px" }} />
      </div>
    </div>
  );
};

export default BurgerDisplay;
