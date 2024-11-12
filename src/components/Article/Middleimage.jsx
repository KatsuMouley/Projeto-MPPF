import React, { useState, useEffect } from 'react';

function Middleimage({ images, description }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Define o breakpoint para mobile
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="flex flex-col justify-center">
      <div className="flex justify-center p-5 h-[25vh] items-center gap-5 w-full">
        <div className="w-full h-full bg-gray-500 hover:cursor-pointer hover:bg-gray-600 transition-all duration-300">
          <img src={images} alt="Image 1" className="object-cover w-full h-full" />
        </div>
      </div>

      <p className={`text-gray-700 max-w-3xl text-center ${isMobile ? 'text-xs' : 'text-sm'}`}>
        {description}
      </p>
    </section>
  );
}

export default Middleimage;
