import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];
  const priceStyle = {
    fontSize: "25px", // Adjust the font size as needed
    fontWeight: "bold", // Adjust the font weight as needed
  };
  const cart = {
    fontSize: "20px", // Adjust the font size as needed
  };

  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p style={priceStyle}>{price} Ksh.</p>
      </div>
      <button
        className="addToCartBttn"
        style={cart}
        onClick={() => addToCart(id)}
      >
        + My Bill{cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};
