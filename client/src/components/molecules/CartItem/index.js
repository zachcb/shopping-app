import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

import Button from "../../atoms/Button";
import Incrementer from "../../atoms/Incrementer";

const CartItem = ({ id, title, quantity, handleIncrement }) => (
  <div className={styles.wrapper}>
    <Button handleClick={() => handleIncrement({ cartItemID: id, quantity: 0 })}>X</Button>
    <span className={styles.title}>{title}</span> <Incrementer count={quantity} handleIncrement={(quantity) => handleIncrement({ cartItemID: id, quantity })} />
  </div>
);

CartItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  quantity: PropTypes.number,
  handleIncrement: PropTypes.func
};

export default CartItem;
