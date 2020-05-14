import React from "react";
import styles from "./about-title.module.scss";

export const AboutTitle = () => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Ukraine</span>
      <div className={styles.content}>
        <p className={styles.block}>
          This report provides a series of summary charts, statistics and other
          details about the mobilization and use of open-access species data
          through the GBIF network, relating to users and participating
          institutions in Ukraine. These metrics show status at the time of
          report generation, unless otherwise noted.
        </p>
        <p className={styles.block}>
          Taken together, the elements of this report can help guide and measure
          progress toward the information needs for biodiversity research, as
          well as for national commitments on biodiversity and sustainable
          development.
        </p>
      </div>
    </div>
  );
};
