import React from "react";
import PropTypes from "prop-types";

import CartSidebar from "../../organisms/CartSidebar";
import Products from "../../organisms/Products";
import styles from "./styles.module.css";

const HomeTemplate = ({ cartItems, products, handleAddCartItem, handleUpdateCartItem }) => (
  <div className={styles.wrapper}>
    <Products className={styles.products} products={products} handleAddCartItem={handleAddCartItem} />
    <CartSidebar cartItems={cartItems} handleUpdateCartItem={handleUpdateCartItem} />
  </div>
);

HomeTemplate.propTypes = {
  cartItems: PropTypes.object,
  products: PropTypes.array,
  handleAddCartItem: PropTypes.func,
  handleUpdateCartItem: PropTypes.func
};

export default HomeTemplate;
