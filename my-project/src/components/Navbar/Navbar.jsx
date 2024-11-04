import React from 'react'
import Logo from "../../assets/logo2.png";

const Navbar = () => {
  return (
    <header>
        <div className="container py-3 flex items-center justify-between">
            {/* Logo section */}
            <div>
                <img src={Logo} alt="Logo" className="w-40"/>
            </div>
            {/* Navlinks section */}
            <ul className="hidden md:flex items-center gap-5">
                <li className="hover:scale-110 duration-75">
                    <a href="#">Home</a>
                </li>
                <li className="hover:scale-110 duration-75">
                    <a href="#">Artigos</a>
                </li>
                <li className="hover:scale-110 duration-75">
                    <a href="#">Questionários</a>
                </li>
                <li className="hover:scale-110 duration-75">
                    <a href="#">Perguntas Frequentes</a>
                </li>
                <li className="hover:scale-110 duration-75">
                    <a href="#">Sobre</a>
                </li>
            </ul>
            {/* Button section */}
            <div>
                <button className="border border-gray-400 px-4 py-1 rounded-lg hover:scale-105 transform duration-300 ">
                    {" "} 
                    Contact us
                    </button>
            </div>
        </div>
    </header>
  )
}

export default Navbar