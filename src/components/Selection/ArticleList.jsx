import React from 'react';
import { Link } from 'react-router-dom'; // Importando o Link
import articleImage1 from '../../assets/Articles Images/Article 1/Thumb/image.png'; // Imagem do artigo

import Navbar from '../Navbar/Navbar';
import About from '../Article/AboutSection';
import Article from '../Article/ArticleSection';

const ArticleList = () => {
  const articles = [
    {
      title: 'A importância de se concientizar a respeito de crimes digitais.',
      path: '/article/1', // Defina o caminho da rota correspondente
    },
    {
      title: 'Artigo 2 - Título aqui',
      path: '/article/2',
    },
    {
      title: 'Artigo 3 - Título aqui',
      path: '/article/3',
    },
    {
      title: 'Artigo 4 - Título aqui',
      path: '/article/4',
    },
    {
      title: 'Artigo 5 - Título aqui',
      path: '/article/5',
    },
    {
      title: 'Artigo 6 - Título aqui',
      path: '/article/6',
    },
  ]; // Títulos e caminhos dos artigos

  const articlesImages = [
    articleImage1,
    '', // Adicione mais imagens aqui se necessário
    '',
    '',
    '',
    ''
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Lista de Artigos disponíveis</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-lg hover:cursor-pointer hover:scale-105 transition duration-300">
            <img className='w-full h-48 object-cover mb-4' src={articlesImages[index] || articleImage1} alt={`Imagem do ${article.title}`} />
            <Link to={article.path} className="text-lg font-semibold">
              {article.title}
            </Link>
            {/* Você pode adicionar mais detalhes sobre o artigo aqui */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
