import React from 'react';
import styles from './footer.module.scss';
import { ReactComponent as FaceBook } from '../../img/facebook.svg';
import { ReactComponent as Instagram } from '../../img/instagram.svg';
import { ReactComponent as YouTuBe } from '../../img/youtube.svg';
import { ReactComponent as CopyrightLogo } from '../../img/copyright.svg';


export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.name__with__copyright}>
        <span className={styles.name}>RedBook live</span>
        <div className={styles.copyright}>
          <span className={styles.logo}><CopyrightLogo /></span>
          <span className={styles.text}>Copyright</span>
        </div>
      </div>

      <div className={styles.navigation}>
        <span className={styles.tab}>Про Нас</span>
        <span className={styles.tab}>Проект</span>
        <span className={styles.tab}>Організації</span>
        <span className={styles.tab}>Важливі Ділянки</span>
        <span className={styles.tab}>Контакти</span>
      </div>

      <div className={styles.social__net}>
        <span className={styles.logo}><FaceBook /></span>
        <span className={styles.logo}><Instagram /></span>
        <span className={styles.logo}><YouTuBe/></span>
      </div>
    </footer>
  )
}
