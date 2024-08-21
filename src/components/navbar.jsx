import React, { useState } from "react";
import logo from "../images/logo.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../components/css/navbar.css";

const Navbar = (props) => {
  // Use States
  const current_location = useLocation();
  const navigate = useNavigate();
  console.log("current location", current_location.pathname);

  // Functions
  const Handle_Logout = () => {
    props.userSetter(null); // making the active user null because we are logging out
    console.log("logging out");
    navigate("/");
  };

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
        <Link
          className={`custom-link ${
            current_location.pathname === "/" ? "link-click" : ""
          } px-2 text-white text-decoration-none`}
          to="/"
        >
          Burger Builder
        </Link>
        <Link
          className={`custom-link ${
            current_location.pathname === "/login" ? "link-click" : ""
          } px-2 text-white text-decoration-none d-${
            props.activeUser === null ? "display" : "none"
          }`}
          to="/login"
        >
          Sign In
        </Link>
        <Link
          className={`custom-link ${
            current_location.pathname === "/orders" ? "link-click" : ""
          } px-2 text-white text-decoration-none d-${
            props.activeUser === null ? "none" : "display"
          }`}
          to="/orders"
        >
          Orders
        </Link>
        <div
          className={`custom-link px-2 text-white text-decoration-none d-inline d-${
            props.activeUser === null ? "none" : "display"
          }`}
          onClick={Handle_Logout}
        >
          Log Out
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
