import React from "react";
import styles from "./about-title.module.scss";

export const AboutTitle = () => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Ukraine</span>
      <div className={styles.content}>
        <p className={styles.block}>
          Цей доклад надає серію графіків, даних та інших деталей щодо
          використання даних з відкритим доступом за допомогою мережі GBIF, яка
          може бути корисна юзерам та зацікавленим організаціям. Ці метрики
          вказують стан на час генерації докладу.
        </p>
        <p className={styles.block}>
          Складові докладу можуть полегшити збір та обробку інформації для
          досліджувань біорізноманіття, а також міжнародним домовленностям щодо
          нього.
        </p>
      </div>
    </div>
  );
};
