import React from "react";
import PropTypes from "prop-types";

import CartSidebar from "../../organisms/CartSidebar";
import Products from "../../organisms/Products";
import styles from "./styles.module.css";

const HomeTemplate = ({ products, handleAddCartItem, handleUpdateCartItem }) => (
  <div className={styles.wrapper}>
    <Products products={products} handleAddCartItem={handleAddCartItem} />
    <CartSidebar handleUpdateCartItem={handleUpdateCartItem} />
  </div>
);

HomeTemplate.propTypes = {
  cartItems: PropTypes.object,
  products: PropTypes.array,
  handleAddCartItem: PropTypes.func,
  handleUpdateCartItem: PropTypes.func
};

export default HomeTemplate;
