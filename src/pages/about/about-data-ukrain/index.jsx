import React from "react";
import styles from "./aboutDataUkrain.module.scss";
import { aboutConfig } from "../aboutDataUkrain.config";
import AboutDataItem from "./aboutDataItem";

export const AboutDataUkrain = () => {
  let aboutDataUkrain = aboutConfig.groups.map((el) => (
    <AboutDataItem
      src={el.imgSrc}
      amount={el.amount}
      occurrences={el.occurrences}
      groupName={el.groupName}
    />
  ));

  return (
      <>
    <div className={styles.title}>
      <h2 className={styles.h2}>Дані по Україні</h2>
      <h3 className={styles.h3}>
        Total data available for selected taxonomic groups in Ukraine
      </h3>
      </div>
      <div className={styles.aboutDataUkrain}>{aboutDataUkrain}</div>
    </>
  )
}
