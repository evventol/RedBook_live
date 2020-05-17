import React from "react";
import styles from "./data-country-item.module.scss";

export const DataCountryItem = ({ country, amount, rectangle }) => {
  return (
    <div className={styles.country__row}>
      <div className={styles.country}>{country}</div>
      <div className={styles.amount}>{amount}</div>
      <img className={styles.rectangle} src={rectangle} alt="rect" />
    </div>
  );
};
