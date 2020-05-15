import React from "react";
import styles from "./data-item.module.scss";

export const DataItem = ({ groupName, amount, occurrences, imgSrc }) => {
    return (
        <div className={styles.group}>
            <img className={styles.img} src={imgSrc} alt="img" />
            <span className={styles.groupName}>{groupName}</span>
            <span className={styles.amount}>{amount}</span>
            <span className={styles.occurrences}>{occurrences}</span>
        </div>
    )
};