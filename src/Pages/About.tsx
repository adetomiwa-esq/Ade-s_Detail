import React, { useEffect } from 'react'
import AboutBigImg from '../components/AboutBigImg';
import AboutSlide from '../components/AboutSlide';
import AboutValues from '../components/AboutValues';
import AboutVid from '../components/AboutVid';
import 'aos/dist/aos.css';
import * as AOS from "aos";



function About() {
    useEffect(() => {
        AOS.init({duration: 2000})
    }, [])

  return (
    <div className='pt-[90px]'>
        <section className='flex flex-col md:flex-row pl-5 md:pl-10 pr-2 sm:pr-8 md:pr-24 min-h-[400px] md:items-center overflow-hidden relative py-16 md:py-0'>
            <div className='relative mb-5 md:mb-0 w-full md:w-5/12 md:mr-20' data-aos="slide-right">
                <div className='text-[2.4rem] lg:text-[3rem] font-mono pl-5 md:pl-14'>
                    <h1 className='p-0 m-0 leading-[55px]'>Founded on Passion. Built on Service.</h1>
                </div>
                <div className='bg-red-500 absolute w-[4px] top-2 left-0 h-8'></div>
            </div>

            <div className='w-full md:w-8/12 lg:w-5/12' data-aos="slide-left">
                <p className='leading-[2rem] mb-6'>True Detail was created for owners of fine automobiles who share the same appreciation for the art and beauty of cars that we do. Our clients not only consider detailing an advanced skill, but a true art form understood and practiced by few.</p>
                <div>
                    <div>Servicing:</div>
                    <div className='text-red-500'>Lakewood Ranch-Sarasota</div>
                </div>
            </div>
            <h1 className='absolute -bottom-[15%] md:-bottom-[50%] w-full -translate-y-1/ z-[-1] text-[120px] md:text-[300px] text-white overflow-hidden whitespace-nowrap'>Ade's Detail</h1>
        </section>

        <AboutBigImg />

        <div className='bg-black text-white'>
            <AboutVid />
        </div>
        
        <AboutValues />

        <AboutSlide />
    </div>
  )
}

export default About