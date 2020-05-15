import React from "react";
import styles from "./about.module.scss";
import { AboutTitle } from "./about-title";
import { AboutMap } from "./about-map";
import { AboutDataOfUkraine } from "./about-data-of-ukraine";

export const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <AboutTitle />
        <AboutMap />
        <AboutDataOfUkraine />
      </div>
    </div>
  );
};
