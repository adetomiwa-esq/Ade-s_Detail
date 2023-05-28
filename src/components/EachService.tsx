import React from 'react';

interface Props {
    service: {
    imgSrc: string,
    title: string,
    para: string,
    url: string,
  };
}

function EachService({service}: Props) {
  return (
    <div className='text-white flex mb-14 group'>
      <div className='min-w-[40%] w-[40%] h-[300px] sm:h-[350px] flex items-center justify-center'>
        <img className='w-[90%] h-[92%] group-hover:w-[100%] group-hover:h-[100%]' src={service.imgSrc} alt={service.title} />
      </div>

      <div className='ml-2 sm:ml-9'>
        <h1 className='text-3xl mb-4 group-hover:text-red-600'>{service.title}</h1>
        <p className='leading-8 text-zinc-400'>{service.para}</p>
      </div>
    </div>
  )
}

export default EachService