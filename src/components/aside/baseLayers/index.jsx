import React from 'react'
import styles from '../aside.module.scss'

const BaseLayers = () => {
  return (
    <>
      <h3 className={styles.h3}>Базові шари</h3>
      <p>
        <input
          className={styles.inputCheckbox}
          id="orthophotomap"
          type="checkbox"
          name="option"
          value=""
        />
        <label className={styles.labelCheckbox} htmlFor="orthophotomap">
          Ортофотоплани
        </label>
      </p>

      <p>
        <input
          className={styles.inputCheckbox}
          id="open-street-map"
          type="checkbox"
          name="option"
          value=""
        />
        <label className={styles.labelCheckbox} htmlFor="open-street-map">
          Open Street Map
        </label>
      </p>
      <p>
        <input
          className={styles.inputCheckbox}
          id="google-satellite"
          type="checkbox"
          name="option"
          value=""
        />
        <label className={styles.labelCheckbox} htmlFor="google-satellite">
          Google супутник
        </label>
      </p>
      <p>
        <input
          className={styles.inputCheckbox}
          id="google-hybrid"
          type="checkbox"
          name="option"
          value=""
        />
        <label className={styles.labelCheckbox} htmlFor="google-hybrid">
          Google гібрид
        </label>
      </p>
      <p>більше...</p>
    </>
  )
}

export default BaseLayers
