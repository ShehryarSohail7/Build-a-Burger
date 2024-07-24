import React, { useState, useCallback } from "react";
import topbun from "../images/top_bun.png";
import bottombun from "../images/bottom_bun.png";
import Popup from "../components/popup";
import {
  saladpiece,
  chickenpiece,
  cheesepiece,
  meatpiece,
} from "./helpers/HomePageHelper";

const Homepage = (props) => {
  // state variables
  const [salad, setSalad] = useState(0);
  const [saladArr, setSaladArr] = useState([]);
  const [chicken, setChicken] = useState(0);
  const [chickenArr, setChickenArr] = useState([]);
  const [cheese, setCheese] = useState(0);
  const [cheeseArr, setCheeseArr] = useState([]);
  const [meat, setMeat] = useState(0);
  const [meatArr, setMeatArr] = useState([]);
  const [disablebuttonsalad, setDisablebuttonsalad] = useState(true);
  const [disablebuttonchicken, setDisablebuttonchicken] = useState(true);
  const [disablebuttoncheese, setDisablebuttoncheese] = useState(true);
  const [disablebuttonmeat, setDisablebuttonmeat] = useState(true);
  const [popup, setPopUp] = useState(false);

  // Setters
  const setPopUpvalue = (value) => {
    setPopUp(value);
  };

  // function

  const saveorder = () => {
    if (localStorage.getItem(props.activeUser) === null) {
      localStorage.setItem(props.activeUser, JSON.stringify([]));
    }
    let orders = JSON.parse(localStorage.getItem(props.activeUser));
    orders.push({
      salad: salad,
      chicken: chicken,
      cheese: cheese,
      meat: meat,
    });
    localStorage.setItem(props.activeUser, JSON.stringify(orders));
  };

  // salad
  const handleAddSalad = () => {
    console.log("salad More Triggered");
    let increment = salad + 0.5;
    increment = Math.round(increment * 100) / 100;
    setSalad(increment);
    helperSaladPiece("add");
    setDisablebuttonsalad(false);
  };

  const handleRemoveSalad = () => {
    console.log("salad Less Triggered");

    if (salad === 0) {
      return;
    }
    let decrement = salad - 0.5;
    decrement = Math.round(decrement * 100) / 100;
    if (decrement === 0) {
      setDisablebuttonsalad(true);
    }
    setSalad(decrement);
    // console.log(`DEBUGGING ${salad === 0} AND ${salad}`); This is showing async nature so i can't see the updated value!!
    helperSaladPiece("remove");
  };

  const helperSaladPiece = useCallback(
    (input) => {
      saladpiece(input, setSaladArr, saladArr);
    },
    [saladArr]
  );

  // chicken
  const handleAddChicken = () => {
    console.log("chicken More Triggered");
    let increment = chicken + 0.7;
    increment = Math.round(increment * 100) / 100;
    setChicken(increment);
    helperChickenPiece("add");
    setDisablebuttonchicken(false);
  };

  const handleRemoveChicken = () => {
    console.log("chicken Less Triggered");

    if (chicken === 0) {
      return;
    }
    let decrement = chicken - 0.7;
    decrement = Math.round(decrement * 100) / 100;
    if (decrement === 0) {
      setDisablebuttonchicken(true);
    }
    setChicken(decrement);
    // console.log(`DEBUGGING ${chicken === 0} AND ${chicken}`); This is showing async nature so i can't see the updated value!!
    helperChickenPiece("remove");
  };

  const helperChickenPiece = useCallback(
    (input) => {
      chickenpiece(input, setChickenArr, chickenArr);
    },
    [chickenArr]
  );

  // cheese
  const handleAddCheese = () => {
    console.log("cheese More Triggered");
    let increment = cheese + 0.4;
    increment = Math.round(increment * 100) / 100;
    setCheese(increment);
    helperCheesePiece("add");
    setDisablebuttoncheese(false);
  };

  const handleRemoveCheese = () => {
    console.log("cheese Less Triggered");
    if (cheese === 0) {
      return;
    }
    let decrement = cheese - 0.4;
    decrement = Math.round(decrement * 100) / 100;
    if (decrement === 0) {
      setDisablebuttoncheese(true);
    }
    setCheese(decrement);
    helperCheesePiece("remove");
  };

  const helperCheesePiece = useCallback(
    (input) => {
      cheesepiece(input, setCheeseArr, cheeseArr);
    },
    [cheeseArr]
  );

  // meat
  const handleAddMeat = () => {
    console.log("meat More Triggered");
    let increment = meat + 1.3;
    increment = Math.round(increment * 100) / 100;
    setMeat(increment);
    helperMeatPiece("add");
    setDisablebuttonmeat(false);
  };

  const handleRemoveMeat = () => {
    console.log("meat Less Triggered");
    if (meat === 0) {
      return;
    }
    let decrement = meat - 1.3;
    decrement = Math.round(decrement * 100) / 100;
    if (decrement === 0) {
      setDisablebuttonmeat(true);
    }
    setMeat(decrement);
    helperMeatPiece("remove");
  };

  const helperMeatPiece = useCallback(
    (input) => {
      meatpiece(input, setMeatArr, meatArr);
    },
    [meatArr]
  );

  const handleButton = (flag) => {
    if (flag) {
      return {
        backgroundColor: "#ac9980",
        color: "#ccc",
        border: "1px solid #7e7365",
      };
    } else if (!flag) {
      return {
        backgroundColor: "#d39952",
        color: "#fff",
        border: "1px solid #aa6817",
      };
    }
  };

  // Order Button

  function OrderButtonManipulation(props) {
    if (props.type === "order") {
      if (
        disablebuttonchicken &&
        disablebuttoncheese &&
        disablebuttonsalad &&
        disablebuttonmeat
      ) {
        return (
          <button
            className="px-4 py-3 my-2"
            style={{
              backgroundColor: "#c7c6c6",
              border: "1px solid #ccc",
              color: "#888",
            }}
            disabled={true}
          >
            Order Now
          </button>
        );
      } else {
        return (
          <button
            className="px-4 py-3 my-2"
            style={{
              backgroundColor: "#dad735",
              border: "1px solid #966909",
              color: "#966909",
            }}
            disabled={false}
            onClick={() => setPopUp(true)}
          >
            Order Now
          </button>
        );
      }
    } else if (props.type === "signIn") {
      return (
        <button
          className="px-4 py-3 my-2"
          style={{
            backgroundColor: "#c7c6c6",
            border: "1px solid #ccc",
            color: "#888",
          }}
          disabled={true}
        >
          Sign in to order
        </button>
      );
    }
  }

  // return HTML

  return (
    <div>
      <div className="d-flex justify-content-center">
        <div
          className=" col-4 d-flex flex-column align-items-center mt-3"
          style={{ overflow: "scroll", height: "500px", width: "650px" }}
        >
          <img src={topbun} alt="top bun" style={{ height: "115px" }} />

          {/* <p>Please select ingredients.</p> */}
          {4.0 + salad + chicken + cheese + meat === 4.0 ? (
            <b>
              <p>Please select ingredients.</p>
            </b>
          ) : (
            <div></div>
          )}
          {/* <img src={saladimage} alt="salad piece" style={{ width: "530px" }} /> */}
          {saladArr}
          {chickenArr}
          {cheeseArr}
          {meatArr}

          <img src={bottombun} alt="bottom bun" style={{ height: "79px" }} />
        </div>
      </div>
      <div
        className="d-flex flex-column align-items-center"
        style={{ backgroundColor: "#cf8f2e" }}
      >
        <p className="my-3">
          Current Price: ${" "}
          <b>{(4.0 + salad + chicken + cheese + meat).toFixed(2)}</b>
        </p>
        <div
          className="d-flex justify-content-between align-items-center my-2"
          style={{ width: "250px" }}
        >
          <p className="my-0">
            <b>salad</b>
          </p>
          <div>
            <button
              className="mx-2 px-3"
              style={handleButton(disablebuttonsalad)}
              disabled={disablebuttonsalad}
              onClick={handleRemoveSalad}
            >
              Less
            </button>
            <button
              className="px-3"
              style={{
                backgroundColor: "#8f5e1e",
                color: "#fff",
                border: "1px solid #8f5e1e",
              }}
              onClick={handleAddSalad}
            >
              More
            </button>
          </div>
        </div>
        <div
          className="d-flex justify-content-between align-items-center my-2"
          style={{ width: "250px" }}
        >
          <p className="my-0">
            <b>chicken</b>
          </p>
          <div>
            <button
              className="mx-2 px-3"
              style={handleButton(disablebuttonchicken)}
              disabled={disablebuttonchicken}
              onClick={handleRemoveChicken}
            >
              Less
            </button>
            <button
              className="px-3"
              style={{
                backgroundColor: "#8f5e1e",
                color: "#fff",
                border: "1px solid #8f5e1e",
              }}
              onClick={handleAddChicken}
            >
              More
            </button>
          </div>
        </div>
        <div
          className="d-flex justify-content-between align-items-center my-2"
          style={{ width: "250px" }}
        >
          <p className="my-0">
            <b>cheese</b>
          </p>
          <div>
            <button
              className="mx-2 px-3"
              style={handleButton(disablebuttoncheese)}
              disabled={disablebuttoncheese}
              onClick={handleRemoveCheese}
            >
              Less
            </button>
            <button
              className="px-3"
              style={{
                backgroundColor: "#8f5e1e",
                color: "#fff",
                border: "1px solid #8f5e1e",
              }}
              onClick={handleAddCheese}
            >
              More
            </button>
          </div>
        </div>
        <div
          className="d-flex justify-content-between align-items-center my-2"
          style={{ width: "250px" }}
        >
          <p className="my-0">
            <b>meat</b>
          </p>
          <div>
            <button
              className="mx-2 px-3"
              style={handleButton(disablebuttonmeat)}
              disabled={disablebuttonmeat}
              onClick={handleRemoveMeat}
            >
              Less
            </button>
            <button
              className="px-3"
              style={{
                backgroundColor: "#8f5e1e",
                color: "#fff",
                border: "1px solid #8f5e1e",
              }}
              onClick={handleAddMeat}
            >
              More
            </button>
          </div>
        </div>
        <OrderButtonManipulation
          type={props.activeUser === null ? "signIn" : "order"}
        />
      </div>
      <Popup
        trigger={popup}
        setPopUpvalue={setPopUpvalue}
        saveorder={saveorder}
      >
        <div className="pt-3" style={{ fontFamily: "Open Sans, sans-serif" }}>
          <p
            style={{
              fontSize: "15px",
            }}
          >
            <b>Order Summary</b>
          </p>
          <div style={{ fontSize: "13px" }}>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
              <li>salad: {Math.round((salad / 0.5) * 100) / 100}</li>
              <li>chicken: {Math.round((chicken / 0.7) * 100) / 100}</li>
              <li>cheese: {Math.round((cheese / 0.4) * 100) / 100}</li>
              <li>meat: {Math.round((meat / 1.3) * 100) / 100}</li>
            </ul>
            <p>$ {(4.0 + salad + chicken + cheese + meat).toFixed(2)}</p>
            <p>Continue to checkout?</p>
          </div>
        </div>
      </Popup>
    </div>
  );
};

export default Homepage;
