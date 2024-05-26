import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import Footer from "./components/Footer";
import Login from "./components/Login";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <div className="">
      {showLogin && <Login setShowLogin={setShowLogin} />}
      <Navbar showLogin={showLogin} setShowLogin={setShowLogin} />
      <div className="pt-32">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="order" element={<Order />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
