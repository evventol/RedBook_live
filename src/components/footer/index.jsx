import React from "react";
import styles from "./footer.module.scss";

import facebook from "../../img/facebook.svg";
import instagram from "../../img/instagram.svg";
import youtube from "../../img/youtube.svg";
import copyrightLogo from "../../img/copyright.svg";
import fullLogoGbif from "../../img/full_logo_white 1.svg";

import { headerConfig } from "../header/header.config";
import { NavbarLink } from "../navbar-item";

export const Footer = () => {

  const renderTabs = () =>
    headerConfig.tabs.map((el) => <NavbarLink {...el} />);

  return (
    <footer className={styles.footer}>
      <div className={styles.title__logo}>
        <div className={styles.title}>RedBook live</div>
        <div className={styles.copy__logo}>
          <img src={copyrightLogo} alt="img" />
          <span className={styles.text}>Copyright</span>
        </div>
      </div>

      <div className={styles.links__logo}>
        <ul className={styles.navigation}>
          {renderTabs()}
        </ul>
        <img className={styles.logo__gbif} src={fullLogoGbif} alt="img" />
      </div>
      
      <div className={styles.links}>
        <a href="https://www.facebook.com/gbifnews"><img className={styles.link} src={facebook} alt="link" /></a>
        <a href="https://www.youtube.com/user/GBIFvideo"><img className={styles.link} src={instagram} alt="link" /></a>
        <a href="https://www.instagram.com/gbifs/"><img className={styles.link} src={youtube} alt="link" /></a>
      </div>
      
      
    </footer>
  );
};
