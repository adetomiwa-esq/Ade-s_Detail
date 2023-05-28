import React, { useEffect } from 'react';
import { RootState } from '../store';
import { decrease, increase } from '../features/cart/ContactSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import 'aos/dist/aos.css';
import * as AOS from "aos";

function AboutSlide() {

    const {contactSlider, current} = useSelector((store: RootState) => store.contact)
    const dispatch = useDispatch()

    useEffect(() => {
        AOS.init({duration: 2000})
    })
  return (
    <section className='w-full overflow-x-hidden'>
            <div className='relative h-[320px] sm:h-[350px] md:h-[400px]'>
                <div className='h-full border'>
                    {
                        contactSlider.map((each, index) => {
                            return <div key={index} className={`flex h-full absolute top-0 ${current === index ? 'left-0' : 'left-[2000%]'} transition-all duration-500 delay-500 w-full`}>
                                <div className='w-full md:w-1/2 relative' data-aos="slide-left">
                                    <img src={each.leftImg} alt="left-img" className='h-full w-full' />

                                </div>

                                <div className='md:w-1/2 hidden md:block' data-aos="slide-right">
                                    <img src={each.rightImg} alt="right-img" className='h-full w-full'/>
                                </div>
                            </div>
                        })
                    }
                </div>

              <div className='w-[60px] h-[60px] absolute top-[50%] right-2 sm:right-11 -translate-y-[50%] flex items-center justify-center rounded-full border cursor-pointer m-3 hover:bg-red-400 text-white border-white z-[50]' onClick={() => dispatch(increase())}><AiOutlineRight /></div>
              <div className='w-[60px] h-[60px] absolute top-[50%] left-2 sm:left-11 -translate-y-[50%] flex items-center justify-center rounded-full border cursor-pointer m-3 hover:bg-red-400 text-white border-white z-[50]' onClick={() => dispatch(decrease())}><AiOutlineLeft /></div>

            </div>
        </section>
  )
}

export default AboutSlide