
import './App.css';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';


function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
    </>
  );
}

export default App;
