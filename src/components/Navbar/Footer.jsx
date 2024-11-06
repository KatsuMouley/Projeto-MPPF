import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../assets/logo2.png"; // Logo não está sendo utilizado neste exemplo, mas pode ser útil

const Footer = () => {
  const handleShare = () => {
    navigator.clipboard.writeText("https://katsumouley.github.io/Projeto-MPPF").then(() => {
        alert("Link copiado");
    }).catch(err => {
      console.error("Erro ao copiar o link: ", err);
    });
  }

  return (
    <footer className="fixed bottom-0 left-0 right-0 flex justify-end p-4">
      <button
        onClick={handleShare}
        className="flex items-center font-bold py-2 px-4 bg-white rounded hover:scale-105 hover:bg-slate-200 transition duration-300 active:cursor-default bg-opacity-60"
      >
        <i className="fas fa-share-alt mr-1"></i> {/* Ícone de compartilhamento */}
        <span className="hidden sm:inline">Compartilhar</span> {/* Texto aparece somente em telas maiores */}
      </button>
    </footer>
  );
}

export default Footer;
