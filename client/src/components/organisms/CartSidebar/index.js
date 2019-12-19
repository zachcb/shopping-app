import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

import CartItem from "../../molecules/CartItem";

const CartSidebar = ({ cartItems, handleUpdateCartItem }) => (
  <aside className={styles.wrapper}>
    {_.isEmpty(cartItems) ? (
      <span className={styles["empty-message"]}>Empty Cart</span>
    ) : (
      _.map(cartItems, item => <CartItem {...item} handleUpdateCartItem={handleUpdateCartItem} />)
    )}
  </aside>
);

CartSidebar.propTypes = {
  cartItems: PropTypes.object,
  handleUpdateCartItem: PropTypes.func
};

export default CartSidebar;
