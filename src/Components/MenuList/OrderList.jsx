import React, { useEffect, useState } from "react";
import MenuLists from "./MenuLists";
import "./OrderLists.css";

const OrderList = ({ userId }) => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(`http://34.224.29.145:4000/orderdetails`, {
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
                    <div className="order-products">
                      {/* <h2>Products:</h2> */}
                      {order.products && order.products.length > 0 ? (
                        <ul>
                          {order.products.map((product, idx) => (
                            <h2 key={idx}>
                              <img
                                src={product.image}
                                alt={`Product ${product.productId}`}
                                style={{ width: "150px", height: "150px" }}
                              />
                              {/* <h3>Product ID: {product.productId}</h3> */}
                              <h3 className="orderquantity">
                                Quantity : {product.quantity}
                              </h3>
                            </h2>
                          ))}
                        </ul>
                      ) : (
                        <p>No products found in this order.</p>
                      )}
                    </div>
                    {/* <h2>Order ID: {order.orderId}</h2> */}
                    <h3>Order Date: {order.orderDate}</h3>
                    <h3>
                      Price: ₹{order.amount / 100} {order.paymentStatus}
                    </h3>

                    <div className="order-shipping-address">
                      <h2>Shipping Address:</h2>
                      <h3>
                        {order.shipping_address?.username}{" "}
                        {order.shipping_address?.lastName}
                        {" | "}
                        {order.shipping_address?.phoneNumber}
                      </h3>
                      <p>
                        {order.shipping_address?.fullAddress}{" "}
                        {order.shipping_address?.pinCode}{" "}
                        {order.shipping_address?.state}{" "}
                        {order.shipping_address?.city}
                      </p>
                    </div>
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
