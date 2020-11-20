import React from "react";
import styles from "../Profile.module.css";
import PropTypes from "prop-types";

const StatsItem = ({ el: [key, value] }) => {
  return (
    <li>
      <span className={styles.label}> {key} </span>
      <span className={styles.quantity}> {value} </span>
    </li>
  );
};

export default StatsItem;

StatsItem.propTypes = {
  el: PropTypes.array.isRequired,
};
