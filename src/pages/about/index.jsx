import React from "react";
import styles from "./about.module.scss";
import { AboutTitle } from "./about-title";
import { AboutMap } from "./about-map";
import { AboutDataUkrain } from "./about-data-ukrain";
import { AboutDataCountres } from "./about-data-countres";

export const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <AboutTitle />
        <AboutMap />
        <AboutDataUkrain />
        <AboutDataCountres />
      </div>
    </div>
  );
};
