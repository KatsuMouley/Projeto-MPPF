import React from 'react';

function ArticleSection({ images, description }) {
  return (
    <section className="flex flex-col justify-center">

      <div className="flex justify-center p-5 h-[50vh] items-center gap-5 w-full">
        <div className=" h-full bg-gray-500 hover:cursor-pointer hover:bg-gray-600 transition-all duration-300">
          <img src={images} alt="Image 1" className="object-cover h-full w-full" />
        </div>
      </div>
      
      <p className="text-gray-700 max-w-3xl text-center text-xs">
        {description}
      </p>
    </section>
  );
}

export default ArticleSection;
