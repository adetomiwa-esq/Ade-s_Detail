import React from 'react'
import { AiOutlineRise } from 'react-icons/ai';
import { FaGraduationCap, FaHandsHelping } from 'react-icons/fa';
import { SiQuantconnect } from 'react-icons/si';
import { BsShieldFillCheck } from 'react-icons/bs';

function AboutValues() {

  return (
    <section className='px-5 sm:px-10 bg-zinc-100 pb-[80px] pt-[150px]'>
        <div className='mb-8'>
            <div className='relative mb-5 px-10'>
                <h1 className='text-[52px]'>Core Values</h1>
                <div className='bg-red-500 absolute w-[4px] top-4 left-0 h-4/6'></div>
            </div>
            <p className='leading-[2rem]'>While we strive to provide results nothing short of perfection, just as important is ensuring we act along side our core values. We are loyal to ourselves, our customers and to these core values because they shape us and define what we believe will make us successful.</p>
        </div>

        <div className='flex flex-col md:flex-row flex-wrap'>
            <div className='w-full md:w-1/2 border pb-9 md:h-[430px] px-5 lg:px-7 pt-7 mb-12 bg-zinc-200'>
                <div className='w-[100px] min-w-[100px] h-[100px] mb-6 flex items-center justify-center bg-white rounded-full text-red-600 text-[2.5rem]'><AiOutlineRise /></div>
                <div className=''>
                    <h4 className='mb-3 text-[24px]'>Go the extra mile</h4>
                    <p className='leading-[1.7rem]'>We strive to always over-deliver and exceed people’s expectations at everything we do, and we do so with enthusiasm.</p>
                </div>
            </div>

            <div className='w-full md:w-1/2 border pb-9 md:h-[430px] px-5 lg:px-7 pt-7 mb-12'>
                <div className='w-[100px] min-w-[100px] h-[100px] mb-6 flex items-center justify-center bg-white rounded-full text-red-600 text-[2.5rem]'><FaGraduationCap /> </div>
                <div className=''>
                    <h4 className='mb-3 text-[24px]'>Always be learning</h4>
                    <p className='leading-[1.7rem]'>This industry is ever evolving, whether that is with better products or new techniques, so we believe in taking the time to research and test new ideas to better ourselves and performance.</p>
                </div>
            </div>

            <div className='w-full md:w-1/2 border pb-9 md:h-[430px] px-5 lg:px-7 pt-7 mb-12'>
                <div className='w-[100px] min-w-[100px] h-[100px] mb-6 flex items-center justify-center bg-white rounded-full text-red-600 text-[2.5rem]'><SiQuantconnect /></div>
                <div className=''>
                    <h4 className='mb-3 text-[24px]'>Believe</h4>
                    <p className='leading-[1.7rem]'>We believe in the direction we are going and exactly what needs to be done to get there. We believe in everything that True Detail stands for, including these core values, and live by them. It’s who we are fundamentally at our core. We believe in that.</p>
                </div>
            </div>

            <div className='w-full md:w-1/2 border pb-9 md:h-[430px] px-5 lg:px-7 pt-7 mb-12 bg-zinc-200'>
                <div className='w-[100px] min-w-[100px] h-[100px] mb-6 flex items-center justify-center bg-white rounded-full text-red-600 text-[2.5rem]'><BsShieldFillCheck /></div>
                <div className=''>
                    <h4 className='mb-3 text-[24px]'>Accept responsibility</h4>
                    <p className='leading-[1.7rem]'>We always accept full responsibility for our actions and performance. When we identify an issue or are given a task, we own that issue or task and see it through to its completion. We don’t shift blame. Nothing we are aware of is ever someone else’s fault. We always take it fully upon ourselves to make it right.</p>
                </div>
            </div>

            <div className='w-full md:w-1/2 border pb-9 md:h-[430px] px-5 lg:px-7 pt-7 mb-12 bg-zinc-200'>
                <div className='w-[100px] min-w-[100px] h-[100px] mb-6 flex items-center justify-center bg-white rounded-full text-red-600 text-[2.5rem]'><FaHandsHelping /></div>
                <div className=''>
                    <h4 className='mb-3 text-[24px]'>Build positive relationships</h4>
                    <p className='leading-[1.7rem]'>Quality, positive relationships are what successful businesses and successful people thrive on. Consistently making efforts to build strong relationships with everyone we encounter creates strong bonds and friendships, and ultimately creates lifetime customers and loyalty.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutValues