import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import EachService from './EachService';
// import { Services } from './ServicesImg';
import rounded from '../images/rounded.png';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import 'aos/dist/aos.css';
import * as AOS from 'aos';

export type ourServices = {
    imgSrc: string
    title: string
    para: string
    url: string
}

function ComplexServices() {
    const {Services} = useSelector((store: RootState) => {
        return store.service
    })
    
    const myServices: ourServices[] = Services

    useEffect(() => {
        AOS.init({duration: 2000})
    }, [])
  return (
    <section className='bg-black text-white pt-20 pb-12 px-3 sm:px-7 md:px-10 lg:px-16 flex flex-col md:flex-row lg:h-[650px]'>
        <div className='md:w-3/12 mb-9 md:mb-0' data-aos="slide-right">
            <h1 className='text-5xl flex flex-col mb-12 leading-[3.4rem]'>
                <span>Complex</span>
                <span>Services</span>
            </h1>

            <p className='mb-8 md:mb-14 text-zinc-400 leading-10'>
            Detailing has a different meaning with everyone, which is why with True Detail, we offer multiple services to bring back gloss and clarity, all the way up to restorative level detail to bring a vehicle to a like-new condition or better.
            </p>

            <p>Servicing area:</p>

            <p className='text-red-400'>Lakewood Ranch - Sarasota</p>
        </div>


        <div className='md:w-[58%] md:ml-auto md:h-10/12 overflow-x-scroll scrollbar-hide' data-aos="slide-left">
            <div className='w-full'>
                {
                    myServices.map((service: ourServices, index: number) => {
                        return <EachService
                            key={index}
                            service={service}
                        />
                    })
                }
            </div>

            <div className='flex items-center border md:px-8 py-8 px-2'>
                <div><img src={rounded} alt="rounded" /></div>
                <div className='text-2xl ml-6'>
                    <h2>Ready to care</h2>
                    <h2> for your car?</h2>
                </div>
                <Link to="/" className='ml-auto py-4 px-6 text-sm text-white bg-red-500'>Request a Quote</Link>
            </div>
        </div>
    </section>
  )
}

export default ComplexServices