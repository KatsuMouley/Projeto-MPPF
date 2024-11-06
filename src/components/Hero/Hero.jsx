import React from 'react';

const Hero = ({ images }) => {
  return (
    <div className="flex flex-row justify-center p-5 h-[50vh] items-center gap-5">
      <div className="w-1/2 h-2/3 bg-gray-500 hover:cursor-pointer hover:bg-gray-600 transition-all duration-300">
        <img src={images[0]} alt="Image 1" className="object-cover h-full w-full" />
      </div>
      <div className="w-56 h-2/3 bg-gray-500 hover:cursor-pointer hover:bg-gray-600 transition-all duration-300">
        <img src={images[1]} alt="Image 2" className="object-cover h-full w-full" />
      </div>
      <div className="w-24 h-2/3 bg-gray-500 hover:cursor-pointer hover:bg-gray-600 transition-all duration-300">
        <img src={images[2]} alt="Image 3" className="object-cover h-full w-full" />
      </div>
      <div className="w-12 h-2/3 bg-gray-500 hover:cursor-pointer hover:bg-gray-600 transition-all duration-300">
        <img src={images[3]} alt="Image 4" className="object-cover h-full w-full" />
      </div>
      <div className="w-6 h-2/3 bg-gray-500 hover:cursor-pointer hover:bg-gray-600 transition-all duration-300">
        <img src={images[4]} alt="Image 5" className="object-cover h-full w-full" />
      </div>
    </div>
  );
};

export default Hero;
