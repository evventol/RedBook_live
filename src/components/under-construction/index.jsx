import React from "react";
import styles from "./under-construction.module.scss";
import cogs from "../../img/cogs.svg";

export const UnderConstruction = () => {
  return (
    <div className={styles.container}>
      <img src={cogs} className={styles.large} alt="cogs" />
      <img
        src={cogs}
        className={[styles.less, styles.up].join(" ")}
        alt="cogs"
      />
      <img
        src={cogs}
        className={[styles.less, styles.down].join(" ")}
        alt="cogs"
      />
    </div>
  );
};
