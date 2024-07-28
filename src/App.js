import './App.css';
import Hero from './components/hero.js'
import AboutMe from './components/abMe/aboutMe.js'
import Projects from './components/Projects/Projects.js'
import Contact from './components/contactMe/contactMe.js'
import NavBar from './components/navbar/navbar.js'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <br />
      <AboutMe />
      <br />
      <Projects />
      <br />
      <Contact />
    </div>
  );
}

export default App;
