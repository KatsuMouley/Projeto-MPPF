import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Description from './components/Hero/Description';
import About from './components/Article/AboutSection';
import Articles from './components/pages/Articles';
import Home from './components/pages/Home';
import Contact from './components/pages/ContactUs';
import Questions from './components/pages/Questions';

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/Projeto-MPPF" element={<Home />} />
          <Route path="/description" element={<Description />} />
          <Route path="/article" element={<Articles />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact_us" element={<Contact />} />
          <Route path="/questionarios" element={<Questions />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
