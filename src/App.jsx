import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import About from './components/pages/About';
import Articles from './components/pages/Articles';
import Home from './components/pages/Home';
import Contact from './components/pages/ContactUs';
import Questions from './components/pages/Questions';
import FrequentQuestions from './components/pages/FrequentQuestions';

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/Projeto-MPPF" element={<Home />} />
          <Route path="/article" element={<Articles />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/contact_us" element={<Contact />} />
          <Route path="/questionarios" element={<Questions />} />
          <Route path="/faq" element={<FrequentQuestions />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
