import React from 'react'
import styles from '../sidebar.module.scss'
import ImputCheckbox from '../imputCheckbox'

const PositioningError = (props) => {
  let positioningErrorCheckbox = props.positioningErrorData.map((input) => (
    <ImputCheckbox id={input.id} htmlFor={input.htmlFor} title={input.title} />
  ))
  return (
    <div className={styles.dataRegister}>
      <h2 className={styles.h2}>Похибка позиціювання</h2>
      {positioningErrorCheckbox}
    </div>
  )
}

export default PositioningError
