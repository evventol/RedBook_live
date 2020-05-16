import React from "react";
import styles from "./header.module.scss";
import { headerConfig } from "./header.config";
import LanguageDropdown from "./language-dropdown/language-dropdown";
import { NavbarLink } from "../navbar-item";

export const Header = () => {
  const renderTabs = () =>
    headerConfig.tabs.map((el) => <NavbarLink {...el} />);

  return (
    <header className={styles.header}>
      <span className={styles.name}>
        <span className={styles.name__red}>Red</span>
        Book live
      </span>
      <ul className={styles.navigation}>
        {renderTabs()}
        <LanguageDropdown />
      </ul>
    </header>
  );
};
