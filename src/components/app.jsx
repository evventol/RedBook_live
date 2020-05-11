import React from 'react';
import './app.scss';
import { Header } from './header';
import Sidebar from './sidebar';
import { Footer } from './footer';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Sidebar/>
      <Footer />
    </div>
  );
}

export default App;
