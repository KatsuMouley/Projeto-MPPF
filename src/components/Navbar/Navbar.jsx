// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../assets/logo2.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container py-3 flex items-center justify-between">
        <div>
          <img src={Logo} alt="Logo" className="w-24" />
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className={`hidden md:flex items-center gap-5`}>
          <li className="hover:scale-110 duration-75">
            <Link to="/Projeto-MPPF/">Home</Link>
          </li>
          <li className="hover:scale-110 duration-75">
            <Link to="/Projeto-MPPF/article">Artigos</Link>
          </li>
          <li className="hover:scale-110 duration-75">
            <Link to="/Projeto-MPPF/questionarios">Questionários</Link>
          </li>
          <li className="hover:scale-110 duration-75">
            <Link to="/Projeto-MPPF/faq">Perguntas Frequentes</Link>
          </li>
          <li className="hover:scale-110 duration-75">
            <Link to="/Projeto-MPPF/sobre">Sobre</Link>
          </li>
        </ul>

        {/* Desktop Contact Button */}
        <div className="hidden md:block">
          <button className="border border-gray-400 px-4 py-1 rounded-lg hover:scale-105 transform duration-300">
            <Link to="/Projeto-MPPF/contact_us">Entre em contato</Link>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white w-full text-center">
          <ul className="flex flex-col items-center gap-4 py-3">
            <li className="hover:scale-110 duration-75">
              <Link to="/Projeto-MPPF/">Home</Link>
            </li>
            <li className="hover:scale-110 duration-75">
              <Link to="/Projeto-MPPF/article">Artigos</Link>
            </li>
            <li className="hover:scale-110 duration-75">
              <Link to="/Projeto-MPPF/questionarios">Questionários</Link>
            </li>
            <li className="hover:scale-110 duration-75">
              <Link to="/Projeto-MPPF/faq">Perguntas Frequentes</Link>
            </li>
            <li className="hover:scale-110 duration-75">
              <Link to="/Projeto-MPPF/sobre">Sobre</Link>
            </li>
            <li>
              <button className="border border-gray-400 px-4 py-1 rounded-lg hover:scale-105 transform duration-300">
                <Link to="/Projeto-MPPF/contact_us">Entre em contato</Link>
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
