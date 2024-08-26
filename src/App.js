import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import HomePage from "./pages/home_page";
import LoginSignUp from "./pages/logIn_signUp";
import Orders from "./pages/orders";
import { Routes, Route } from "react-router-dom";

function App() {
  const [activeUser, Set_aciveUser] = useState(null);
  const Active_User_Setter = (user) => {
    Set_aciveUser(user);
  };

  useEffect(() => {
    console.log("useEffect rendered");
    if (localStorage.getItem("activeUser") === null) {
      localStorage.setItem("activeUser", activeUser);
    } else {
      let previous_session_user = localStorage.getItem("activeUser");
      if (previous_session_user === "null") {
        previous_session_user = null;
      }
      Set_aciveUser(previous_session_user);
    }

    console.log("Active User: ", activeUser);
  }, [activeUser]);

  return (
    <div className="vh-sm-100">
      <Navbar activeUser={activeUser} userSetter={Active_User_Setter} />
      <Routes>
        <Route path="/" element={<HomePage activeUser={activeUser} />} />
        <Route
          path="/login"
          element={<LoginSignUp userSetter={Active_User_Setter} />}
        />
        <Route path="/orders" element={<Orders activeUser={activeUser} />} />
      </Routes>
    </div>
  );
}

export default App;
