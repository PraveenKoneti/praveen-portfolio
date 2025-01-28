
import './App.css';

import { BrowserRouter, Routes, Route} from "react-router-dom";

import Navbar from './components/navbar';
import About from "./components/about";
import Experience from "./components/expericence";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Education from "./components/education";
import ContactForm from './components/contact';
import Footer from './components/footer';


function App() {
  return (
    <>
      <BrowserRouter>

      <Navbar/>

      <Routes>

          <Route path="/" element={ <About/> } />
          <Route path="/about" element={ <About/> } />
          <Route path="/experience" element={ <Experience/> } />
          <Route path="/projects" element={ <Projects/> } />
          <Route path="/skills" element={ <Skills/> } />
          <Route path="/education" element={ <Education/> } />
          <Route path="/contact" element={ <ContactForm/> } />

      </Routes>

      <Footer/>

      </BrowserRouter>
    </>
  );
}

export default App;
