import React from "react";
import styles from "./FriendList.module.css";
import Friend from "./FriendListItem/FriendListItem";
import PropTypes from "prop-types";

const Friends = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map((el) => {
        return <Friend el={el} />;
      })}
    </ul>
  );
};

export default Friends;

Friends.propTypes = {
  friends: PropTypes.array.isRequired,
};
