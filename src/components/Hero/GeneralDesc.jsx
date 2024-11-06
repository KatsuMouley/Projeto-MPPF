import React from 'react';

const GeneralDesc = ({ titulo, textocorpo }) => {
  return (
    <div className="flex flex-col items-start p-5 gap-2 max-w-4xl mx-auto text-left">
      <h1 className="font-bold text-2xl">
        {titulo}
      </h1>
      <p className="text-lg font-roboto">
        {textocorpo}
      </p>
    </div>
  );
};

export default GeneralDesc;
