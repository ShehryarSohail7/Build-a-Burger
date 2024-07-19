import React, { useState } from "react";
import Navbar from "../components/navbar";
import top_bun from "../images/top_bun.png";
import bottom_bun from "../images/bottom_bun.png";
import salad_image from "../images/salad.png";
import chicken_image from "../images/chicken.png";
import cheese_image from "../images/cheese.png";
import meat_image from "../images/meat.png";

const Home_page = () => {
  // state variables
  const [Salad, Set_Salad] = useState(0);
  const [Saladarr, Set_Saladarr] = useState([]);
  const [Chicken, Set_Chicken] = useState(0);
  const [Chickenarr, Set_Chickenarr] = useState([]);
  const [Cheese, Set_Cheese] = useState(0);
  const [Cheesearr, Set_Cheesearr] = useState([]);
  const [Meat, Set_Meat] = useState(0);
  const [Meatarr, Set_Meatarr] = useState([]);
  const [disable_button_Salad, Set_disable_button_Salad] = useState(true);
  const [disable_button_Chicken, Set_disable_button_Chicken] = useState(true);
  const [disable_button_Cheese, Set_disable_button_Cheese] = useState(true);
  const [disable_button_Meat, Set_disable_button_Meat] = useState(true);

  // function

  // Salad
  const Salad_More = () => {
    console.log("Salad More Triggered");
    let increment = Salad + 0.5;
    increment = Math.round(increment * 100) / 100;
    Set_Salad(increment);
    Salad_piece("add");
    Set_disable_button_Salad(false);
  };

  const Salad_Less = () => {
    console.log("Salad Less Triggered");

    if (Salad === 0) {
      return;
    }
    let decrement = Salad - 0.5;
    decrement = Math.round(decrement * 100) / 100;
    if (decrement === 0) {
      Set_disable_button_Salad(true);
    }
    Set_Salad(decrement);
    // console.log(`DEBUGGING ${Salad === 0} AND ${Salad}`); This is showing async nature so i can't see the updated value!!
    Salad_piece("remove");
  };

  const Salad_piece = (input) => {
    if (input === "add") {
      console.log("Salad piece added");
      Set_Saladarr([
        ...Saladarr,
        <img src={salad_image} alt="salad piece" style={{ width: "530px" }} />,
      ]);
    } else if (input === "remove") {
      console.log("Salad piece removed");
      let saladTemp = Saladarr;
      saladTemp.pop();
      Set_Saladarr([...saladTemp]);
    }
  };

  // Chicken
  const Chicken_More = () => {
    console.log("Chicken More Triggered");
    let increment = Chicken + 0.7;
    increment = Math.round(increment * 100) / 100;
    Set_Chicken(increment);
    Chicken_piece("add");
    Set_disable_button_Chicken(false);
  };

  const Chicken_Less = () => {
    console.log("Chicken Less Triggered");

    if (Chicken === 0) {
      return;
    }
    let decrement = Chicken - 0.7;
    decrement = Math.round(decrement * 100) / 100;
    if (decrement === 0) {
      Set_disable_button_Chicken(true);
    }
    Set_Chicken(decrement);
    // console.log(`DEBUGGING ${Chicken === 0} AND ${Chicken}`); This is showing async nature so i can't see the updated value!!
    Chicken_piece("remove");
  };

  const Chicken_piece = (input) => {
    if (input === "add") {
      console.log("Chicken piece added");
      Set_Chickenarr([
        ...Chickenarr,
        <img
          src={chicken_image}
          alt="chicken piece"
          style={{ width: "530px" }}
        />,
      ]);
    } else if (input === "remove") {
      console.log("Chicken piece removed");
      let ChickenTemp = Chickenarr;
      ChickenTemp.pop();
      Set_Chickenarr([...ChickenTemp]);
    }
  };

  // Cheese
  const Cheese_More = () => {
    console.log("Cheese More Triggered");
    let increment = Cheese + 0.4;
    increment = Math.round(increment * 100) / 100;
    Set_Cheese(increment);
    Cheese_piece("add");
    Set_disable_button_Cheese(false);
  };

  const Cheese_Less = () => {
    console.log("Cheese Less Triggered");
    if (Cheese === 0) {
      return;
    }
    let decrement = Cheese - 0.4;
    decrement = Math.round(decrement * 100) / 100;
    if (decrement === 0) {
      Set_disable_button_Cheese(true);
    }
    Set_Cheese(decrement);
    Cheese_piece("remove");
  };

  const Cheese_piece = (input) => {
    if (input === "add") {
      console.log("Cheese piece added");
      Set_Cheesearr([
        ...Cheesearr,
        <img
          src={cheese_image}
          alt="cheese piece"
          style={{ width: "530px" }}
        />,
      ]);
    } else if (input === "remove") {
      console.log("Cheese piece removed");
      let CheeseTemp = Cheesearr;
      CheeseTemp.pop();
      Set_Cheesearr([...CheeseTemp]);
    }
  };

  // Meat
  const Meat_More = () => {
    console.log("Meat More Triggered");
    let increment = Meat + 1.3;
    increment = Math.round(increment * 100) / 100;
    Set_Meat(increment);
    Meat_piece("add");
    Set_disable_button_Meat(false);
  };

  const Meat_Less = () => {
    console.log("Meat Less Triggered");
    if (Meat === 0) {
      return;
    }
    let decrement = Meat - 1.3;
    decrement = Math.round(decrement * 100) / 100;
    if (decrement === 0) {
      Set_disable_button_Meat(true);
    }
    Set_Meat(decrement);
    Meat_piece("remove");
  };

  const Meat_piece = (input) => {
    if (input === "add") {
      console.log("Meat piece added");
      Set_Meatarr([
        ...Meatarr,
        <img src={meat_image} alt="Meat piece" style={{ width: "530px" }} />,
      ]);
    } else if (input === "remove") {
      console.log("Meat piece removed");
      let MeatTemp = Meatarr;
      MeatTemp.pop();
      Set_Meatarr([...MeatTemp]);
    }
  };

  const handle_button = (flag) => {
    if (flag === true) {
      return {
        backgroundColor: "#ac9980",
        color: "#ccc",
        border: "1px solid #7e7365",
      };
    } else if (flag === false) {
      return {
        backgroundColor: "#d39952",
        color: "#fff",
        border: "1px solid #aa6817",
      };
    }
  };

  // return HTML

  return (
    <div>
      <Navbar />
      <div className="d-flex justify-content-center">
        <div
          className=" col-4 d-flex flex-column align-items-center mt-3"
          style={{ overflow: "scroll", height: "500px", width: "650px" }}
        >
          <img src={top_bun} alt="top bun" style={{ height: "115px" }} />

          {/* <p>Please select ingredients.</p> */}
          {4.0 + Salad + Chicken + Cheese + Meat === 4.0 ? (
            <b>
              <p>Please select ingredients.</p>
            </b>
          ) : (
            <div></div>
          )}
          {/* <img src={salad_image} alt="salad piece" style={{ width: "530px" }} /> */}
          {Saladarr}
          {Chickenarr}
          {Cheesearr}
          {Meatarr}

          <img src={bottom_bun} alt="bottom bun" style={{ height: "79px" }} />
        </div>
      </div>
      <div
        className="d-flex flex-column align-items-center"
        style={{ backgroundColor: "#cf8f2e" }}
      >
        <p className="my-3">
          Current Price: ${" "}
          <b>{(4.0 + Salad + Chicken + Cheese + Meat).toFixed(2)}</b>
        </p>
        <div
          className="d-flex justify-content-between align-items-center my-2"
          style={{ width: "250px" }}
        >
          <p className="my-0">
            <b>Salad</b>
          </p>
          <div>
            <button
              className="mx-2 px-3"
              style={handle_button(disable_button_Salad)}
              disabled={disable_button_Salad}
              onClick={Salad_Less}
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
              onClick={Salad_More}
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
            <b>Chicken</b>
          </p>
          <div>
            <button
              className="mx-2 px-3"
              style={handle_button(disable_button_Chicken)}
              disabled={disable_button_Chicken}
              onClick={Chicken_Less}
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
              onClick={Chicken_More}
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
            <b>Cheese</b>
          </p>
          <div>
            <button
              className="mx-2 px-3"
              style={handle_button(disable_button_Cheese)}
              disabled={disable_button_Cheese}
              onClick={Cheese_Less}
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
              onClick={Cheese_More}
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
            <b>Meat</b>
          </p>
          <div>
            <button
              className="mx-2 px-3"
              style={handle_button(disable_button_Meat)}
              disabled={disable_button_Meat}
              onClick={Meat_Less}
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
              onClick={Meat_More}
            >
              More
            </button>
          </div>
        </div>
        <button
          className="px-4 py-3 my-2"
          style={
            disable_button_Chicken === true &&
            disable_button_Cheese === true &&
            disable_button_Salad === true &&
            disable_button_Meat === true
              ? {
                  backgroundColor: "#c7c6c6",
                  border: "1px solid #ccc",
                  color: "#888",
                }
              : {
                  backgroundColor: "#dad735",
                  border: "1px solid #966909",
                  color: "#966909",
                }
          }
          disabled={false}
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Home_page;
