import React, { useState } from 'react';
import Footer from '../Navbar/Footer';


const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode enviar os dados do formulário para um backend, exibir uma mensagem de sucesso, etc.
    console.log('Form data submitted:', formData);
    alert('Obrigado por entrar em contato!');
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md m-10 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Entre em Contato</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Nome</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Assunto</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Mensagem</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            rows="4"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-slate-500 text-white font-semibold py-2 px-4 rounded hover:bg-slate-700 transition duration-200"
        >
          Enviar
        </button>
      </form>
      <Footer/>
    </div>
  );
};

export default ContactUs;
