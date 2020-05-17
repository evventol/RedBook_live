import React from "react";
import styles from "./about-data-countres.module.scss";
import { aboutCountresConfig } from "./about-data-counres.config";
import { DataCountryItem } from "./data-country-item";
import pieChartIcon from "../../../img/data-of-countres/pie_chart_icon_digram.svg";
import pieChart from "../../../img/data-of-countres/pie-chart (1) 1.svg";
import barChart from "../../../img/data-of-countres/bar-chart 1.svg";


export const AboutDataCountres = () => {

  const aboutDataCountres = () => (
    aboutCountresConfig.countres.map((el) => <DataCountryItem {...el} />
  ));

  return (
    <div className={styles.container}>

        <div className={styles.header}>
            <div className={styles.title}>Опубліковані дані інших країн</div>
            <div className={styles.nav}>
                <img className={styles.nav__item} src={pieChartIcon} />
                <img className={styles.nav__item} src={pieChart} />
                <img className={styles.nav__item} src={barChart} />
            </div>
        </div>

        <div className={styles.content}>  
            <div className={styles.title__columns}>
                <div className={styles.title}>Країна чи область видавництва</div>
                <div className={styles.title}>Кількість публікацій</div>
                <div></div>
            </div>
        
            {aboutDataCountres()}
        </div>  
        
    </div>
  );
};