import React from 'react'
import './app.scss'
import { Header } from './header'
import Sidebar from './sidebar'
import Aside from './aside'
import './app.scss'
import { Footer } from './footer'

const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Sidebar />
        {/* <Aside /> */}
      </main>
      <Footer />
    </div>
  )
}

export default App
