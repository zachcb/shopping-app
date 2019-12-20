import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.css";
import Incrementer from "../../atoms/Incrementer";

const CartItem = ({ title, quantity, onIncreaseQuantity, onDecreaseQuantity }) => (
  <div>
    {title} | <Incrementer count={quantity} />
  </div>
);

CartItem.propTypes = {};

export default CartItem;
