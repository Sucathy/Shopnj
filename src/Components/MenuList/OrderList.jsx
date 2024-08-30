import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MenuLists from "./MenuLists";
import "./OrderLists.css";

const OrderList = ({ userId }) => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
<<<<<<< HEAD
        const response = await fetch(`http://localhost:4000/orderdetails`, {
=======
        const response = await fetch(`http://54.204.66.236:4000/orderdetails`, {
>>>>>>> origin/main
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("auth-token") || "",
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();

        if (data.orders) {
          setOrders(data.orders);
        } else {
          setError(data.message || "Failed to fetch orders");
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchOrders();
  }, [userId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="order-list-page">
      <MenuLists />
      <div className="order-list-details">
        <form>
          <h1>Order List</h1>
          {orders && orders.length === 0 ? (
            <p>No orders found.</p>
          ) : (
            <ul>
              {orders &&
                orders.map((order, index) => (
                  <li key={index}>
                    <Link to={`/orderlistdetails/${order.orderId}`}>
                      <div className="order-products">
                        {order.products && order.products.length > 0 ? (
                          <ul>
                            {order.products.map((product, idx) => (
                              <h2 key={idx}>
                                <img
                                  src={product.image}
                                  alt={`Product ${product.productId}`}
                                  style={{
                                    width: "100%",
                                    maxWidth: "150px",
                                    height: "auto",
                                  }}
                                />{" "}
                              </h2>
                            ))}
                          </ul>
                        ) : (
                          <p>No products found in this order.</p>
                        )}
                      </div>
<<<<<<< HEAD
=======
                      <h6
                        style={{
                          display: "flex",
                          justifyContent: "flex-end", // Aligns the text to the right within the flex container
                          marginLeft: "auto", // Pushes the h6 element to the right
                          marginRight: "20px", // Adds space on the right side
                        }}
                      >
                        Click here
                      </h6>
>>>>>>> origin/main
                    </Link>
                  </li>
                ))}
            </ul>
          )}
        </form>
      </div>
    </div>
  );
};

export default OrderList;
