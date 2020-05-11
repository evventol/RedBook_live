import React from 'react'
import styles from '../aside.module.scss'

const Biodiversity = () => {
  return (
    <>
      <h3 className={styles.h3 + ' ' + styles.title}>Біорізноманіття</h3>
      <p>
        <input
          className={styles.inputCheckbox}
          id="gbif"
          type="checkbox"
          name="option"
          value=""
        />
        <label className={styles.labelCheckbox} htmlFor="gbif">
          GBIF
        </label>
      </p>

      <p>
        <input
          className={styles.inputCheckbox}
          id="other"
          type="checkbox"
          name="option"
          value=""
        />
        <label className={styles.labelCheckbox} htmlFor="other">
          інше
        </label>
      </p>
    </>
  )
}

export default Biodiversity
