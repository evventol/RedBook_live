import React from "react";
import styles from "./about-dataItem.module.scss";

const AboutDataItem = ({ imgSrc, groupName, amount, occurrences }) => {
  return (
    <div className={styles.group}>
      <div className={styles.image}>
        <img src={imgSrc} alt="img" />
      </div>
      <span className={styles.text}>{groupName}</span>
      <span className={styles.amount}>{amount}</span>
      <span className={styles.text}>{occurrences}</span>
    </div>
  );
};

export default AboutDataItem;
