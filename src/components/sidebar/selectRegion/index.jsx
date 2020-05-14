import React, {useState} from 'react'
import styles from './selectRegion.module.scss'

const SelectRegion = (props) => {
  const [isShown, setIsShown] = useState(true);

  const toggleFIeldset = () => setIsShown(!isShown);
  return (
    <div className={styles.selectRegion}>
      <h2 className={styles.h2} onClick={toggleFIeldset}>Регіон</h2>
      {isShown &&
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Район</legend>
        <p>
          <input
            className={styles.input}
            id="city"
            type="text"
            name="option"
            value=""
          />
          <label className={styles.label} htmlFor="city"></label>
        </p>
      </fieldset>
}
    </div>
  )
}

export default SelectRegion
