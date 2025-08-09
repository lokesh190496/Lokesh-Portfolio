import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Portfolio from './pages/Portfolio/Portfolio';
import Skills from './pages/Skills/Skills';
import Experience from './pages/Experience/Experience';
import Contact from './pages/Contact/Contact';
import AppNavbar from './components/AppNavbar/AppNavbar';
import ParticlesBackground from './utils/ParticlesBackground';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

function App() {
  const location = useLocation()
  console.log("location", location)

  const renderParticleLocationpage = location.pathname ==="/"
  return (
    <div className="App">
      {renderParticleLocationpage && <ParticlesBackground id="particles"/>}
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
