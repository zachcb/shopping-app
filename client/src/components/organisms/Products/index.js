import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";

import ProductCard from "../../molecules/ProductCard";
import styles from "./styles.css";

const Products = ({ products }) => (
  <div className={styles.wrapper}>
    {_.map(products, product => (
      <ProductCard {...product} />
    ))}
  </div>
);

Products.propTypes = {
  products: PropTypes.object
};

export default Products;
