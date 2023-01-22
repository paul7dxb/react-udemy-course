import React from "react";
import styles from './User.module.css'

const User = (props) => {
  return (
    <p className={styles.userItem}>
      {props.username} ({props.age} years old)
    </p>
  );
};

export default User;
