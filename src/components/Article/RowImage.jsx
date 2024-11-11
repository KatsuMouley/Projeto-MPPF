import React, { useState, useEffect, useRef } from 'react';

function RowImage({ images, titulo, description }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const textContainerRef = useRef(null);
  const [textHeight, setTextHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (textContainerRef.current) {
        setTextHeight(textContainerRef.current.offsetHeight);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Chamada inicial para definir altura

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="flex flex-row justify-center w-full items-start p-2">
      {/* Contêiner de Texto */}
      <div
        ref={textContainerRef}
        className={`${isMobile ? 'text-xl' : 'text-4xl'} flex flex-col justify-center text-left`}
      >
        <h1>{titulo}</h1>
        <p className={`${isMobile ? 'text-xs' : 'text-sm'} text-gray-700 max-w-3xl text-left`}>
          {description}
        </p>
      </div>

      {/* Contêiner da Imagem */}
      <div className="flex justify-center items-center p-5 mb-20" style={{ height: textHeight }}>
        <div
          className={`bg-gray-500 hover:cursor-pointer hover:bg-gray-600 transition-all duration-300 h-full ${isMobile ? 'w-auto' : 'w-full'}`}
        >
          <img
            src={images}
            alt="Image 1"
            className={`${isMobile ? 'object-cover h-full w-auto' : 'w-full h-auto'}`}
            style={isMobile ? { height: textHeight } : {}}
          />
        </div>
      </div>
    </section>
  );
}

export default RowImage;
