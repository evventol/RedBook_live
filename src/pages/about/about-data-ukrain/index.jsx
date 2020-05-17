import React from "react";
import styles from "./about-data-ukrain.module.scss";
import { aboutConfig } from "./about-data-ukrain.config";
import AboutDataItem from "./about-data-item";
import { AboutBlock } from "../about-block";


export const AboutDataUkrain = () => {

  const aboutDataUkrain = () =>(
  aboutConfig.groups.map((el) => <AboutDataItem {...el} />
  ));

  return (

    <AboutBlock
      title={"Дані по Україні"}
      description={"Загальна інформація, доступна для вибраних таксономічних груп в Україні"}
    ><div className={styles.content}>{aboutDataUkrain()}</div>
    </AboutBlock>
  );
};
