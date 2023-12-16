import React from 'react';
import './App.css';
import Portfolio from './components/Portfolio';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';


function App() {
  return (
    <div className="App">
      <Portfolio />
      <About />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;