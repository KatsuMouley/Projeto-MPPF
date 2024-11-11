import React from 'react';

const Placeholder = ({ images }) => {
  return (
    <div className="flex flex-row justify-center p-5 h-[50vh] items-center gap-5">
      <div className="h-full bg-gray-500 hover:cursor-pointer hover:bg-gray-600 transition-all duration-300">
        <img src={images[0]} alt="Image 1" className="object-cover h-full w-full" />
      </div>
    </div>
  );
};

export default Placeholder;
