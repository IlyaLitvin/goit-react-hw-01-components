import React from "react";
import styles from "../FriendList.module.css";
import PropTypes from "prop-types";

const FriendList = ({ el }) => {
  return (
    <li className={styles.item}>
      <img className={styles.friendAvatar} src={el.avatar} alt="" width="48" />
      <p className={styles.friendName}>{el.name}</p>
      {el.isOnline ? (
        <span className={styles.online}></span>
      ) : (
        <span className={styles.offline}></span>
      )}
    </li>
  );
};

export default FriendList;

FriendList.propTypes = {
  el: PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }),
};
