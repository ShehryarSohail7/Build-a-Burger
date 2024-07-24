import React from "react";
import "./css/popup.css";

const Popup = (props) => {
  console.log("popup tiggered");
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        {props.children}
        <button
          className="p-0 border border-1 border-white bg-white me-5"
          style={{
            fontSize: "13px",
            color: "#944317",
          }}
          onClick={() => {
            props.setPopUpvalue(false);
          }}
        >
          <b>CANCEL</b>
        </button>
        <button
          className="p-0 border border-1 border-white bg-white"
          style={{
            fontSize: "13px",
            color: "#5c9210",
          }}
          onClick={() => {
            props.setPopUpvalue(false);
            props.saveorder();
          }}
        >
          <b>CONTINUE</b>
        </button>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popup;
