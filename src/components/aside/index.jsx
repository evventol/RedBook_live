import React from 'react'
import styles from './aside.module.scss'
import BaseLayers from './baseLayers'
import Biodiversity from './biodiversity'
import OpenSpatialBases from './openSpatialBases'

const Aside = (props) => {
  return (
    <aside className={styles.aside}>
      <BaseLayers baseLayersData={props.baseLayersData} />

      <Biodiversity biodiversityData={props.biodiversityData} />

      <OpenSpatialBases openSpatialBasesData={props.openSpatialBasesData} />
    </aside>
  )
}

export default Aside
