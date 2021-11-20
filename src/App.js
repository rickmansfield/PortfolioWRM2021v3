import './App.css';
import About from './components/about';
import Contact from './components/contact';
import Main from './components/main';
import Nav from './components/nav';
import Projects from './components/projects';

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
