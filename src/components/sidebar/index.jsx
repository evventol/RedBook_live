import React, { useState } from 'react'
import styles from './sidebar.module.scss'
import Search from './search'
import SelectTaxon from './selectTaxon'
import SelectRegion from './selectRegion'
import SelectOTG from './selectOTG'
import SelectDataRegister from './selectDateRegister'
import PositioningError from './positioningError'
import arrow from '../../img/sidebar_arrow.svg';

export default function Sidebar(props) {
  const [isOpened, toggleSidebar] = useState(false);

  return (
    <div className={[styles.sidebar, !isOpened ? styles.opened : ''].join(' ')}>
      <div className={styles.toggler} onClick={() => toggleSidebar(!isOpened)}>
        <img className={[styles.arrow, !isOpened ? '' : styles.closed].join(' ')} src={arrow} alt="toggler"/>
      </div>
      <div className={styles.content}>
        <Search />
        <SelectTaxon selectTaxonData={props.selectTaxonData} />
        <SelectRegion />
        <SelectOTG />
        <SelectDataRegister />
        <PositioningError positioningErrorData={props.positioningErrorData} />
      </div>
    </div>
    
  )
}
