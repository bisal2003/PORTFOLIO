import React from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Home from './components/Home';
import Education from './components/Education';
import Experience from './components/Experience';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <Header />
        <Home />
        <Education />
        <Experience />
        <Services />
        <Testimonials />
        <Achievements />
        <Contact />
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
