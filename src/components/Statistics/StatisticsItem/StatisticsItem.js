import React from "react";
import PropTypes from "prop-types";
import styles from "../Statistics.module.css";

const StatisticsItem = ({ label, percentage }) => {
  let color = Math.floor(Math.random() * 256);
  let colorTwo = Math.floor(Math.random() * 256);
  let colorThree = Math.floor(Math.random() * 256);
  let backgroundColor = `rgba(${color}, ${colorTwo}, ${colorThree})`;
  return (
    <li
      className={styles.statisticsItem}
      style={{ backgroundColor: `${backgroundColor}` }}
    >
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  );
};

export default StatisticsItem;

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
