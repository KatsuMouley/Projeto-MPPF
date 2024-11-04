import React from 'react';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import Description from '../Hero/Description';
import About from '../Article/AboutSection';
import Article from '../Article/ArticleSection';

const Home = () => {
  return (
    <section>
        <Hero/>
        <Description/>
    </section>
  );
};

export default Home;
