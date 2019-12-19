import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.css";

const CartItem = ({ title, quantity, handleUpdateCartItem }) => (
  <div>
    {title} | {quantity}
  </div>
);

CartItem.propTypes = {};

export default CartItem;
