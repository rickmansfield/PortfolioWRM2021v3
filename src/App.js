import './App.css';
import { useState, useRef } from 'react';
import About from './components/about';
import Contact from './components/contact';
import Nav1 from './components/Nav1';
import Nav2 from './components/nav2';
import Projects from './components/projects';
import Skills from './components/skills';

function App() {
  const [showNav2, setShowNav2] = useState(true);

  const handleCheckboxChange = () => {
    setShowNav2(prevState => !prevState);
  };

  // Create refs for each section
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  // Function to handle scroll
  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      {showNav2 ? (
        <Nav2 
          isChecked={showNav2} 
          handleCheckboxChange={handleCheckboxChange} 
          scrollToSection={scrollToSection} 
          sectionRefs={{ projectsRef, aboutRef, skillsRef, contactRef }}
        />
      ) : (
        <Nav1 
          isChecked={!showNav2} 
          handleCheckboxChange={handleCheckboxChange} 
        />
      )}

      {/* Render sections with refs */}
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
}

export default App;
