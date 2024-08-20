import React from "react";
import saladimage from "../../images/salad.png";
import chickenimage from "../../images/chicken.png";
import cheeseimage from "../../images/cheese.png";
import meatimage from "../../images/meat.png";

const saladpiece = (input, setSaladArr, saladArr) => {
  if (input === "add") {
    console.log("salad piece added");
    setSaladArr([
      ...saladArr,
      <img className="salad-image" src={saladimage} alt="salad piece" />,
    ]);
  } else if (input === "remove") {
    console.log("salad piece removed");
    let saladTemp = saladArr;
    saladTemp.pop();
    setSaladArr([...saladTemp]);
  }
};

const chickenpiece = (input, setChickenArr, chickenArr) => {
  if (input === "add") {
    console.log("chicken piece added");
    setChickenArr([
      ...chickenArr,
      <img className="chicken-image" src={chickenimage} alt="chicken piece" />,
    ]);
  } else if (input === "remove") {
    console.log("chicken piece removed");
    let chickenTemp = chickenArr;
    chickenTemp.pop();
    setChickenArr([...chickenTemp]);
  }
};

const cheesepiece = (input, setCheeseArr, cheeseArr) => {
  if (input === "add") {
    console.log("cheese piece added");
    setCheeseArr([
      ...cheeseArr,
      <img className="cheese-image" src={cheeseimage} alt="cheese piece" />,
    ]);
  } else if (input === "remove") {
    console.log("cheese piece removed");
    let cheeseTemp = cheeseArr;
    cheeseTemp.pop();
    setCheeseArr([...cheeseTemp]);
  }
};

const meatpiece = (input, setMeatArr, meatArr) => {
  if (input === "add") {
    console.log("meat piece added");
    setMeatArr([
      ...meatArr,
      <img className="meat-image" src={meatimage} alt="meat piece" />,
    ]);
  } else if (input === "remove") {
    console.log("meat piece removed");
    let meatTemp = meatArr;
    meatTemp.pop();
    setMeatArr([...meatTemp]);
  }
};

const disableButtonHandler = (
  disableButtonArr,
  setDisableButtonArr,
  item,
  action
) => {
  let ingredients_position = ["salad", "chicken", "cheese", "meat"];
  let extractArray = disableButtonArr;
  let index = ingredients_position.indexOf(item);
  if (action === "enable" && index !== -1) {
    extractArray[index] = action + item;
  } else if (action === "disable" && index !== -1) {
    extractArray[index] = action + item;
  }
  setDisableButtonArr(extractArray);
};

export {
  saladpiece,
  chickenpiece,
  cheesepiece,
  meatpiece,
  disableButtonHandler,
};
