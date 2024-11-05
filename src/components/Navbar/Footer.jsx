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
        className="flex items-center font-bold py-2 px-4 rounded hover:scale-105 transition duration-300 active:cursor-default"
      >
        <i className="fas fa-share-alt mr-2"></i> {/* Ícone de compartilhamento */}
        Compartilhar página
      </button>
    </footer>
  );
}

export default Footer;
