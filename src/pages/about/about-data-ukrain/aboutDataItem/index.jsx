import React from "react";
import styles from "./aboutDataItem.module.scss";

const AboutDataItem = ({ imgSrc, groupName, amount, occurrences }) => {
  return (
    <div className={styles.aboutDataItem}>
      <div className={styles.blockDataItem}>
        <img src={imgSrc} alt="img" />
      </div>
      <span>{groupName}</span>
      <span className={styles.span}>{amount}</span>
      <span>{occurrences}</span>
    </div>
  );
};

export default AboutDataItem;
