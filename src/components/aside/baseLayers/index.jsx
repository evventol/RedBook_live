import React from 'react'
import styles from '../aside.module.scss'
import InputCheckbox from '../../sidebar/inputCheckbox'

const BaseLayers = (props) => {
  let baseLayersCheckbox = props.baseLayersData.map((input) => (
    <InputCheckbox id={input.id} htmlFor={input.htmlFor} title={input.title} />
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
