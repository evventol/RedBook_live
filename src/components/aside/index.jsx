import React from 'react'
import styles from './aside.module.scss'
import BaseLayers from './baseLayers'
import Biodiversity from './biodiversity'
import OpenSpatialBases from './openSpatialBases'

const Aside = () => {
  return (
    <aside className={styles.aside}>
      <BaseLayers />
      <Biodiversity />
      <OpenSpatialBases/>
    </aside>
  )
}

export default Aside
