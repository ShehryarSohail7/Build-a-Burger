import "./App.css";
import React, { useState } from "react";
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

  // let active = localStorage.getItem("active"); //to stay signed in
  // if (active.salad !== null) {
  //   Set_aciveUser(active);
  // }

  return (
    <div>
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
