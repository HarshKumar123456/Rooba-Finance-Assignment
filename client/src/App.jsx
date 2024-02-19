import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';

import "../src/styles/App.css";
import Discover from './components/Discover';


function App() {

  return (
    <>
      <NavBar />
      <Hero />
      <Discover />
      <h1 className="dim-white-text">This is App.</h1>
    </>
  )
}

export default App;
