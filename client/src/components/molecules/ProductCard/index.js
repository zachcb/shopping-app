import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.css";

const ProductCard = ({ id, title, description, imageUrl, handleClick }) => (
  <div className={styles.wrapper} onClick={() => handleClick({ productID: id })}>
    <div className={styles["img-container"]}>
      <img src={imageUrl} alt="product"></img>
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
  handleClick: PropTypes.func
};

export default ProductCard;
