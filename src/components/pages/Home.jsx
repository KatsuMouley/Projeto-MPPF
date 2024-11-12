import React from 'react';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import Description from '../Hero/Description';
import About from '../Article/AboutSection';
import Article from '../Article/ArticleSection';
import Footer from '../Navbar/Footer';

import articleImage1 from '../../assets/Articles Images/Article 1/Thumb/image.png'; // Imagem do artigo
import articleImage2 from '../../assets/Articles Images/Article 2/image2.png'; // Imagem do artigo
import articleImage3 from '../../assets/Articles Images/Article 2/image3.png'; // Imagem do artigo
import articleImage4 from '../../assets/Articles Images/Article 2/image4.png'; // Imagem do artigo
import articleImage5 from '../../assets/Articles Images/Article 2/image5.png'; // Imagem do artigo

const Home = () => {
  const imageUrls = [
    articleImage3,articleImage2,articleImage1,articleImage4,articleImage5,
  ];
  
  return (
    <section>
        <Hero images={imageUrls}/>
        <Description
        titulo="Proteja-se no mundo digital: Conheça, entenda e combata os crimes cibernéticos."
        description="
        Vivemos em uma era digital, onde a internet e a tecnologia fazem parte do nosso cotidiano.
        No entanto, com tantas oportunidades, também surgem novos riscos e ameaças. Este site foi
        criado como resultado da parceria entre o Colégio Positivo e o Ministério Público do Paraná,
        com o objetivo de conscientizar, informar e auxiliar a sociedade sobre os principais crimes
        digitais que afetam a todos nós. Aqui, você encontrará artigos detalhados sobre os crimes
        cibernéticos mais comuns, dicas de prevenção, além de um questionário para ajudar a entender
        a percepção da sociedade quanto à atuação das autoridades no combate a esses crimes.
        Participe e contribua para a construção de um ambiente digital mais seguro e saudável!"/>
        <Footer/>
    </section>
  );
};

export default Home;
