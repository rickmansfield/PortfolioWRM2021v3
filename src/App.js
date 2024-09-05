import './App.css';
import { useState } from 'react';
import About from './components/about';
import Contact from './components/contact';
import Nav1 from './components/Nav1';
import Nav2 from './components/nav2';
import Projects from './components/projects';
import Skills from './components/skills';

function App() {
  const [showNav2, setShowNav2] = useState(true);

  const handleCheckboxChange = () => {
    setShowNav2(prevState => !prevState); // Toggle between Nav1 and Nav2
  };

  return (
    <div className="App">
      {/* Pass the checkbox state and event handler to both Nav components */}
      {showNav2 ? (
        <Nav2 isChecked={showNav2} handleCheckboxChange={handleCheckboxChange} />
      ) : (
        <Nav1 isChecked={!showNav2} handleCheckboxChange={handleCheckboxChange} />
      )}
      <Projects />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
