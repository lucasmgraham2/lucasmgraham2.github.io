import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import './App.css';

// Components
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Involvement from './components/Involvement';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="App">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Involvement />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
