import React from 'react';

function AboutSection() {
  return (
    <section className="bg-gray-100 p-8 rounded-lg shadow-md my-8">
      <h2 className="text-2xl font-semibold mb-2">O que são crimes digitais?</h2>
      <p className="text-gray-700 mb-4">
        Crimes digitais, também conhecidos como crimes cibernéticos, são atos ilícitos...
      </p>
      <div className="flex space-x-4">
        <div className="w-24 h-32 bg-gray-200"></div>
        <div className="w-24 h-32 bg-gray-200"></div>
        <div className="w-24 h-32 bg-gray-200"></div>
        <div className="w-24 h-32 bg-gray-200"></div>
      </div>
    </section>
  );
}

export default AboutSection;
