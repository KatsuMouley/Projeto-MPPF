import React from 'react'

const Hero = () => {
  return (
    <div className="flex flex-row justify-center p-5 h-[50vh] items-center gap-5">
      <div className="w-1/2 h-full bg-gray-500 hover:cursor-pointer hover:bg-gray-600 transition-all duration-300"></div>
      <div className="w-56 h-full bg-gray-500 hover:cursor-pointer hover:bg-gray-600 transition-all duration-300"></div>
      <div className="w-24 h-full bg-gray-500 hover:cursor-pointer hover:bg-gray-600 transition-all duration-300"></div>
      <div className="w-12 h-full bg-gray-500 hover:cursor-pointer hover:bg-gray-600 transition-all duration-300"></div>
      <div className="w-6 h-full bg-gray-500 hover:cursor-pointer hover:bg-gray-600 transition-all duration-300"></div>
    </div>
  )
}

export default Hero
