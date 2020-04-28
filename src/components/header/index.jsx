import React from 'react';
import styles from './header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      Welcome to the <span className={styles.name}>RedBook live</span>
    </header>
  )
}
