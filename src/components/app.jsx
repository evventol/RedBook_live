import React from 'react'
import './app.scss'
import { Header } from './header'
import Sidebar from './sidebar'
import Aside from './aside'
import './app.scss'
import { Footer } from './footer'
import ProjectPage from '../pages/project'

const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Sidebar />
        <ProjectPage/>
        {/* <Aside /> */}
      </main>
      <Footer />
    </div>
  )
}

export default App
