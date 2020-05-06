import React from 'react'
import styles from './selectRegion.module.scss'

export default function SelectRegion() {
  return (
    <div className={styles.selectRegion}>
      <h2 className={styles.h2}>Регіон</h2>
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Район</legend>
        <p>
          <input
            className={styles.input}
            id="city"
            type="text"
            name="option"
            value=""
          />
          <label className={styles.label} htmlFor="city"></label>
        </p>
      </fieldset>
    </div>
  )
}
