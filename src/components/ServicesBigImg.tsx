import React from 'react';
import BigImg from '../images/detailingDiary.jpg'

function ServicesBigImg() {
  return (
    <section className='relative'>
        <img src={BigImg} alt="car-wash"  className='w-full brightness-50 max-h-[650px]'/>
        <h1 className='absolute w-full text-white top-1/2 text-center -translate-y-1/2 text-[1.5rem] sm:text-[3rem] lg:text-[5rem]'>A true art form understood and practiced by few.</h1>
    </section>
  )
}

export default ServicesBigImg