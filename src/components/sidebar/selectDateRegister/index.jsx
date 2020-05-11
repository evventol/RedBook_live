import React from 'react'
import styles from './selectDateRegister.module.scss'

const SelectDataRegister = () => {
  return (
    <div className={styles.dataRegister}>
      <h2 className={styles.h2}>Дата реєстрації</h2>

      <p className="fast-range">
        <label>
          <input
            type="range"
            className={styles.inputRange}
            min="1"
            max="10"
            step="1"
            value="7"
            name="years"
          />
        </label>
        <div className={styles.countYear}>
          <span className={styles.countYearStart + ' ' + styles.span}>
            1950 рік
          </span>
          <span className={styles.span + ' ' + styles.countYearEnd}>
            2015 рік
          </span>
        </div>
      </p>
    </div>
  )
}

export default SelectDataRegister
