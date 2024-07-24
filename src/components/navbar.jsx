import React, { useState } from "react";
import logo from "../images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import "../components/css/navbar.css";

const Navbar = (props) => {
  // Use States
  const [active, setActive] = useState("");

  // Functions

  const navigate = useNavigate();
  const Handle_Logout = () => {
    props.userSetter(null); // making the active user null because we are logging out
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
            active === "builder" ? "link-click" : ""
          } px-2 text-white text-decoration-none`}
          to="/"
          onClick={() => setActive("builder")}
        >
          Burger Builder
        </Link>
        <Link
          className={`custom-link ${
            active === "signin" ? "link-click" : ""
          } px-2 text-white text-decoration-none d-${
            props.activeUser === null ? "display" : "none"
          }`}
          to="/login"
          onClick={() => setActive("signin")}
        >
          Sign In
        </Link>
        <Link
          className={`custom-link ${
            active === "order" ? "link-click" : ""
          } px-2 text-white text-decoration-none d-${
            props.activeUser === null ? "none" : "display"
          }`}
          to="/orders"
          onClick={() => setActive("order")}
        >
          Orders
        </Link>
        <Link
          className={`custom-link px-2 text-white text-decoration-none  d-${
            props.activeUser === null ? "none" : "display"
          }`}
          onClick={Handle_Logout}
        >
          Log Out
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
