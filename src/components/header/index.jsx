import React from 'react';
import styles from './header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <span className={styles.name}>
        <span>
          Red
        </span>
        Book live
      </span>
      <div className={styles.navigation}>
        <span>Про нас</span>
        <span>Проект</span>
        <span>Організації</span>
        <span>Важливі Ділянки</span>
        <span>Контакти</span>
        <span className={styles.change__lang}>
          <span>UA</span>
          <span className={styles.arrow}></span>
        </span>
      </div>
    </header>
  )
}
