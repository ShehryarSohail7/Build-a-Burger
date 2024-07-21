import React, { useState } from "react";
import logo from "../images/logo.png";
import { Link, useNavigate } from "react-router-dom";

const Navbar = (props) => {
  // Use States
  const [highlight_builder, SetHighlight_builder] = useState({
    paddingTop: "16px",
    paddingBottom: "11px",
    backgroundColor: "",
    fontFamily: "Arial",
    fontSize: "14px",
    borderBottom: "",
  });
  const [highlight_login, SetHighlight_login] = useState({
    paddingTop: "16px",
    paddingBottom: "11px",
    fontFamily: "Arial",
    fontSize: "14px",
    backgroundColor: "",
    borderBottom: "",
  });
  const [highlight_order, SetHighlight_order] = useState({
    paddingTop: "16px",
    paddingBottom: "11px",
    fontFamily: "Arial",
    fontSize: "14px",
    backgroundColor: "",
    borderBottom: "",
  });

  // Functions

  const Click_Highlight_builder = () => {
    SetHighlight_builder({
      paddingTop: "16px",
      paddingBottom: "11px",
      fontFamily: "Arial",
      fontSize: "14px",
      backgroundColor: "#8f5c2c",
      borderBottom: "4px solid #40a4c8",
    });
    SetHighlight_login({
      paddingTop: "16px",
      paddingBottom: "11px",
      fontFamily: "Arial",
      fontSize: "14px",
      backgroundColor: "",
      borderBottom: "",
    });
    SetHighlight_order({
      paddingTop: "16px",
      paddingBottom: "11px",
      fontFamily: "Arial",
      fontSize: "14px",
      backgroundColor: "",
      borderBottom: "",
    });
  };

  const Click_Highlight_login = () => {
    SetHighlight_login({
      paddingTop: "16px",
      paddingBottom: "11px",
      fontFamily: "Arial",
      fontSize: "14px",
      backgroundColor: "#8f5c2c",
      borderBottom: "4px solid #40a4c8",
    });
    SetHighlight_builder({
      paddingTop: "16px",
      paddingBottom: "11px",
      fontFamily: "Arial",
      fontSize: "14px",
      backgroundColor: "",
      borderBottom: "",
    });
  };

  const Click_Highlight_order = () => {
    SetHighlight_order({
      paddingTop: "16px",
      paddingBottom: "11px",
      fontFamily: "Arial",
      fontSize: "14px",
      backgroundColor: "#8f5c2c",
      borderBottom: "4px solid #40a4c8",
    });
    SetHighlight_builder({
      paddingTop: "16px",
      paddingBottom: "11px",
      fontFamily: "Arial",
      fontSize: "14px",
      backgroundColor: "",
      borderBottom: "",
    });
  };

  const navigate = useNavigate();
  const Handle_Logout = () => {
    props.userSetter(null);
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
          className="px-2 text-white text-decoration-none"
          style={highlight_builder}
          to="/"
          onClick={Click_Highlight_builder}
        >
          Burger Builder
        </Link>
        <Link
          className={`px-2 text-white text-decoration-none d-${
            props.activeUser === null ? "display" : "none"
          }`}
          to="/login"
          style={highlight_login}
          onClick={Click_Highlight_login}
        >
          Sign In
        </Link>
        <Link
          className={`px-2 text-white text-decoration-none d-${
            props.activeUser === null ? "none" : "display"
          }`}
          to="/orders"
          style={highlight_order}
          onClick={Click_Highlight_order}
        >
          Orders
        </Link>
        <button
          className={`px-2 text-white text-decoration-none  d-${
            props.activeUser === null ? "none" : "display"
          }`}
          style={{
            paddingTop: "16px",
            paddingBottom: "11px",
            fontFamily: "Arial",
            fontSize: "14px",
            backgroundColor: "",
            borderBottom: "",
            background: "none",
            border: "none",
          }}
          onClick={Handle_Logout}
        >
          Log Out
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
