import './App.css';
import About from './components/about';
import Contact from './components/contact';
import Main from './components/main';
import Nav from './components/nav';
import Projects from './components/projects';
import Skills from './components/skills'

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <Projects />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
