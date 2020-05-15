import React from "react";
import styles from "./about.module.scss";
import { AboutTitle } from "./about-title";
import { AboutMap } from "./about-map";
import {AboutDataUkrain} from './about-data-ukrain'
import {aboutConfig} from "./aboutDataUkrain.config";



export const AboutPage = () => {
  return (
    <div className={styles.container}>
        <AboutTitle />
        <AboutMap />
        <AboutDataUkrain aboutDataUkrain={aboutConfig.group}/>
      </div>
  );
};
