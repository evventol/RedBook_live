import React from "react";
import styles from "../project.module.scss";

export const ProjectTarget = () => {

  return (
    <article className={styles.article}>
      <div className={styles.blockText}>
        <h3 className={styles.h3}>RedBook live</h3>
        <p className={styles.paragraph}>
          Мета і завдання - надати основним групам користувачів можливість
          зручного вивчення даних з біорізноманіття з GBIF DB. Пошук, фільтри,
          перегляд ітп.
        </p>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <span className={styles.span}>
              Перегляд всіх даних GBIF по Україні або іншій країні
            </span>
          </li>
          <li className={styles.li}>
            <span className={styles.span}>
              Сортування по рідкісним та таким, що мають високий охоронний
              статус, просторова фільтрація
            </span>
          </li>
          <li className={styles.li}>
            <span className={styles.span}>
              Система для зручного вивчення статистики даних (у вигляді
              графіків, діаграм, дашборда) про поширення біологічних видів.
            </span>
          </li>
        </ul >
        <p className={styles.more}>детальніше</p>
      </div>
      <div className={styles.blockImg}>
        <img src="./../../../img/project/mainImg.jpg" alt="main-img" />
      </div>
    </article>
  );
};
