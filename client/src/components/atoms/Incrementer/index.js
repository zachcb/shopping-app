import React from "react";
import PropTypes from "prop-types"
import styles from "./styles.module.css";

import Button from "../Button";

const Incrementer = ({ count, handleIncrement }) => <div><Button handleClick={() => handleIncrement(count - 1)}>-</Button><input className={styles.incrementer} type="number" name="incrementer" value={count} step="1" onChange={(event) => event.target.value && handleIncrement(event.target.value)}/><Button handleClick={() => handleIncrement(count + 1)}>+</Button></div>;

Incrementer.defaultProps = {
  count: 0
}

Incrementer.propTypes = {
  count: PropTypes.number,
  handleIncrement: PropTypes.func
}

export default Incrementer;
