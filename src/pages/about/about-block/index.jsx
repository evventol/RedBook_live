import React from "react";
import styles from "./about-block.module.scss";

export const AboutBlock = ({ title, description, children }) => {
  return (
    <div className={styles.block}>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
      {children}
    </div>
  );
};
