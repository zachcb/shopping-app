import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

import CartItem from "../../molecules/CartItem";

const CartSidebar = ({ cartItems, handleUpdateCartItem }) => {
  const cartItemElements = _.filter(_.map(cartItems, item => item.quantity > 0 &&
    <CartItem
      key={item.id}
      id={item.id}
      title={_.get(item, "products.title", "Can't find product")}
      quantity={item.quantity}
      handleIncrement={handleUpdateCartItem}
    />
  ), (item) => item);

  return (
    <aside className={styles.wrapper}>
    {_.isEmpty(cartItems) || _.isEmpty(cartItemElements) ? (
      <span className={styles["empty-message"]}>Empty Cart</span>
    ) : (
      <div className={styles["list-container"]}>
      {cartItemElements}
      </div>
    )}
  </aside>
  )
};

CartSidebar.propTypes = {
  cartItems: PropTypes.object,
  handleUpdateCartItem: PropTypes.func
};

export default CartSidebar;
