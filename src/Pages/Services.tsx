import React, { useEffect } from 'react'
import { AiFillQuestionCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import AboutSlide from '../components/AboutSlide'
import ServicesBigImg from '../components/ServicesBigImg'
import 'aos/dist/aos.css';
import * as AOS from 'aos';

function Services() {
    useEffect(() => {
        AOS.init({duration: 2000})
    }, [])
  return (
    <main className='pt-[96px]'>
        <section className='flex flex-col md:flex-row pl-3 pr-3 md:pl-8 md:pr-12 lg:pr-28 pb-32 relative w-full overflow-hidden'>
            <div className='w-full mb-5 md:mb-0 md:w-6/12 text-[2.5rem] sm:text-[3rem] lg:text-[4rem] pl-5 sm:pl-10 lg:pl-14 sm:leading-[4.5rem] font-bold relative' data-aos="slide-right">
                <h1>Car Detailing Special</h1>
                <div className='w-[4px] h-[4rem] bg-red-500 absolute top-2 left-0'></div>
            </div>

            <div className='w-full md:w-6/12 md:ml-auto' data-aos="slide-left">
                <p className='mb-16 leading-[2.1rem] text-lg'>We use the clearest, best performing film in the industry with unparalleled install quality. From front-end protection to fully wrapping a vehicle, we can customize a protection package to your exact needs.</p>

                <div className='flex items-center'>
                    <Link to="/quote" className='flex items-center justify-center max-w-[200px] w-[50%] md:w-[250px] md:min-w-[250px] mr-8 h-20 md:text-lg text-white bg-red-500'>Request a Quote</Link>

                    <div>
                        <div>Servicing:</div>
                        <div className='text-red-500'>Lakewood Ranch-Sarasota</div>
                    </div>
                </div>
            </div>
            <h1 className='absolute -bottom-[15%] md:-bottom-[50%] w-full -translate-y-1/ z-[-1] text-[120px] md:text-[300px] text-white overflow-hidden whitespace-nowrap'>Ade's Detail</h1>
        </section>

        <ServicesBigImg />


        <section className='flex flex-col md:flex-row pl-3 pr-3 md:pl-8 md:pr-12 lg:pr-28 relative w-full overflow-hidden bg-zinc-100 py-20'>
            <div className='w-full mb-5 md:mb-0 md:w-6/12 text-[2.5rem] sm:text-[3rem] lg:text-[4rem] pl-5 sm:pl-10 lg:pl-14 lg:w-3/12 sm:leading-[4.5rem] font-bold relative' data-aos="slide-right">
                <h1>Service Pricing</h1>
                <div className='w-[4px] h-[4rem] bg-red-500 absolute top-2 left-0'></div>
            </div>

            <div className='w-full md:w-6/12 md:ml-auto' data-aos="slide-left">
                <p className='mb-16 leading-[2.1rem] text-lg'>We use the clearest, best performing film in the industry with unparalleled install quality. From front-end protection to fully wrapping a vehicle, we can customize a protection package to your exact needs.</p>

                <div className='flex items-center'>
                    <Link to="/quote" className='flex items-center justify-center max-w-[200px] w-[50%] md:w-[250px] md:min-w-[250px] mr-8 h-20 md:text-lg text-white bg-red-500'>Request a Quote</Link>
                </div>
            </div>

        </section>
        
        <section className='bg-zinc-100 pb-20'>
            <div className='w-[95%] m-auto flex flex-wrap'>
                <div className='flex flex-col justify-between h-[350px] border w-[50%] md:w-[25%] xl:p-12 md:p-6 sm:p-7 p-2 bg-zinc-200'>
                    <div className='flex justify-between'>
                        <p>Starting at</p>
                        <i className='text-4xl'><AiFillQuestionCircle /></i>
                    </div>
                    <div>
                        <h2 className='text-red-500 text-[2.8rem] lg:text-[4rem] mb-3'>$2000</h2>
                        <p>Full front</p>
                    </div>
                </div>

                <div className='flex flex-col justify-between h-[350px] border w-[50%] md:w-[25%] xl:p-12 md:p-6 sm:p-7 p-2'>
                    <div className='flex justify-between'>
                        <p>Starting at</p>
                        <i className='text-4xl'><AiFillQuestionCircle /></i>
                    </div>
                    <div>
                        <h2 className='text-red-500 text-[2.8rem] lg:text-[4rem] mb-3'>$2600</h2>
                        <p>High Impact</p>
                    </div>
                </div>

                <div className='flex flex-col justify-between h-[350px] border w-[50%] md:w-[25%] xl:p-12 md:p-6 sm:p-7 p-2 bg-zinc-200'>
                    <div className='flex justify-between'>
                        <p>Starting at</p>
                        <i className='text-4xl'><AiFillQuestionCircle /></i>
                    </div>
                    <div>
                        <h2 className='text-red-500 text-[2.8rem] lg:text-[4rem] mb-3'>$6000</h2>
                        <p>Full body</p>
                    </div>
                </div>

                <div className='flex flex-col justify-between h-[350px] border w-[50%] md:w-[25%] xl:p-12 md:p-6 sm:p-7 p-2'>
                    <div className='flex justify-between'>
                        <p>Starting at</p>
                        <i className='text-4xl'><AiFillQuestionCircle /></i>
                    </div>
                    <div>
                        <h2 className='text-red-500 text-[2.8rem] lg:text-[4rem] mb-3'>$550</h2>
                        <p>DYNOflex</p>
                    </div>
                </div>
            </div>
            <p className='text-center mt-8'><span className='text-red-400'>Note:</span> Pricing will depend on the size and complexity of the vehicle. Please contact us for an <span className='decoration-black underline'>exact quote.</span></p>
        </section>

        <AboutSlide />
    </main>
  )
}

export default Services