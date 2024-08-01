import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./MenuLists.css";
const MenuLists = () => {
  const [activeSection, setActiveSection] = useState("");

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="menu-page">
      <div className="menu-listcard">
        <Link to="/account" onClick={() => handleSectionClick("Account")}>
          Account
        </Link>
        <hr className="hrrr" />
        <Link to="/order" onClick={() => handleSectionClick("Order")}>
          Order
        </Link>
        <hr className="hrrr" />
        <Link to="/address" onClick={() => handleSectionClick("Address")}>
          Address
        </Link>
        <hr className="hrrr" />
        <Link to="/contact" onClick={() => handleSectionClick("Contact")}>
          Contact
        </Link>
      </div>

      <div className="card-container">
        {activeSection === "Account"}
        {activeSection === "Order"}
        {activeSection === "Address"}
        {activeSection === "Contact"}
      </div>
    </div>
  );
};

export default MenuLists;
