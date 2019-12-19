import React from "react";
import PropTypes from "prop-types";

import CartSidebar from "../../organisms/CartSidebar";
import Products from "../../organisms/Products";
import styles from "./styles.css";

const HomeTemplate = ({ products, handleUpdateCartItem }) => (
  <div className={styles.wrapper}>
    <Products products={products} />
    <CartSidebar handleUpdateCartItem={handleUpdateCartItem} />
  </div>
);

HomeTemplate.propTypes = {
  cardID: PropTypes.string,
  cartItems: PropTypes.object,
  products: PropTypes.array,
  handleAddCartItem: PropTypes.func,
  handleUpdateCartItem: PropTypes.func
};

export default HomeTemplate;
