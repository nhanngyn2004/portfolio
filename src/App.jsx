import './App.css'
import "./index.css";
import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';

function App() {

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="min-h-screen bg-[#f7f7fa] text-black">

        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Home />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App
