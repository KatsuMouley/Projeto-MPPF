import React from 'react';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import Description from '../Hero/Description';
import About from '../Article/AboutSection';
import Article from '../Article/ArticleSection';
import Footer from '../Navbar/Footer';

import articleImage1 from '../../assets/Articles Images/Article 1/Thumb/image.png'; // Imagem do artigo

const Home = () => {
  const imageUrls = [
    articleImage1,articleImage1,articleImage1,articleImage1,articleImage1,articleImage1
  ];
  
  return (
    <section>
        <Hero images={imageUrls}/>
        <Description/>
        <Footer/>
    </section>
  );
};

export default Home;
