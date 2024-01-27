import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
// import { ShopContext } from "../../context/shop-context";
import { ShopContext } from "../context/shop-context";

import "./navbar.css";
import Tesla from "../assets/products/Telsa.svg";
export const Navbar = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={Tesla} alt="" />
        </Link>
      </div>
      <div className="links">
        <Link to="/"> Shop </Link>
        <Link to="/cart">
          <div className="price">
            <ShoppingCart size={32} />
            <p> {totalAmount} Ksh.</p>
          </div>
        </Link>
      </div>
    </div>
  );
};
