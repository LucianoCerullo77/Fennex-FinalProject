import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import { CartContext } from "../../context/CartContext";
export default function CartWidget() {
  const { cartQuantity } = React.useContext(CartContext);
  return (
    <div className="CartWidget">
      <Link to="/cart">
        <FontAwesomeIcon icon={faCartShopping} />
        <span className="badge">
          {cartQuantity() || ""}
        </span>
      </Link>
    </div>
  );
}