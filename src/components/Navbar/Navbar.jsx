import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../assets/logo2.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container py-3 flex items-center justify-between">
        {/* Logo section */}
        <div>
          <img src={Logo} alt="Logo" className="w-24" />
        </div>

        {/* Menu Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
            {/* Icon for menu */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Navlinks section (Desktop Menu) */}
        <ul className={`hidden md:flex items-center gap-5`}>
          <li className="hover:scale-110 duration-75">
            <Link to="/Projeto-MPPF">Home</Link>
          </li>
          <li className="hover:scale-110 duration-75">
            <Link to="/article">Artigos</Link>
          </li>
          <li className="hover:scale-110 duration-75">
            <Link to="/questionarios">Questionários</Link>
          </li>
          <li className="hover:scale-110 duration-75">
            <Link to="/faq">Perguntas Frequentes</Link>
          </li>
          <li className="hover:scale-110 duration-75">
            <Link to="/sobre">Sobre</Link>
          </li>
        </ul>

        {/* Button section (Desktop) */}
        <div className="hidden md:block">
          <button className="border border-gray-400 px-4 py-1 rounded-lg hover:scale-105 transform duration-300">
            <Link to="/contact_us">Entre em contato</Link>
          </button>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isMenuOpen && (
        <div className="md:hidden bg-white w-full text-center">
          <ul className="flex flex-col items-center gap-4 py-3">
            <li className="hover:scale-110 duration-75">
              <Link to="/Projeto-MPPF">Home</Link>
            </li>
            <li className="hover:scale-110 duration-75">
              <Link to="/article">Artigos</Link>
            </li>
            <li className="hover:scale-110 duration-75">
              <Link to="/questionarios">Questionários</Link>
            </li>
            <li className="hover:scale-110 duration-75">
              <Link to="/faq">Perguntas Frequentes</Link>
            </li>
            <li className="hover:scale-110 duration-75">
              <Link to="/sobre">Sobre</Link>
            </li>
            <li>
              <button className="border border-gray-400 px-4 py-1 rounded-lg hover:scale-105 transform duration-300">
                <Link to="/contact_us">Entre em contato</Link>
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
