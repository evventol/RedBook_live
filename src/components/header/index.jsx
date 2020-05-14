import React from 'react';
import styles from './header.module.scss';
import { headerConfig } from './header.config';
import LanguageDropdown from './language-dropdown/language-dropdown';

export const Header = () => {
  const renderTabs = () => headerConfig.tabs.map(el => <li className={styles.tab}>{el.tabName}</li>);

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
          {renderTabs()}
          <LanguageDropdown />
        </ul>
      </nav>
    </header>
  )
}
