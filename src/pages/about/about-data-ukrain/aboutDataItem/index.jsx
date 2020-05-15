import React from "react";
import styles from "./aboutDataItem.module.scss";

const AboutDataItem = (props) => {
  return (
    <div className={styles.aboutDataItem}>
      <div className={styles.blockDataItem}>
        <img className={styles.img} src={props.imgSrc} alt="img"></img>
      </div>
      <span>{props.groupName}</span>
      <span className={styles.span}>{props.amount}</span>
      <span>{props.occurrences}</span>
    </div>
  );
};

export default AboutDataItem;
