// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;