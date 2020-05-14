import React from 'react';
import styles from './footer.module.scss';
import faceBook from '../../img/facebook.svg';
import instagram from '../../img/instagram.svg';
import youTuBe from '../../img/youtube.svg';
import copyrightLogo from '../../img/copyright.svg';


export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.name__with__copyright}>
        <span className={styles.name}>RedBook live</span>
        <div className={styles.copyright}>
          <span className={styles.logo}><img src={copyrightLogo} alt=""/></span>
          <span className={styles.text}>Copyright</span>
        </div>
      </div>

      <nav>
        <ul className={styles.navigation}>
          <li className={styles.tab}>Про Нас</li>
          <li className={styles.tab}>Проект</li>
          <li className={styles.tab}>Організації</li>
          <li className={styles.tab}>Важливі Ділянки</li>
          <li className={styles.tab}>Контакти</li>
        </ul>
      </nav>

      <div className={styles.social__net}>
        <span className={styles.logo}><img src={faceBook} alt=""/></span>
        <span className={styles.logo}><img src={instagram} alt=""/></span>
        <span className={styles.logo}><img src={youTuBe} alt=""/></span>
      </div>
    </footer>
  )
}
