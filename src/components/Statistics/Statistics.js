import React from "react";
import styles from "./Statistics.module.css";
import StatisticsItem from "./StatisticsItem/StatisticsItem.js";
import PropTypes from "prop-types";

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.statisticsTitle}>{title}</h2>}
      <ul className={styles.statList}>
        {stats.map((el) => {
          return (
            <StatisticsItem
              key={el.id}
              label={el.label}
              percentage={el.percentage}
            />
          );
        })}
      </ul>
    </section>
  );
};
export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
