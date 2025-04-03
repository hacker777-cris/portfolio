import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Achievements />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}

export default App;