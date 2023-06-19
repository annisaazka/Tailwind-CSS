import React from 'react';

const Hero = ({heading, message}) => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-fixed bg-center bg-cover bg-gray-800'>
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 #0d9488' />
      <div className='p-5 text-white z-[2] mt-[-10rem]'>
        <h2 className='text-5xl font-bold'>{heading}</h2>
        <p className='py-5 text-xl'>{message}</p>
        <button className='px-8 py-2 border rounded-[8%] hover:bg-slate-600 transition-colors duration-300'>More</button>
      </div>
    </div>
  );
};

export default Hero;