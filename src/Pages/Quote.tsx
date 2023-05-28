import React, { useEffect, useState } from 'react'
import 'aos/dist/aos.css';
import * as AOS from "aos"

function Quote() {

    const [formData, setFormData] = useState({
        condition: 'clean'
    })
    
    function updateForm(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>){
        const {name, value} = e.target
        setFormData(prevValue => {
           return {...prevValue, [name]: value}
        })
        console.log(value)
    }
    
    useEffect(() => {
        AOS.init({duration: 2000})
    }, [])

  return (
    <main className='bg-zinc-100 flex flex-col lg:flex-row pt-32 pb-16 px-3 sm:px-9 lg:h-[calc(100vh+90px)]'>
        <section className='mb-12 lg:mb-0 lg:w-5/12 px-[5%] relative' data-aos="slide-right">
            <div className='mb-12'>
                <h1 className='text-[3.5rem] leading-[3.9rem]'>Begin Your Project</h1>
                <div className='absolute w-[4px] h-[3rem] bg-red-500 left-0 top-2'></div>
            </div>

            <div className='mb-9 leading-[1.9rem]'>
                <p>Fill in the reuest form to get initial cost estimation and book a service date.</p> <strong>We will get back to you <span className='text-red-500'>within 24 hours.</span></strong>
            </div>

            <div className='leading-[1.9rem]'>
                <p>Our normal hours of operation are:</p>
                <p><strong>9:00am - 5:00pm, Mon-Fri</strong></p>
                <p><strong>Saturday & Sunday - by appointment</strong></p>
                <p className='text-red-500'>8233 Blaikie Ct, Sarasota, FL34240</p>
            </div>
        </section>

        <form className='lg:w-7/12 h-full overflow-y-scroll scrollbar-hide' data-aos="slide-left">
            <div className='mb-20'>
                <h1 className='text-3xl mb-9'>Contact Form</h1>
                <div>
                    <div className='flex mb-8'>
                        <input className='bg-zinc-100 py-6 outline-none w-1/2 border-b-zinc-400 border-b mr-4' type='text' placeholder='First name'/>
                        <input className='bg-zinc-100 py-6 outline-none w-1/2 border-b-zinc-400 border-b' type='text' placeholder='Last name'/>
                    </div>
                    <div className='flex mb-8'>
                        <input className='bg-zinc-100 py-6 outline-none w-1/2 border-b-zinc-400 border-b mr-4' type="text" placeholder='E-mail address' name="" id="" />
                        <input className='bg-zinc-100 py-6 outline-none w-1/2 border-b-zinc-400 border-b' type="text" placeholder='Phone number' name="" id="" />
                    </div>
                </div>
            </div>

            <div className=''>
                <h1 className='text-3xl mb-9'>Vehicle Details</h1>
                <div>
                    <div className='flex mb-8'>
                        <input className='bg-zinc-100 py-6 outline-none w-1/2 border-b-zinc-400 border-b mr-4' type='text' placeholder='Year'/>
                        <input className='bg-zinc-100 py-6 outline-none w-1/2 border-b-zinc-400 border-b' type='text' placeholder='Make'/>
                    </div>
                    <div className='flex mb-8'>
                        <input className='bg-zinc-100 py-6 outline-none w-1/2 border-b-zinc-400 border-b mr-4' type="text" placeholder='Model' name="" id="" />
                        <input className='bg-zinc-100 py-6 outline-none w-1/2 border-b-zinc-400 border-b' type="text" placeholder='Color' name="" id="" />
                    </div>
                </div>
            </div>

            

            <div>
                <h1 className='text-3xl mb-9'>Vehicle Condition</h1>
                <div className='flex w-full flex-col sm:flex-row flex-wrap'>
                    <label htmlFor="clean" className={`border-[2px] h-32 mb-4 sm:mb-0 w-full sm:w-[48%] flex items-center ${formData.condition === 'clean' ? 'border-red-500' : '' }`}>
                        <input
                            type="radio"
                            name="condition"
                            id="clean"
                            value="clean"
                            onChange={updateForm}
                            className='hidden'
                        />
                        <div className={`flex items-center text-xl text-zinc-400 ml-6`}>
                            <div className={`border w-10 h-10 rounded-full flex items-center justify-center ${formData.condition === 'clean' ? 'border-red-500' : 'border-zinc-400' }`}>
                                <div className={`bg-red-500 h-5 w-5 rounded-full ${formData.condition === 'clean' ? 'block' : 'hidden' }`}></div>
                            </div>
                            <div className={`ml-4 ${formData.condition === 'clean' ? 'text-red-500' : '' }`}>clean</div>
                        </div>
                    </label>

                    <label htmlFor="average" className={`border-[2px] h-32 w-full sm:w-[48%] sm:ml-auto flex ${formData.condition === 'average' ? 'border-red-500' : '' }`}>
                        <input
                            type="radio"
                            name="condition"
                            id="average"
                            value="average"
                            onChange={updateForm}
                            className='hidden'
                        />
                        <div className={`flex items-center text-xl text-zinc-400 ml-6`}>
                            <div className={`border w-10 h-10 rounded-full flex items-center justify-center ${formData.condition === 'average' ? 'border-red-500' : 'border-zinc-400' }`}>
                                <div className={`bg-red-500 h-5 w-5 rounded-full ${formData.condition === 'average' ? 'block' : 'hidden' }`}></div>
                            </div>
                            <div className={`ml-4 ${formData.condition === 'average' ? 'text-red-500' : '' }`}>average</div>
                        </div>
                    </label>

                    <label htmlFor="dirty" className={`border-[2px] mt-4 h-32 w-full sm:w-[48%] flex ${formData.condition === 'dirty' ? 'border-red-500' : '' }`}>
                        <input
                            type="radio"
                            name="condition"
                            id="dirty"
                            value="dirty"
                            onChange={updateForm}
                            className='hidden'
                        />
                        <div className={`flex items-center text-xl text-zinc-400 ml-6`}>
                            <div className={`border w-10 h-10 rounded-full flex items-center justify-center ${formData.condition === 'dirty' ? 'border-red-500' : 'border-zinc-400' }`}>
                                <div className={`bg-red-500 h-5 w-5 rounded-full ${formData.condition === 'dirty' ? 'block' : 'hidden' }`}></div>
                            </div>
                            <div className={`ml-4 ${formData.condition === 'dirty' ? 'text-red-500' : '' }`}>dirty</div>
                        </div>
                    </label>

                    <label htmlFor="very-dirty" className={`border-[2px] mt-4 h-32 w-full sm:w-[48%] sm:ml-auto flex ${formData.condition === 'very-dirty' ? 'border-red-500' : '' }`}>
                        <input
                            type="radio"
                            name="condition"
                            id="very-dirty"
                            value="very-dirty"
                            onChange={updateForm}
                            className='hidden'
                        />
                        <div className={`flex items-center text-xl text-zinc-400 ml-6`}>
                            <div className={`border w-10 h-10 rounded-full flex items-center justify-center ${formData.condition === 'very-dirty' ? 'border-red-500' : 'border-zinc-400' }`}>
                                <div className={`bg-red-500 h-5 w-5 rounded-full ${formData.condition === 'very-dirty' ? 'block' : 'hidden' }`}></div>
                            </div>
                            <div className={`ml-4 ${formData.condition === 'very-dirty' ? 'text-red-500' : '' }`}>very dirty</div>
                        </div>
                    </label>
                </div>
            </div>

            <div className='mt-10'>
                <h1 className='text-3xl mb-9'>Additional Comment</h1>
                <div>
                    <textarea className='bg-zinc-100 mt-16 h-[40px] outline-none w-full border-b-zinc-400 border-b' name="" id="" placeholder='Short message'></textarea>
                </div>

                <button className='text-white block w-full lg:w-[250px] text-lg h-[80px] bg-red-500 mt-14' type="submit">Send request</button>
            </div>
        </form>
    </main>
  )
}

export default Quote