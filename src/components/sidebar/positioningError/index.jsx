import React from 'react'
import styles from '../sidebar.module.scss'


const PositioningError = () => {
    return(
<div className={styles.dataRegister}>
      <h2 className={styles.h2}>Похибка позиціювання</h2>

      <p>
            <input
              className={styles.inputCheckbox}
              id="none-data"
              type="checkbox"
              name="option"
              value=""
            />
            <label className={styles.labelCheckbox} htmlFor="none-data">
            Немає даних
            </label>
          </p>

          <p>
            <input
              className={styles.inputCheckbox}
              id="up-to-30m"
              type="checkbox"
              name="option"
              value=""
            />
            <label className={styles.labelCheckbox} htmlFor="up-to-30m">
            До 30 м            </label>
          </p>

          <p>
            <input
              className={styles.inputCheckbox}
              id="up-to-100m"
              type="checkbox"
              name="option"
              value=""
            />
            <label className={styles.labelCheckbox} htmlFor="up-to-100m">
            До 100 м
            </label>
          </p>
          <p>
            <input
              className={styles.inputCheckbox}
              id="up-to-1km"
              type="checkbox"
              name="option"
              value=""
            />
            <label className={styles.labelCheckbox} htmlFor="up-to-1km">
            До 1 км
            </label>
          </p>
          <p>
            <input
              className={styles.inputCheckbox}
              id="more-than-1km"
              type="checkbox"
              name="option"
              value=""
            />
            <label className={styles.labelCheckbox} htmlFor="more-than-1km">
            Понад 1 км
            </label>
          </p>
    </div>
    )
}

export default PositioningError
