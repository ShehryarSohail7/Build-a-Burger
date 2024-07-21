import React, { useState, useEffect } from "react";

const Orders = (props) => {
  // useStates
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // This function had to run once so i used UseEffect, otherwise it was giving me infinite rendering!!
    function iterations_items() {
      let user = props.activeUser;
      if (user === null) {
        return;
      }
      let user_items = JSON.parse(localStorage.getItem(user));
      if (!user_items || user_items.length === 0) {
        return;
      }
      let salad;
      let meat;
      let chicken;
      let cheese;
      let salad2;
      let meat2;
      let chicken2;
      let cheese2;
      let ordersArray = [];

      for (let i = 0; i < user_items.length; i++) {
        salad = user_items[i].Salad;
        meat = user_items[i].Meat;
        chicken = user_items[i].Chicken;
        cheese = user_items[i].Cheese;

        salad2 = user_items[i].Salad / 0.5;
        salad2 = Math.round(salad2 * 100) / 100;
        meat2 = user_items[i].Meat / 1.3;
        meat2 = Math.round(meat2 * 100) / 100;
        chicken2 = user_items[i].Chicken / 0.7;
        chicken2 = Math.round(chicken2 * 100) / 100;
        cheese2 = user_items[i].Cheese / 0.4;
        cheese2 = Math.round(cheese2 * 100) / 100;

        ordersArray.push(
          <div
            id="Items"
            className="col-9 my-2"
            style={{
              border: "1px solid #eee",
              boxShadow: "0 2px 3px #ccc",
            }}
            key={i}
          >
            <div className="d-flex col-4 justify-content-between pt-2 ps-2 pe-2 ">
              <p
                style={{
                  fontSize: "14px",
                }}
              >
                Ingredients:
              </p>
              <p
                className="px-2"
                style={{
                  border: "1px solid rgb(204, 204, 204)",
                  fontFamily: "Open Sans, sans-serif",
                  fontSize: "14px",
                }}
              >
                Cheese ({cheese2})
              </p>
              <p
                className="px-2"
                style={{
                  border: "1px solid rgb(204, 204, 204)",
                  fontFamily: "Open Sans, sans-serif",
                  fontSize: "14px",
                }}
              >
                Chicken ({chicken2})
              </p>
              <p
                className="px-2"
                style={{
                  border: "1px solid rgb(204, 204, 204)",
                  fontFamily: "Open Sans, sans-serif",
                  fontSize: "14px",
                }}
              >
                Meat ({meat2})
              </p>
              <p
                className="px-2"
                style={{
                  border: "1px solid rgb(204, 204, 204)",
                  fontFamily: "Open Sans, sans-serif",
                  fontSize: "14px",
                }}
              >
                Salad ({salad2})
              </p>
            </div>
            <p
              className="p-2"
              style={{
                fontFamily: "Open Sans, sans-serif",
                fontSize: "14px",
              }}
            >
              Price:{" "}
              <b>USD {(4.0 + salad + chicken + cheese + meat).toFixed(2)}</b>
            </p>
          </div>
        );
      }

      setOrders(ordersArray);
    }

    iterations_items();
  }, [props.activeUser]);

  console.log("current user is:", props.activeUser);
  return (
    <div>
      <div className="d-flex flex-column align-items-center">
        <div className="py-1"></div>
        {orders}
      </div>
    </div>
  );
};

export default Orders;
