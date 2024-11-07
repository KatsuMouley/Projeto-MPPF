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
          <Route path="/Projeto-MPPF/" element={<Home />} />
          <Route path="/Projeto-MPPF/article/" element={<Articles />} />
          <Route path="/Projeto-MPPF/sobre/" element={<About />} />
          <Route path="/Projeto-MPPF/contact_us/" element={<Contact />} />
          <Route path="/Projeto-MPPF/questionarios/" element={<Questions />} />
          <Route path="/Projeto-MPPF/faq/" element={<FrequentQuestions />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
