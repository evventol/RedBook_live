import React from "react";
import styles from "./about-data-of-ukraine.module.scss";
import { dataConfig } from "./about-data-of-ukraine.config";
import { DataItem } from "./data-item"
 
export const AboutDataOfUkraine = () => {

    const renderGroups = () => {
        dataConfig.groups.map((el) => <DataItem {...el} />);
    }
    
  return (
    <div className={styles.block}>
      <div className={styles.title}>Дані по Україні</div>
      <div className={styles.description}>Total data available for selected taxonomic groups in Ukraine</div>
      <div className={styles.groups}>{renderGroups()}</div>
    </div>
  );
};
