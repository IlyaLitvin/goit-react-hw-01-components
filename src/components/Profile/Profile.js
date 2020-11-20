import React from "react";
import styles from "./Profile.module.css";
import StatsItem from "./statsItem/StatsItem.js";
import PropTypes from "prop-types";

const Profile = ({ user }) => {
  const { name, tag, location, avatar, stats } = user;
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt="user avatar" className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <ul className={styles.stats}>
        {Object.entries(stats).map((el) => {
          return <StatsItem key={stats[el[0]]} el={el} />;
        })}
      </ul>
    </div>
  );
};

export default Profile;

Profile.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.object,
  }),
};
