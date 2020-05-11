import React from 'react';
import styles from './header.module.scss';
import { ReactComponent as FlagUk } from '../../img/ukraine.svg';
import { ReactComponent as FlagBg } from '../../img/bulgaria.svg';
import { ReactComponent as FlagMd } from '../../img/moldova.svg';
import { ReactComponent as FlagBy } from '../../img/belarus.svg';
import { ReactComponent as FlagGe } from '../../img/georgia.svg';
import { ReactComponent as FlagAm } from '../../img/armenia.svg';
import { ReactComponent as ArrowLang } from '../../img/arrow_icon_lang.svg';

export const Header = () => {
  return (
    <header className={styles.header}>
      <span className={styles.name}>
        <span className={styles.name__red}>
          Red
        </span>
        Book live
      </span>
      <div className={styles.navigation}>
        <span className={styles.tab}>Про Нас</span>
        <span className={styles.tab}>Проект</span>
        <span className={styles.tab}>Організації</span>
        <span className={styles.tab}>Важливі Ділянки</span>
        <span className={styles.tab}>Контакти</span>
        <div className={styles.change__lang}>
          <span className={styles.flag}><FlagUk /></span>
          <span className={styles.tab}>UA</span>
          <span className={styles.arrow}><ArrowLang /></span>
        </div>
        
      </div>
      <div className={styles.list__lang}>
          <div className={styles.language}>
            <span className={styles.flag}><FlagBg /></span>
            <span className={styles.tab}>BG</span>
          </div>
          <div className={styles.language}>
            <span className={styles.flag}><FlagMd /></span>
            <span className={styles.tab}>MD</span>
          </div>
          <div className={styles.language}>
            <span className={styles.flag}><FlagBy /></span>
            <span className={styles.tab}>BY</span>
          </div>
          <div className={styles.language}>
            <span className={styles.flag}><FlagGe /></span>
            <span className={styles.tab}>GE</span>
          </div>
          <div className={styles.language}>
            <span className={styles.flag}><FlagAm /></span>
            <span className={styles.tab}>AM</span>
          </div>
        </div>
    </header>
  )
}
