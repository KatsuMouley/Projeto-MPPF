import React from 'react';
import { Link } from 'react-router-dom'; // Importando o Link

import Navbar from '../Navbar/Navbar';
import About from '../Article/AboutSection';
import Article from '../Article/ArticleSection';


import articleImage1 from '../../assets/Questions Images/image1.png'; // Imagem do artigo

const Questionario = () => {
  const questionarios = [
    {
      title: 'relação entre MPPR e crimes cibernéticos.',
      url: 'https://forms.gle/Kki5qP7Cfv2tqvir7', // URL do questionário externo
    },
    {
      title: 'Você já foi vítima de algum crime cibernético?',
      url: '',
    },
    {
      title: 'proponha soluções para este problema',
      url: '',
    },
  ]; // Títulos e URLs dos questionários

  const questionariosImages = [
    // Adicione imagens para os questionários se necessário
    articleImage1,
    '',
    '',
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Lista de Questionários disponíveis</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {questionarios.map((questionario, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-lg hover:cursor-pointer hover:scale-105 transition duration-300">
            <img className='w-full h-48 object-cover mb-4' src={questionariosImages[0] || ''} alt={`Imagem do ${questionario.title}`} />
            <a href={questionario.url} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold">
              {questionario.title}
            </a>
            {/* Você pode adicionar mais detalhes sobre o questionário aqui */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questionario;
