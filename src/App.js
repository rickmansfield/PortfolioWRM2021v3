import './App.css';
import About from './components/about';
import Contact from './components/contact';
import Nav1 from './components/Nav1';
import Nav2 from './components/nav2';
import Projects from './components/projects';
import Skills from './components/skills'

function App() {
  return (
    <div className="App">
      <Nav2 />
      <Nav1 />
      <Projects />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
