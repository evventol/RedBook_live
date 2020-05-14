import React from "react";
import styles from "./about.module.scss";
import { AboutTitle } from "./about-title";

export const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <AboutTitle />
      </div>
    </div>
  );
};
