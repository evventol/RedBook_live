import React from 'react'
import styles from './selectTaxon.module.scss'
import ImputCheckbox from '../../sidebar/imputCheckbox'

const SelectTaxon = (props) => {
  let selectTaxonCheckbox = props.selectTaxonData.map((input) => (
    <ImputCheckbox id={input.id} htmlFor={input.htmlFor} title={input.title} />
  ))
  return (
    <div className={styles.taxon}>
      <h2 className={styles.h2}>Назва Таксону</h2>
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Охоронний статус</legend>
        {selectTaxonCheckbox}
        <legend className={styles.legend + ' ' + styles.legendTaxon}>Джерело даних</legend>
      </fieldset>
    </div>
  )
}

export default SelectTaxon
