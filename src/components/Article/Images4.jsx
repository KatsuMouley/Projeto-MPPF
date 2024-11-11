import React from 'react';

const Images4 = ({ images }) => {
  return (
    <div className="flex flex-row justify-center p-5 h-[50vh] items-center gap-5">
      <div className="w-1/2 h-full bg-gray-500 hover:cursor-pointer hover:bg-gray-600 transition-all duration-300">
        <img src={images} alt="Image 1" className="object-cover h-full w-full" />
      </div>
      <div className="w-56 h-full bg-gray-500 hover:cursor-pointer hover:bg-gray-600 transition-all duration-300">
        <img src={images} alt="Image 2" className="object-cover h-full w-full" />
      </div>
      <div className="w-24 h-full bg-gray-500 hover:cursor-pointer hover:bg-gray-600 transition-all duration-300">
        <img src={images} alt="Image 3" className="object-cover h-full w-full" />
      </div>
    </div>
  );
};

export default Images4;