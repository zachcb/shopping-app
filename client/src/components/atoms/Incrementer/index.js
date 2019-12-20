import React from "react";
import PropTypes from "prop-types"
import styles from "./styles.css";

const Incrementer = ({ count }) => <input type="number" name="points" step={count} />;

Incrementer.defaultProps = {
  count: 0
}

Incrementer.propTypes = {
  count: PropTypes.number
}

export default Incrementer;
