import React from 'react'
import styles from './aside.module.scss'
import BaseLayers from './baseLayers'
import Biodiversity from './biodiversity'
import OpenSpatialBases from './openSpatialBases'
import {asideConfig} from './aside.config.js'


const Aside = () => {
  return (
    <aside className={styles.aside}>
      <BaseLayers baseLayersData={asideConfig.baseLayersData} />

      <Biodiversity biodiversityData={asideConfig.biodiversityData} />

      <OpenSpatialBases openSpatialBasesData={asideConfig.openSpatialBasesData} />
    </aside>
  )
}

export default Aside
