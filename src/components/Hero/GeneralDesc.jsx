import React from 'react';

const GeneralDesc = ({ titulo, textocorpo }) => {
  return (
    <div className="flex flex-col items-start gap-2 mx-auto text-left">
      <h1 className="font-bold text-xl">
        {titulo}
      </h1>
      <p className=" font-roboto sm:text-xl text-sm">
        {textocorpo}
      </p>
    </div>
  );
};

export default GeneralDesc;
