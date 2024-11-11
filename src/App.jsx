// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import About from './components/pages/About';
import Articles from './components/pages/Articles';
import Home from './components/pages/Home';
import Contact from './components/pages/ContactUs';
import Questions from './components/pages/Questions';
import FrequentQuestions from './components/pages/FrequentQuestions';
import Article1 from './components/pages/ArticlesPages/Article1';
import Article2 from './components/pages/ArticlesPages/Article2';
import Article3 from './components/pages/ArticlesPages/Article3';
import Article4 from './components/pages/ArticlesPages/Article4';
import Article5 from './components/pages/ArticlesPages/Article5';
import Article6 from './components/pages/ArticlesPages/Article6';

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/Projeto-MPPF/" element={<Home />} />
          <Route path="/Projeto-MPPF/article" element={<Articles />} />
          <Route path="/Projeto-MPPF/sobre" element={<About />} />
          <Route path="/Projeto-MPPF/contact_us" element={<Contact />} />
          <Route path="/Projeto-MPPF/questionarios" element={<Questions />} />
          <Route path="/Projeto-MPPF/faq" element={<FrequentQuestions />} />
          <Route path="/Projeto-MPPF/article/1" element={<Article1 />} />
          <Route path="/Projeto-MPPF/article/2" element={<Article2 />} />
          <Route path="/Projeto-MPPF/article/3" element={<Article3 />} />
          <Route path="/Projeto-MPPF/article/4" element={<Article4 />} />
          <Route path="/Projeto-MPPF/article/5" element={<Article5 />} />
          <Route path="/Projeto-MPPF/article/6" element={<Article6 />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
