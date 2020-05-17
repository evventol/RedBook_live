import React from "react";
import styles from "./footer.module.scss";
import facebook from "../../img/facebook.svg";
import instagram from "../../img/instagram.svg";
import youtube from "../../img/youtube.svg";
import copyrightLogo from "../../img/copyright.svg";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <span className={styles.title}>RedBook live</span>
        <ul className={styles.tabs}>
          <li className={styles.tab}>Про Нас</li>
          <li className={styles.tab}>Проект</li>
          <li className={styles.tab}>Організації</li>
          <li className={styles.tab}>Важливі Ділянки</li>
          <li className={styles.tab}>Контакти</li>
        </ul>
        <div className={styles.links}>
          <img className={styles.link} src={facebook} alt="link" />
          <img className={styles.link} src={instagram} alt="link" />
          <img className={styles.link} src={youtube} alt="link" />
        </div>
      </div>
      <div>
        <img src={copyrightLogo} alt="" />
        <span className={styles.text}>Copyright</span>
      </div>
    </footer>
  );
};
