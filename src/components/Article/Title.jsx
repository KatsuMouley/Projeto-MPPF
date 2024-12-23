import React, { useState, useEffect } from 'react';

const Title = ({ titulo, description }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Defina o breakpoint para mobile
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full pb-20 text-left  font-roboto">
      <h1 className={`${isMobile ? 'text-xl' : 'text-4xl'} font-bold mb-2`}>
        {titulo}
      </h1>
      <p className={`${isMobile ? 'text-sm' : 'text-lg'} mb-4`}>
        {description}
      </p>
      <hr className='border-gray-800 border-1'/>
    </div>
  );
};

export default Title;
