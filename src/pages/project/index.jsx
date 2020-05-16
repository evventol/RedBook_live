import React from 'react'
import styles from './project.module.scss'
import { ProjectTarget } from './projectTarget'
import { ProjectField } from './projectField'

const ProjectPage = () => {
  return (
    <div className={styles.container}>
      <ProjectTarget />
      <ProjectField />
    </div>
  )
}

export default ProjectPage
