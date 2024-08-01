import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import kid_banner from "./Components/Assets/headerkids.jpg";
import men_banner from "./Components/Assets/headermen.png";
import new_banner from "./Components/Assets/headernewcollection.jpg";
import women_banner from "./Components/Assets/headerwomen copy.jpg";
import CheckoutList from "./Components/Checkout/CheckoutList";
import Footer from "./Components/Footer/Footer";
import Account from "./Components/MenuList/Account";
import AddNewAddress from "./Components/MenuList/AddNewAddress";
import Address from "./Components/MenuList/Address";
import Contact from "./Components/MenuList/Contact";
import MenuLists from "./Components/MenuList/MenuLists";
import OrderList from "./Components/MenuList/OrderList";
import Profile from "./Components/MenuList/Profile";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Navbar/Sidebar";
import Website from "./Components/Website/Website";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Product from "./Pages/Product";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const loginId = localStorage.getItem("auth-token");
  // const loginId = "someLoginId";
  return (
    <div>
      <Router>
        {/* <Navbar /> */}
        <Navbar toggleSidebar={toggleSidebar} />
        {/* <Profile loginId={loginId} /> */}
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        <Routes>
          <Route path="/" element={<Shop gender="all" />} />
          <Route
            path="/mens"
            element={<ShopCategory banner={men_banner} category="men" />}
          />
          <Route
            path="/womens"
            element={<ShopCategory banner={women_banner} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={kid_banner} category="kid" />}
          />

          <Route
            path="/NewCollections"
            element={
              <ShopCategory banner={new_banner} category="NewCollections" />
            }
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/checkoutList" element={<CheckoutList />} />

          <Route path="/menulist" element={<MenuLists />} />
          <Route path="/account" element={<Account />} />
          <Route path="/order" element={<OrderList />} />
          <Route path="/address" element={<Address />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile loginId={loginId} />} />
          <Route path="/newaddaddress" element={<AddNewAddress />} />
          <Route path="/website" element={<Website />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
