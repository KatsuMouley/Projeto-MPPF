import React from 'react';
import Navbar from '../Navbar/Navbar';
import About from '../Article/AboutSection';
import ArticleGrid from '../Selection/ArticleList';
import Footer from '../Navbar/Footer';

const Articles = () => {
  return (
  <div >
      <ArticleGrid />
      <Footer/>
  </div>
  );
};

export default Articles;