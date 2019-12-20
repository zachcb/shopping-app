import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

const Button = ({ handleClick, type = "close", children }) => <button className={styles[`button-${type}`]} onClick={handleClick}>{children}</button>;

Button.propTypes = {
  handleClick: PropTypes.func,
  type: PropTypes.string,
  children: PropTypes.any.isRequired
}

export default Button;
