import React from 'react'
import styles from './sidebar.module.scss'
import Search from './search'
import SelectTaxon from './selectTaxon'
import SelectRegion from './selectRegion'
import SelectOTG from './selectOTG'
import SelectDataRegister from './selectDateRegister'
import PositioningError from './positioningError'

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <form>
        <Search />
        <SelectTaxon />
        <SelectRegion />
        <SelectOTG />
        <SelectDataRegister />
        <PositioningError />
      </form>
    </div>
  )
}
