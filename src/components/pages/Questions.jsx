import React from 'react';
import Navbar from '../Navbar/Navbar';
import Questionario from '../Selection/Questionario';
import Footer from '../Navbar/Footer';

import articleImage1 from '../../assets/Articles Images/Article 1/Thumb/image.png'; // Imagem do artigo

const Home = () => {
  
  return (
    <section>
        <Questionario/>
        <Footer/>
    </section>
  );
};

export default Home;
