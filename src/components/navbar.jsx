import React from "react";
import logo from "../images/logo.png";

const navbar = () => {
  return (
    <nav
      className="d-flex justify-content-between align-items-center"
      style={{ backgroundColor: "#703b09" }}
    >
      <div className="bg-white rounded-3 mx-3 my-1">
        <img
          src={logo}
          alt="burger logo"
          style={{ height: "40px", width: "60px" }}
          className="py-1 px-1"
        />
      </div>

      <div className="mx-4">
        <a className="mx-2 text-white text-decoration-none" href="/">
          Burger Builder
        </a>
        <a className="mx-2 text-white text-decoration-none" href="/">
          Orders
        </a>
        <a className="mx-2 text-white text-decoration-none" href="/">
          Log Out
        </a>
      </div>
    </nav>
  );
};

export default navbar;
