import React from 'react'
import styles from '../project.module.scss'
//import { projectConfig } from '../project.config'

export const ProjectTarget = () => {
  const projectList = () => {
    // projectConfig.blockTarget.list.map((li) => (<li>li.list</li>))
  }

  return (
    <article className={styles.article}>
      <div className={styles.blockText}>
        <h3 className={styles.h3}>RedBook live</h3>
        <p className={styles.paragraph}>
          Мета і завдання - надати основним групам користувачів можливість
          зручного вивчення даних з біорізноманіття з GBIF DB. Пошук, фільтри,
          перегляд ітп.
        </p>
        <ul>
          <li className={styles.li}>
            <span className={styles.span}>
              Перегляд всіх даних GBIF по Україні або іншій країні
            </span>{' '}
          </li>
          <li className={styles.li}>
            <span className={styles.span}>
              Сортування по рідкісним та таким, що мають високий охоронний
              статус, просторова фільтрація
            </span>
          </li>
        </ul>
      </div>
      <div className={styles.blockImg}>
        <img src="../../../img/project/projectTarget.jpg" alt="dragonfly" />
      </div>
    </article>
  )
}
