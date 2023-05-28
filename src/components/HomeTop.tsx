import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import Red from '../images/astonmartin.png';
import Wash from '../images/wash.png';
import 'aos/dist/aos.css';
import * as AOS from 'aos'

function HomeTop() {

    useEffect(() => {
        AOS.init({duration: 2000})
    }, [])

  return (
    <div className='px-5 lg:px-12 relative pt-24 pb-12 flex '>
        <section className='relative w-full lg:w-fit' data-aos="slide-right">
            <div className='text-[1.9rem] md:text-[2.4rem] lg:text-[3rem] font-mono lg:pl-14'>
                <h1 className='p-0 m-0 leading-[55px]'>Founded on Passion.</h1>
                <h1 className='p-0 m-0 leading-[55px]'>Built on Service.</h1>
                <h1 className='p-0 m-0 leading-[55px]'>Measured on Results.</h1>
                <Link to="/" className='flex mt-[160px] sm:mt-[150px] lg:mt-8 w-full justify-center lg:w-fit py-4 px-7 text-lg text-white bg-red-500'>Request a Quote</Link>
            </div>
            <div className='bg-red-500 absolute w-[4px] top-2 left-0 h-8 md:bloch hidden'></div>
            

            <div className='flex justify-between flex-col-reverse lg:flex-row mt-12 lg:mt-[110px] text-sm lg:w-10/12 lg:items-center'>
                <div className='border-2 border-zinc-400 w-[24px] rounded-[50px] h-[35px] relative m-auto lg:m-0'><div className='w-1 h-3 bg-red-500 rounded-[2px] absolute top-1 left-[50%] -translate-x-[50%]'></div></div>

                <div className='w-full text-center mb-4 lg:mb-0'>
                    <div>adetomiwadetails@yahoo.com</div>
                    <div>941-735-5738</div>
                </div>

                <div className='w-full text-center mb-4 lg:mb-0'>
                    <div>Servicing area:</div>
                    <div className='text-red-400'>Lakewood Ranch - Sarasota</div>
                </div>
            </div>
        </section>

        <div className='absolute top-[44%] md:top-[47%] lg:top-[62%] left-[150px] lg:left-[52%] -translate-x-[50%] -translate-y-[40%] md:-translate-y-[50%] w-10/12 sm:w-[400px] lg:w-[600px] xl:w-[700px]'>
            <img src={Red} alt="mcqueen" />
        </div>

        <section className='ml-auto self-end group font-semibold hidden lg:block text-lg relative'>
            <div className='group-hover:text-red-600'>Quality <span className='block -mt-2'>over quantity</span></div>
            <div className='flex items-center justify-center w-[90px] lg:w-[120px] xl:w-[190px] xl:h-[230px] mt-4'>
                <img src={Wash} alt="wash.png" className='w-[95%] h-[95%] group-hover:w-[100%] group-hover:h-[100%]' />
            </div>

            <div className='absolute bg-red-500 w-[2px] h-36 right-6 top-0'></div>
        </section>
    </div>
  )
}

export default HomeTop