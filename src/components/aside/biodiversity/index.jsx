import React from 'react'
import styles from '../aside.module.scss'
import ImputCheckbox from '../../sidebar/imputCheckbox'

const Biodiversity = (props) => {
  let biodiversityCheckbox = props.biodiversityData.map((input) => (
    <ImputCheckbox id={input.id} htmlFor={input.htmlFor} title={input.title} />
  ))
  return (
    <>
      <h3 className={styles.h3 + ' ' + styles.title}>Біорізноманіття</h3>
      {biodiversityCheckbox}
    </>
  )
}

export default Biodiversity
