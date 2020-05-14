import React from 'react'
import styles from '../aside.module.scss'
import InputCheckbox from '../../sidebar/inputCheckbox'

const OpenSpatialBases = (props) => {
  let openSpatialBasesCheckbox = props.openSpatialBasesData.map((input) => (
    <InputCheckbox id={input.id} htmlFor={input.htmlFor} title={input.title} />
  ))
  return (
    <>
      <h3 className={styles.h3 + ' ' + styles.title}>
        Відкриті просторові дані
      </h3>
      {openSpatialBasesCheckbox}
    </>
  )
}

export default OpenSpatialBases
