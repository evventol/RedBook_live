import React from 'react'
import styles from '../aside.module.scss'
import ImputCheckbox from '../../sidebar/imputCheckbox'

const BaseLayers = (props) => {
  let baseLayersCheckbox = props.baseLayersData.map((input) => (
    <ImputCheckbox id={input.id} htmlFor={input.htmlFor} title={input.title} />
  ))

  return (
    <>
      <h3 className={styles.h3}>Базові шари</h3>
      {baseLayersCheckbox}
      <p>більше...</p>
    </>
  )
}

export default BaseLayers
