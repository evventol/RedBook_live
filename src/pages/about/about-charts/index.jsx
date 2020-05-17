import React from "react";
import { AboutBlock } from "../about-block";
import { aboutChartBlockConfig as config } from "./about-charts.config";
import { InfoBlock } from "./info-block";
import styles from "./about-chart.module.scss";
import pieChartIcon from "../../../img/data-of-countres/pie_chart_icon_digram.svg";
import pieChart from "../../../img/data-of-countres/pie-chart (1) 1.svg";
import barChart from "../../../img/data-of-countres/bar-chart 1.svg";

export const AboutCharts = () => {
  const {
    blockTitle,
    blockDescription,
    infoBlocksInfo: { monthly, special },
    listInfo,
    blockInfo,
  } = config;

  const specialTitleComonent = () => (
    <div className={styles.specialTitleComponent}>
      <img className={styles.icon} src={pieChartIcon} alt="icon" />
      <img className={styles.icon} src={pieChart} alt="icon" />
      <img className={styles.icon} src={barChart} alt="icon" />
    </div>
  );

  const monthlyTitleComponent = () => (
    <div className={styles.montlyTitleComponent}>
      <span>Liner</span>
      <span>Logarithmic</span>
    </div>
  );

  return (
    <AboutBlock title={blockTitle} description={blockDescription}>
      <div className={styles.infoBlocksContainer}>
        <InfoBlock
          title={special.title}
          titleComponent={specialTitleComonent()}
          listInfo={listInfo.special}
          imgSrc={listInfo.special.imgSrc}
          additionalInfo={special.additionalInfo}
        />
        <InfoBlock
          title={monthly.title}
          titleComponent={monthlyTitleComponent()}
          listInfo={listInfo.monthly}
          imgSrc={listInfo.monthly.imgSrc}
          additionalInfo={special.additionalInfo}
        />
      </div>
      <div className={styles.blockInfoContainer}>
        <div className={styles.title}>{blockInfo.title}</div>
        <div className={styles.description}>{blockInfo.description}</div>
      </div>
    </AboutBlock>
  );
};
