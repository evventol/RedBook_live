import React from 'react'
import styles from './selectTaxon.module.scss'

class SelectTaxon extends React.Component {

  render() {
    return (
      <div className={styles.taxon}>
        <h2 className={styles.h2}>Назва Таксону</h2>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Охоронний статус</legend>
          <p>
            <input
              className={styles.input}
              id="red-book-ukraine"
              type="checkbox"
              name="option"
              value=""
            />
            <label className={styles.label} htmlFor="red-book-ukraine">
            Червона Книга України
            </label>
          </p>

          <p>
            <input
              className={styles.input}
              id="red-list"
              type="checkbox"
              name="option"
              value=""
            />
            <label className={styles.label} htmlFor="red-list">
            Червоний список МСОП
            </label>
          </p>

          <p>
            <input
              className={styles.input}
              id="no-data"
              type="checkbox"
              name="option"
              value=""
            />
            <label className={styles.label} htmlFor="no-data">
            Немає даних
            </label>
          </p>
          <legend className={styles.legend}>Джерело даних</legend>

        </fieldset>
      </div>
    )
  }
}

export default SelectTaxon
