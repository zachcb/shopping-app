import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";

import ProductCard from "../../molecules/ProductCard";
import styles from "./styles.module.css";

const Products = ({ products, handleAddCartItem }) => (
  <div className={styles.wrapper}>
    {_.map(products, product => (
      <ProductCard key={product.title} handleAddCartItem={handleAddCartItem} {...product} />
    ))}
  </div>
);

Products.propTypes = {
  products: PropTypes.array,
  handleAddCartItem: PropTypes.func
};

export default Products;
