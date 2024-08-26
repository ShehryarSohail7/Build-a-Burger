import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LogIn_signUp = (props) => {
  // use States
  const [Switch, SetSwitch] = useState(false);
  const [settings1, Set_settings1] = useState("display");
  const [settings2, Set_settings2] = useState("none");
  const [email, Setemail] = useState("");
  const [password, Setpassword] = useState("");
  const [warning, Setwarning] = useState("");
  const [warningDsisplay, SetWarningDisplay] = useState("none");

  // Logic
  const navigate = useNavigate();

  if (localStorage.getItem("users") === null) {
    console.log("Local Storage is empty");
    localStorage.setItem("users", JSON.stringify([]));
  }

  // Functions
  const SwitchHandler = () => {
    if (Switch) {
      Set_settings1("display");
      Set_settings2("none");
      SetSwitch(!Switch);
    } else {
      Set_settings1("none");
      Set_settings2("display");
      SetSwitch(!Switch);
    }
  };

  const SignUpHandler = () => {
    let users = JSON.parse(localStorage.getItem("users"));
    for (let user of users) {
      if (user.email === email) {
        SetWarningDisplay("display");
        Setwarning("EMAIL_EXISTS");
        return;
      }
    }
    users.push({ email: email, password: password });
    localStorage.setItem("users", JSON.stringify(users));
    SetWarningDisplay("none");
    props.userSetter(email);
    localStorage.setItem("activeUser", email); // updating the local storage for previous session user
    navigate("/");
  };

  const SignInHandler = () => {
    let data = JSON.parse(localStorage.getItem("users"));
    for (let user of data) {
      if (user.email === email) {
        if (user.password === password) {
          SetWarningDisplay("none");
          props.userSetter(user.email);
          localStorage.setItem("activeUser", user.email);  // updating the local storage for previous session user
          

          navigate("/");
          return;
        } else {
          SetWarningDisplay("display");
          Setwarning("INVALID_PASSWORD");
          return;
        }
      }
    }
    SetWarningDisplay("display");
    Setwarning("EMAIL_NOT_FOUND");
  };

  return (
    <div className="d-flex justify-content-center">
      <div
        className="d-flex flex-column justify-content-center align-items-center m-3"
        style={{
          boxShadow: "0 2px 3px #ccc",
          border: "1px solid #eee",
        }}
      >
        <p
          className={`mt-4 d-${warningDsisplay}`}
          style={{
            fontSize: "13px",
            fontFamily: "Open Sans, sans-serif",
          }}
        >
          {warning}
        </p>
        <form className="d-flex flex-column">
          <input
            type="email"
            placeholder="E-mail"
            className="email mt-3 mx-3"
            value={email}
            onChange={(e) => {
              Setemail(e.target.value);
            }}
            style={{ border: "1px solid #ccc" }}
          />
          <input
            type="text"
            placeholder="Password"
            className="my-4 mx-3"
            value={password}
            onChange={(e) => {
              Setpassword(e.target.value);
            }}
            style={{
              border: "1px solid #ccc",
            }}
          />
        </form>

        <button
          className={`mb-4 border border-1 border-white bg-white d-${settings1}`}
          style={{
            color: email === "" || password === "" ? "#ccc" : "#5c9210",
            fontSize: "14px",
          }}
          disabled={email === "" || password === ""}
          onClick={SignUpHandler}
        >
          <b>Sign Up</b>
        </button>

        <button
          className={`mb-4 border border-1 border-white bg-white d-${settings2}`}
          disabled={email === "" || password === ""}
          style={{
            color: email === "" || password === "" ? "#ccc" : "#5c9210",
            fontSize: "14px",
          }}
          onClick={SignInHandler}
        >
          <b>Sign In</b>
        </button>

        <button
          className={`mb-4 border border-1 border-white bg-white d-${settings1}`}
          style={{
            color: "#944317",
            fontSize: "14px",
          }}
          onClick={SwitchHandler}
        >
          <b>Switch to Sign In</b>
        </button>
        <button
          className={`mb-4 border border-1 border-white bg-white d-${settings2}`}
          style={{
            color: "#944317",
            fontSize: "14px",
          }}
          onClick={SwitchHandler}
        >
          <b>Switch to Sign Up</b>
        </button>
      </div>
    </div>
  );
};

export default LogIn_signUp;
