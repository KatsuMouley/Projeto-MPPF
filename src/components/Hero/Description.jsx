import React from 'react';

const Description = ({ titulo, description}) => {

  return (
    <div className="flex flex-col justify-center items-center p-5 gap-4 max-w-4xl sm:max-w-5xl md:max-w-7xl mx-auto text-left">
      <h1 className="font-bold text-1xl text-x1 md:text-4xl lg:text-2xl text-center">
        {titulo}
      </h1>
      <p className=" sm:text-xl text-sm font-roboto text-center sm:text-left">
        {description}
      </p>
    </div>
  );
};

export default Description;
