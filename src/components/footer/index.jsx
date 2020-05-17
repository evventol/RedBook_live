import React from "react";
import styles from "./footer.module.scss";
import facebook from "../../img/facebook.svg";
import instagram from "../../img/instagram.svg";
import youtube from "../../img/youtube.svg";
import copyrightLogo from "../../img/copyright.svg";
import fullLogo from "../../img/full_logo.svg";

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
          <a
            href="https://www.facebook.com/gbifnews"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={styles.link} src={facebook} alt="link" />
          </a>
          <a
            href="https://www.instagram.com/gbifs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={styles.link} src={instagram} alt="link" />
          </a>
          <a
            href="https://www.youtube.com/user/GBIFvideo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={styles.link} src={youtube} alt="link" />
          </a>
        </div>
      </div>
      <div>
        <div>
          <img src={copyrightLogo} alt="c" />
          <span className={styles.text}>Copyright</span>
        </div>
        <div>
          <img src={fullLogo} alt="logo" />
        </div>
      </div>
    </footer>
  );
};
