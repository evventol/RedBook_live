import React from "react";
import styles from "./info-block.module.scss";

export const InfoBlock = ({
  title,
  titleComponent,
  listInfo: { listTitle, rows },
  imgSrc,
  additionalInfo,
}) => {
  const ListRow = ({ color, percentage, description }) => (
    <li className={styles.row}>
      <span className={styles.dot} style={{ backgroundColor: color }} />
      <span className={styles.percentage}>{percentage}</span>
      <span>{description}</span>
    </li>
  );

  const renderRows = () => rows.map((el) => <ListRow {...el} key={el.color} />);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span>{title.toUpperCase()}</span>
        {titleComponent}
      </div>
      <div className={styles.info}>
        <ul className={styles.list}>
          <div className={styles.listTitle}>{listTitle}</div>
          {renderRows()}
        </ul>
        <img className={styles.img} src={imgSrc} alt="img" />
      </div>
      <div className={styles.additionalInfo}>{additionalInfo}</div>
    </div>
  );
};
