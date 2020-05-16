import React from "react";
import styles from "./language-dropdown.module.scss";

export const LanguageDropdownRow = ({ onSelect, shortcut, imgSrc }) => {
  const onRowSelect = () => onSelect(shortcut);

  return (
    <div
      className={[styles.selected, styles.dropdownItem].join(" ")}
      onClick={onRowSelect}
    >
      <img className={styles.flag} src={imgSrc} alt="flag" />
      <span>{shortcut}</span>
    </div>
  );
};
