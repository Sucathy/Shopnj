import React from "react";
// import './ContactPage.css';
import whatsapp_icon from "../Assets/whatsapp_icon.png";
import "./Account.css";
import MenuLists from "./MenuLists";

const Contact = () => {
  return (
    <div className="contact-pages">
      <MenuLists />
      <div className="contact_detailss">
        {/* <h1>Contact</h1> */}
        <br />
        <p className="contact_detailes_list">
          <h1> Contact Details </h1>
          <hr />
          <br />
          <h3> Phone : +916363203639</h3>
          <h3> Email : susuresh158@gmail.com</h3>
          <h3> Customer Service @24Hours</h3>
          <h3>Address : BTM water tank bengaluru - 560089</h3>
          <br />
          <div className="footer-icons-container">
            <a
              href="https://chat.whatsapp.com/CTPBqumwCYVLxDJjuprTNk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={whatsapp_icon} alt="WhatsApp Icon" />
              <h4> support</h4>
            </a>
          </div>
        </p>
      </div>
    </div>
  );
};

export default Contact;
