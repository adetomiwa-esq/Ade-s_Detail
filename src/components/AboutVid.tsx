import React, { useEffect } from 'react';
import {FiInstagram} from 'react-icons/fi';
import {FaFacebookSquare} from 'react-icons/fa';
import 'aos/dist/aos.css';
import * as AOS from "aos";


function AboutVid() {
    useEffect(() => {
        AOS.init({duration: 2000})
    }, [])

  return (
    <section className='py-16 px-6 sm:px-10 xl:px-16 xl:flex justify-between'>
        <div className='pl-5 sm:pl-16 xl:pl-24 relative xl:w-4/12 md:flex xl:block mb-12 xl:mb-0' data-aos="slide-right">
            <div className='mb-5 mr-24 xl:mr-0'>
                <h1 className='text-[2.7rem]'>About Ade'sDetail</h1>
                <div className='bg-red-500 absolute w-[4px] top-4 left-0 h-10'></div>
            </div>
            
            <div>
                <p className='text-zinc-300 leading-[2rem] mb-7'>True Detail was created for owners of fine automobiles who share the same appreciation for the art and beauty of cars that we do. We offer comprehensive yet flexible detailing and protection services to suit our clients’ needs, and we do it with unequaled quality, passion, and professionalism.</p>
                <div className='text-[20px] leading-[30px] mb-8'>
                    <p>ade'sdeatil@yahoo.com</p>
                    <p>08046******</p>
                    <p>8233 Blaikie Ct, Sarasota, FL 34240</p>
                </div>
                <div>
                    <div className='flex items-center mb-7'><i className='text-red-600 mr-3 text-[28px]'><FiInstagram /></i>@ade'sdetail</div>
                    <div className='flex items-center mb-7'><i className='text-red-600 mr-3 text-[28px]'><FaFacebookSquare /></i>@ade'sdetail</div>
                </div>
            </div>
        </div>

        <div className='xl:w-7/12' data-aos="slide-left">
            <iframe className='w-full xl:h-[500px] aspect-video' src="https://www.youtube.com/embed/suqwIPrAWxk" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title='myFrame' allowFullScreen></iframe>
        </div>
    </section>
  )
}

export default AboutVid