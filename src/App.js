import './App.css';
import Hero from './components/hero.js'
import AboutMe from './components/abMe/aboutMe.js'
import Projects from './components/Projects/Projects.js'
import Contact from './components/contactMe/contactMe.js'
import NavBar from './components/navbar/navbar.js'

import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import clouds from './components/hero_images/clouds.png'
import mountain1 from './components/hero_images/mountain1.png'
import mountain2 from './components/hero_images/mountain2.png'
import mountain3 from './components/hero_images/mountain3.png'
import trees1 from './components/hero_images/trees1.png'
import trees2 from './components/hero_images/trees1.png'

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
