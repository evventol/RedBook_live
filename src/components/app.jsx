import React from 'react';
import './app.scss';
import { Header } from './header';
import Sidebar from './sidebar'

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Sidebar/>
    </div>
  );
}

export default App;
