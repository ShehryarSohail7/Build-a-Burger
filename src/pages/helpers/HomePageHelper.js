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
      <img src={saladimage} alt="salad piece" style={{ width: "530px" }} />,
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
      <img src={chickenimage} alt="chicken piece" style={{ width: "530px" }} />,
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
      <img src={cheeseimage} alt="cheese piece" style={{ width: "530px" }} />,
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
      <img src={meatimage} alt="meat piece" style={{ width: "530px" }} />,
    ]);
  } else if (input === "remove") {
    console.log("meat piece removed");
    let meatTemp = meatArr;
    meatTemp.pop();
    setMeatArr([...meatTemp]);
  }
};

export { saladpiece, chickenpiece, cheesepiece, meatpiece };
