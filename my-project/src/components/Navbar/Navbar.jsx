import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../assets/logo2.png";

const Navbar = () => {
  return (
    <header>
        <div className="container py-3 flex items-center justify-between">
            {/* Logo section */}
            <div>
                <img src={Logo} alt="Logo" className="w-40" />
            </div>
            {/* Navlinks section */}
            <ul className="hidden md:flex items-center gap-5">
                <li className="hover:scale-110 duration-75">
                    <Link to="/">Home</Link>
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
            {/* Button section */}
            <div>
                <button className="border border-gray-400 px-4 py-1 rounded-lg hover:scale-105 transform duration-300">
                    <Link to="/contact_us">Entre em contato</Link>
                </button>
            </div>
        </div>
    </header>
  );
}

export default Navbar;
