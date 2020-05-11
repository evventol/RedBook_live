import React from 'react'
import styles from '../aside.module.scss'

const OpenSpatialBases = () => {
  return (
    <>
      <h3 className={styles.h3 + ' ' + styles.title}>Відкриті просторові дані</h3>
      <p>
        <input
          className={styles.inputCheckbox}
          id="kadastr"
          type="checkbox"
          name="option"
          value=""
        />
        <label className={styles.labelCheckbox} htmlFor="kadastr">
        Кадастровий поділ
        </label>
      </p>

      <p>
        <input
          className={styles.inputCheckbox}
          id="admin"
          type="checkbox"
          name="option"
          value=""
        />
        <label className={styles.labelCheckbox} htmlFor="admin">
        Адміністративний поділ
        </label>
      </p>

      <p>
        <input
          className={styles.inputCheckbox}
          id="soil"
          type="checkbox"
          name="option"
          value=""
        />
        <label className={styles.labelCheckbox} htmlFor="soil">
        Ґрунти
        </label>
      </p>
      <p>
        <input
          className={styles.inputCheckbox}
          id="nature-reserve-fund"
          type="checkbox"
          name="option"
          value=""
        />
        <label className={styles.labelCheckbox} htmlFor="nature-reserve-fund">
        ПЗФ
        </label>
      </p>
      <p>
        <input
          className={styles.inputCheckbox}
          id="water"
          type="checkbox"
          name="option"
          value=""
        />
        <label className={styles.labelCheckbox} htmlFor="water">
        Водоохоронні зони
        </label>
      </p>
      <p>
        <input
          className={styles.inputCheckbox}
          id="bowels"
          type="checkbox"
          name="option"
          value=""
        />
        <label className={styles.labelCheckbox} htmlFor="bowels">
        Геонадра
        </label>
      </p>
      <p>
        <input
          className={styles.inputCheckbox}
          id="emerald"
          type="checkbox"
          name="option"
          value=""
        />
        <label className={styles.labelCheckbox} htmlFor="emerald">
        Смарагдова мережа
        </label>
      </p>
      <p>
        <input
          className={styles.inputCheckbox}
          id="spatial-other"
          type="checkbox"
          name="option"
          value=""
        />
        <label className={styles.labelCheckbox} htmlFor="spatial-other">
        інше
        </label>
      </p>
    </>
  )
}

export default OpenSpatialBases
