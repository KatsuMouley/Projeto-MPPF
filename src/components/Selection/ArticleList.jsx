import React from 'react';
import { Link } from 'react-router-dom';
import articleImage1 from '../../assets/Articles Images/Article 1/Thumb/image.png';
import articleImage2 from '../../assets/Articles Images/Article 2/image13.png';
import articleImage3 from '../../assets/Articles Images/Article 2/image12.png';
import articleImage4 from '../../assets/Articles Images/Article 2/image4.png';
import articleImage5 from '../../assets/Articles Images/Article 2/image16.png';

import Navbar from '../Navbar/Navbar';
import About from '../Article/AboutSection';
import Article from '../Article/ArticleSection';

const ArticleList = () => {
  const articles = [
    {
      title: 'A importância de se concientizar a respeito de crimes digitais.',
      path: '/Projeto-MPPF/article/1',
    },
    {
      title: 'Top 10 crimes cibernéticos no qual você deve tomar cuidado',
      path: '/Projeto-MPPF/article/2',
    },
    {
      title: 'A Convenção de Budapeste: Um Marco Internacional na Luta Contra Crimes Cibernéticos',
      path: '/Projeto-MPPF/article/3',
    },
    {
      title: 'A Relação entre o Ministério Público do Paraná (MPPR) e os Crimes Digitais',
      path: '/Projeto-MPPF/article/4',
    },
    {
      title: 'Perguntas Frequentes',
      path: '/Projeto-MPPF/faq',
    }
  ];

  const articlesImages = [
    articleImage2,
    articleImage1,
    articleImage3,
    articleImage5,
    articleImage4
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Lista de Artigos disponíveis</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article, index) => (
          <Link to={article.path} key={index} className="border rounded-lg p-4 shadow-lg hover:cursor-pointer hover:scale-105 transition duration-300">
            <img className='w-full h-48 object-cover mb-4' src={articlesImages[index] || articleImage1} alt={`Imagem do ${article.title}`} />
            <div className="text-lg font-semibold">{article.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
