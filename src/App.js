import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Resume from './pages/Resume/Resume';
import Portfolio from './pages/Portfolio/Portfolio';
import Skills from './pages/Skills/Skills';
import Contact from './pages/Contact/Contact';
import AppNavbar from './components/AppNavbar/AppNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
