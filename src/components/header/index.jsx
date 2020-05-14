import React from 'react';
import styles from './header.module.scss';
import flagUk from '../../img/ukraine.svg';
import flagBg from '../../img/bulgaria.svg';
import flagMd from '../../img/moldova.svg';
import flagBy from '../../img/belarus.svg';
import flagGe from '../../img/georgia.svg';
import flagAm from '../../img/armenia.svg';
import arrowLang from '../../img/arrow_icon_lang.svg';
import line_between_lang from '../../img/Line_between_lang.svg';

export const Header = () => {
  return (
    <header className={styles.header}>
      <span className={styles.name}>
        <span className={styles.name__red}>
          Red
        </span>
        Book live
      </span>
      <nav>
        <ul className={styles.navigation}>
          <li className={styles.tab}>Про Нас</li>
          <li className={styles.tab}>Проект</li>
          <li className={styles.tab}>Організації</li>
          <li className={styles.tab}>Важливі Ділянки</li>
          <li className={styles.tab}>Контакти</li>
          <li className={styles.tab}>
            <div className={styles.language}>
              <span className={styles.flag}><img src={flagUk} alt=""/></span>
              <span className={styles.tab}>UA</span>
              <span className={styles.arrow}><img src={arrowLang} alt=""/></span>
            </div>
            <ul className={styles.change__lang}>
              <li className={styles.language}>
                <span className={styles.flag}><img src={flagBg} alt=""/></span>
                <span className={styles.tab}>BG</span>
              </li>
              <img src={line_between_lang} alt=""/>
              <li className={styles.language}>
                <span className={styles.flag}><img src={flagMd} alt=""/></span>
                <span className={styles.tab}>MD</span>
              </li>
              <img src={line_between_lang} alt=""/>
              <li className={styles.language}>
                <span className={styles.flag}><img src={flagBy} alt=""/></span>
                <span className={styles.tab}>BY</span>
              </li>
              <img src={line_between_lang} alt=""/>
              <li className={styles.language}>
                <span className={styles.flag}><img src={flagGe} alt=""/></span>
                <span className={styles.tab}>GE</span>
              </li>
              <img src={line_between_lang} alt=""/>
              <li className={styles.language}>
                <span className={styles.flag}><img src={flagAm} alt=""/></span>
                <span className={styles.tab}>AM</span>
              </li>
            </ul>
          </li>

        </ul>
      </nav>
    </header>
  )
}
