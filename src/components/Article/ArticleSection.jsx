import React from 'react';

function ArticleSection() {
  return (
    <section className="flex flex-col bg-white p-8 justify-center min-h-screen">
      <div className="w-3/4 text-left">
        <h1 className="text-3xl font-bold mb-2">
          A importância de se conscientizar a respeito de crimes digitais.
        </h1>
        <p className="text-gray-600 mb-4">Uma introdução a respeito das ameaças do mundo digital.</p>
      </div>

      <div className="flex justify-center p-5 h-[50vh] items-center gap-5 w-full">
        <div className="w-3/4 h-full bg-gray-500 hover:cursor-pointer hover:bg-gray-600 transition-all duration-300"></div>
      </div>
      
      <p className="text-gray-700 max-w-3xl text-center">
        Vivemos em uma era cada vez mais conectada, onde a internet e as tecnologias digitais fazem parte do nosso cotidiano...
      </p>
    </section>
  );
}

export default ArticleSection;
