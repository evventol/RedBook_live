import React from 'react'
import './app.scss'
import { Header } from './header'
import Sidebar from './sidebar'
import Aside from './aside'
import './app.scss'

const App = (props) => {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Sidebar
          selectTaxonData={props.state.sidebar.selectTaxonData}
          positioningErrorData={props.state.sidebar.positioningErrorData}
        />
        <Aside
          baseLayersData={props.state.aside.baseLayersData}
          biodiversityData={props.state.aside.biodiversityData}
          openSpatialBasesData={props.state.aside.openSpatialBasesData}
        />
      </main>
    </div>
  )
}

export default App
