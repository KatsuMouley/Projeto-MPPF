import React, { useState, useEffect } from 'react';

const Subtitle = ({ titulo, description }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Define o breakpoint para mobile
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full p-5 text-left  font-roboto">
      <h1 className={`${isMobile ? 'text-xl' : 'text-4xl'} font-bold mb-2 ml-5 text-gray-900`}>
        {titulo}
      </h1>
      <p className={`${isMobile ? 'text-xs' : 'text-sm'} text-gray-600 mb-4 ml-5`}>
        {description}
      </p>
    </div>
  );
};

export default Subtitle;
