import React from "react";
import styles from "./aboutDataUkrain.module.scss";
import { aboutConfig } from "../aboutDataUkrain.config.js";
import AboutDataItem from "./aboutDataItem";
import { AboutBlock } from "../about-block";


export const AboutDataUkrain = () => {
  

  const aboutDataUkrain = () =>(
  aboutConfig.groups.map((el) => <AboutDataItem {...el} />
  ));

  return (

    <AboutBlock>
      <div className={styles.title}>
        <h2 className={styles.h2}>Дані по Україні</h2>
        <h3 className={styles.h3}>
          Загальна інформація, доступна для вибраних таксономічних груп в
          Україні
        </h3>
      </div>
      <div className={styles.aboutDataUkrain}>{aboutDataUkrain()}</div>
    </AboutBlock>
  );
};