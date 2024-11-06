import React from 'react';
import GeneralDesc from '../Hero/GeneralDesc';
import Placeholder from '../Hero/Placeholder';
import Footer from '../Navbar/Footer';
import articleImage1 from '../../assets/Articles Images/Article 1/Thumb/image.png'; // Imagem do artigo

const About = () => {
  const imageUrls = [
    articleImage1, articleImage1, articleImage1, articleImage1, articleImage1, articleImage1
  ];

  return (
    <section className="flex flex-row p-24 gap-4  mx-auto">
      <div className="w-1/2">
        <GeneralDesc
          titulo="Sobre nosso projeto."
          textocorpo="O avanço da tecnologia trouxe inúmeros benefícios para a sociedade, mas também criou novos desafios, especialmente no campo da segurança digital. Em resposta a essa realidade, este site foi desenvolvido como parte de uma matéria de expansão, oferecida pela parceria entre o Ministério Público do Paraná e a Universidade Positivo.
          Nós, alunos da Universidade Positivo, estamos engajados em conscientizar a população sobre os riscos e as ameaças dos crimes cibernéticos. O projeto tem como objetivo informar e educar a sociedade sobre como identificar e se proteger contra crimes digitais, como roubo de identidade, fraudes online e ataques cibernéticos.
          Através de artigos detalhados, questionários interativos e conteúdos práticos, queremos ajudar as pessoas a navegar com mais segurança no ambiente virtual. Além disso, promovemos a discussão sobre a atuação das autoridades no combate a esses crimes e como os cidadãos podem buscar apoio e proteção.
          Junte-se a nós nessa jornada e contribua para a construção de uma internet mais segura e justa para todos."
        />
      </div>
      
      <div className="w-1/2">
        <Placeholder images={imageUrls} />
      </div>
      <Footer/>
    </section>
  );
};

export default About;
