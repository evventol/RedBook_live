import React from 'react'
import styles from '../project.module.scss'
import { projectConfig } from '../project.config'

export const ProjectField = () => {
  return (
    <div>
      <p>
        <span className={styles.bolt}>Сфери використання -</span> охорона природи, контроль дотримання
        природоохоронних норм, візуалізація та фільтрація у національному
        контексті.{' '}
      </p>
      <p>
        Національний портал має заохочувати використання даних через надання
        зручних функцій.
      </p>
    </div>
  )
}
