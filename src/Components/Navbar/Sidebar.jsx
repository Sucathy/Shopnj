import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const sidebarRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        isOpen
      ) {
        toggleSidebar();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, toggleSidebar]);

  return (
    <div ref={sidebarRef} className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="close-btn" onClick={toggleSidebar}>
        &times;
      </button>
      <ul>
        {/* <Route path="/menulist" element={<MenuPage />} /> */}
        {/* <MenuLists /> */}
        {/* <Link to="/profile" style={{ textDecoration: "none" }}>
          <li>
            <button
              className="link-btn"
              onClick={() => console.log("Account clicked")}
            >
              profile
            </button>
          </li>
        </Link> */}
        <Link to="/account" style={{ textDecoration: "none" }}>
          <li>
            <button
              className="link-btn"
              onClick={() => console.log("Account clicked")}
            >
              Account
            </button>
          </li>
        </Link>
        <Link to="/order" style={{ textDecoration: "none" }}>
          <li>
            <button
              className="link-btn"
              onClick={() => console.log("Order clicked")}
            >
              Order
            </button>
          </li>
        </Link>
        <Link to="/address" style={{ textDecoration: "none" }}>
          <li>
            <button
              className="link-btn"
              onClick={() => console.log("Address clicked")}
            >
              Address
            </button>
          </li>
        </Link>
        <Link to="/contact" style={{ textDecoration: "none" }}>
          <li>
            <button
              className="link-btn"
              onClick={() => console.log("Contact clicked")}
            >
              Contact
            </button>
          </li>
        </Link>
        {/* <Link to="/website" style={{ textDecoration: "none" }}>
          <li>
            <button
              className="link-btn"
              onClick={() => console.log("Contact clicked")}
            >
              Webiste
            </button>
          </li>
        </Link> */}
      </ul>
    </div>
  );
};

export default Sidebar;
