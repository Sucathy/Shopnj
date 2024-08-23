import { default as React } from "react";
import Item from "../Item/Item";
// Ensure this path is correct
import "./Popular.css";

const Popular = (props) => {
  // Fetch all products from the server

  return (
    <div className="popular">
      <h1>SHOP FOR THE DAY</h1>
      <hr />
      <div className="popular-item">
        {props.data.map((item, i) => {
          return (
            // <div className="item-card">
            <Item
              id={item.id}
              key={i}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
            // </div>
          );
        })}
      </div>

      {/* </div> */}
    </div>
  );
};

export default Popular;
