import React from 'react'
import styles from './sidebar.module.scss'
import Search from './search'
import SelectTaxon from './selectTaxon'
import SelectRegion from './selectRegion'

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <form>
        <Search />
        <SelectTaxon />
        <SelectRegion />
      </form>
    </div>
  )
}
