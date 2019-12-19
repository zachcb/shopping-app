import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.css";

const ProductCard = ({ id, title, description, imageUrl, handleAddCartItem }) => (
  <div className={styles.wrapper} onClick={() => handleAddCartItem(id)}>
    <div className={styles["img-container"]}>
      <img src={imageUrl}></img>
    </div>
    <div className={styles.content}>
      <header>{title}</header>
      <p>{description}</p>
    </div>
  </div>
);

ProductCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  handleAddCartItem: PropTypes.func
};

export default ProductCard;
