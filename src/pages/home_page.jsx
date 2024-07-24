import BurgerDisplay from "../components/burgerDisplay";
import React, { useState, useCallback } from "react";
import Popup from "../components/popup";
import "./css/homePage.css";
import {
  saladpiece,
  chickenpiece,
  cheesepiece,
  meatpiece,
  disableButtonHandler,
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
  const [disableButton, setDisableButton] = useState([
    "disablesalad",
    "disablechicken",
    "disablecheese",
    "disablemeat",
  ]);
  const [popup, setPopUp] = useState(false);

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

  // handlers

  const handleAdd = (item, itemState, setItem, helperItem) => {
    console.log(`${item} More Triggered`);
    let temp;
    if (item === "salad") {
      temp = 0.5;
    } else if (item === "chicken") {
      temp = 0.7;
    } else if (item === "cheese") {
      temp = 0.4;
    } else if (item === "meat") {
      temp = 1.3;
    }

    let increment = itemState + temp;
    increment = Math.round(increment * 100) / 100;
    setItem(increment);
    helperItem("add");
    disableButtonHandler(disableButton, setDisableButton, item, "enable");
  };

  const handleRemove = (item, itemState, setItem, helperItem) => {
    console.log(`${item} Less Triggered`);

    if (item === 0) {
      return;
    }
    let temp;
    if (item === "salad") {
      temp = 0.5;
    } else if (item === "chicken") {
      temp = 0.7;
    } else if (item === "cheese") {
      temp = 0.4;
    } else if (item === "meat") {
      temp = 1.3;
    }
    let decrement = itemState - temp;
    decrement = Math.round(decrement * 100) / 100;
    if (decrement === 0) {
      disableButtonHandler(disableButton, setDisableButton, item, "disable");
    }
    setItem(decrement);
    // console.log(`DEBUGGING ${salad === 0} AND ${salad}`); This is showing async nature so i can't see the updated value!!
    helperItem("remove");
  };

  // salad
  const helperSaladPiece = useCallback(
    (input) => {
      saladpiece(input, setSaladArr, saladArr);
    },
    [saladArr]
  );

  // chicken
  const helperChickenPiece = useCallback(
    (input) => {
      chickenpiece(input, setChickenArr, chickenArr);
    },
    [chickenArr]
  );

  // cheese
  const helperCheesePiece = useCallback(
    (input) => {
      cheesepiece(input, setCheeseArr, cheeseArr);
    },
    [cheeseArr]
  );

  // meat
  const helperMeatPiece = useCallback(
    (input) => {
      meatpiece(input, setMeatArr, meatArr);
    },
    [meatArr]
  );

  // Order Button
  function OrderButtonManipulation(props) {
    let elementsToFind = [
      "disablesalad",
      "disablechicken",
      "disablecheese",
      "disablemeat",
    ];
    if (props.type === "order") {
      if (elementsToFind.every((element) => disableButton.includes(element))) {
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
      <BurgerDisplay
        salad={salad}
        saladArr={saladArr}
        meat={meat}
        meatArr={meatArr}
        chicken={chicken}
        chickenArr={chickenArr}
        cheese={cheese}
        cheeseArr={cheeseArr}
      />
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
              className={`${
                disableButton.includes("disablesalad")
                  ? "disable-button "
                  : "enable-button "
              } mx-2 px-3`}
              disabled={disableButton.includes("disablesalad")}
              onClick={() => {
                handleRemove("salad", salad, setSalad, helperSaladPiece);
              }}
            >
              Less
            </button>
            <button
              className="add-button px-3"
              onClick={() => {
                handleAdd("salad", salad, setSalad, helperSaladPiece);
              }}
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
              className={`${
                disableButton.includes("disablechicken")
                  ? "disable-button "
                  : "enable-button "
              } mx-2 px-3`}
              disabled={disableButton.includes("disablechicken")}
              onClick={() => {
                handleRemove(
                  "chicken",
                  chicken,
                  setChicken,
                  helperChickenPiece
                );
              }}
            >
              Less
            </button>
            <button
              className="add-button px-3"
              onClick={() => {
                handleAdd("chicken", chicken, setChicken, helperChickenPiece);
              }}
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
              className={`${
                disableButton.includes("disablecheese")
                  ? "disable-button "
                  : "enable-button "
              } mx-2 px-3`}
              disabled={disableButton.includes("disablecheese")}
              onClick={() => {
                handleRemove("cheese", cheese, setCheese, helperCheesePiece);
              }}
            >
              Less
            </button>
            <button
              className="add-button px-3"
              onClick={() => {
                handleAdd("cheese", cheese, setCheese, helperCheesePiece);
              }}
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
              className={`${
                disableButton.includes("disablemeat")
                  ? "disable-button "
                  : "enable-button "
              } mx-2 px-3`}
              disabled={disableButton.includes("disablemeat")}
              onClick={() => {
                handleRemove("meat", meat, setMeat, helperMeatPiece);
              }}
            >
              Less
            </button>
            <button
              className="add-button px-3"
              onClick={() => {
                handleAdd("meat", meat, setMeat, helperMeatPiece);
              }}
            >
              More
            </button>
          </div>
        </div>
        <OrderButtonManipulation
          type={props.activeUser === null ? "signIn" : "order"}
        />
      </div>
      <Popup trigger={popup} setPopUp={setPopUp} saveorder={saveorder}>
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
              <li key={1}>salad: {Math.round((salad / 0.5) * 100) / 100}</li>
              <li key={2}>
                chicken: {Math.round((chicken / 0.7) * 100) / 100}
              </li>
              <li key={3}>cheese: {Math.round((cheese / 0.4) * 100) / 100}</li>
              <li key={4}>meat: {Math.round((meat / 1.3) * 100) / 100}</li>
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
