import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootState } from '../store'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { decrease, increase } from '../features/cart/ContactSlice';
import 'aos/dist/aos.css';
import * as AOS from 'aos';

function Contact() {
     const {contactSlider, current} = useSelector((store: RootState) => store.contact)
     const dispatch = useDispatch()

     type form = {
         firstName: string,
         lastName: string,
         email: string,
         phone: string,
         msg: string
     }

     const [contactForm, setContactForm] = useState<form>({
         firstName: '',
         lastName: '',
         email: '',
         phone: '',
         msg: ''
     })

     //const [valid, setValid] = useState<boolean>(true)

     useEffect(() => {
         AOS.init({duration: 2000})
     }, [])

     function fillForm(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>){
        const {name, value} = e.target

        setContactForm(prevValue => {
            return {...prevValue, [name]: value}
        })
        
        // const number = new RegExp('/[^a-z]/gi')

        // console.log(number.test(contactForm.firstName))

        // if(+contactForm.firstName * 1){
        //     setValid(false)
        // }
     }

    //  useEffect(()=> {
    //     const theForm = document.querySelector('#contact-form')

    //     theForm?.addEventListener('submit', submitMyForm)

    //     function submitMyForm(e: SubmitEvent){
    //         e.preventDefault()
    //     }
    //  }, [])

  return (
    <main className='pt-[100px] overflow-x-hidden'>
        <section className='flex flex-col md:flex-row pl-3 pr-3 md:pl-8 md:pr-12 lg:pr-28 pb-32'>
            <div className='w-full mb-5 md:mb-0 md:w-6/12 text-[2.5rem] sm:text-[3rem] lg:text-[4rem] pl-5 sm:pl-10 lg:pl-14 sm:leading-[4.5rem] font-bold relative' data-aos="slide-right">
                <h1>Contact Ade'sDetail</h1>
                <div className='w-[4px] h-[4rem] bg-red-500 absolute top-2 left-0'></div>
            </div>

            <div className='w-full md:w-6/12 md:ml-auto' data-aos="slide-left">
                <p className='mb-16 leading-[2.1rem] text-lg'>If there's anything we can do for you, please use the form below to contact us! If you are wanting to inquire about requesting a quote or booking a service, please see our Request a Quote page.</p>

                <div className='flex items-center'>
                    <Link to="/" className='flex items-center justify-center max-w-[200px] w-[50%] md:w-[250px] md:min-w-[250px] mr-8 h-20 md:text-lg text-white bg-red-500'>Request a Quote</Link>

                    <div>
                        <div>Servicing:</div>
                        <div className='text-red-500'>Lakewood Ranch-Sarasota</div>
                    </div>
                </div>
            </div>
        </section>


        <section className='flex flex-col lg:flex-row px-5 bg-zinc-100 pt-20 lg:pt-[130px]'>
            <div className='w-7/12 lg:w-4/12 pl-9 lg:pl-16 relative'data-aos="slide-right">
                <h1 className='text-[2.8rem] sm:text-[3.2rem] leading-[3.7rem] font-medium'>Have questions or want to set a call?</h1>
                <div className='absolute w-[4px] h-[3rem] left-0 top-4 bg-red-500'></div>
            </div>

            <div className='w-full lg:w-7/12 lg:ml-auto' data-aos="slide-left">

                <div className='mb-8 lg:mb-14'>
                    <p className='mb-3'>Fill out the contact form or give us a call if you have any questions</p>
                    <strong className='block'>We will get back to you within 24 hours.</strong>
                </div>

                <div className='flex w-full'>
                    <div className='w-6/12 border border-zinc-600 h-[300px] flex items-center pl-2 md:pl-12 break-words'>
                        <div className='relative py-3 md:px-8'>
                            <h3 className='text-red-500 mb-[6px]'>Contact details</h3>
                            <p className='mb-[4px]'>941-735-5738</p>
                            <p className='mb-[4px]'>ade@gmail.com</p>
                            <p className='mb-[4px]'>8233 Blaikie CT, Sarasota, FL 34240</p>
                            <div className='w-[4px] hidden md:block h-full absolute left-0 top-0 bg-red-500'></div>
                        </div>
                    </div>

                    <div className='w-6/12 border border-l-0 border-zinc-600 h-[300px] flex items-center pl-2 md:pl-12'>
                        <div className='relative py-3 px-2 md:px-8'>
                            <h3 className='text-red-500 mb-[6px]'>Operation hours</h3>
                            <p className='mb-[4px]'>9:00am - 5:00pm, Mon-Fri</p>
                            <p className='mb-[4px]'>Saturday -by appointment</p>
                            <p className='mb-[4px]'>Sunday -by appointment</p>
                            <div className='w-[4px] hidden md:block h-full absolute left-0 top-0 bg-red-500'></div>
                        </div>
                    </div>
                </div>

                <form action="" className='mt-20' id='contact-form'>
                    <h1 className='text-3xl mb-9'>Contact Form</h1>

                    <div>
                        <div className='flex mb-8'>
                            <input
                                className={`bg-zinc-100 py-6 outline-none w-1/2 border-b-zinc-400 border-b mr-4`}
                                type='text'
                                placeholder='First name'
                                value={contactForm.firstName}
                                onChange={fillForm}
                                name='firstName'
                            />

                            <input className='bg-zinc-100 py-6 outline-none w-1/2 border-b-zinc-400 border-b' type='text' placeholder='Last name'/>
                        </div>

                        <div className='flex mb-8'>
                            <input className='bg-zinc-100 py-6 outline-none w-1/2 border-b-zinc-400 border-b mr-4' type="text" placeholder='E-mail address' name="" id="" />
                            <input className='bg-zinc-100 py-6 outline-none w-1/2 border-b-zinc-400 border-b' type="text" placeholder='Phone number' name="" id="" />
                        </div>

                        <div>
                            <textarea className='bg-zinc-100 mt-16 h-[40px] outline-none w-full border-b-zinc-400 border-b' name="" id="" placeholder='Short message'></textarea>
                        </div>

                        <button className='text-white w-[250px] text-lg h-[80px] bg-red-500 mt-14' type="submit">Send message</button>
                    </div>
                </form>

                <div className='mt-24'>
                    <h3 className='text-2xl font-semibold mb-8'>Servicing Area</h3>
                    <p>We are operating in the <span className='text-red-500'>Lakewood Ranch - Sarasota area.</span></p>
                </div>
            </div>
        </section>
        

        <div className='mx-5 sm:mx-9 relative h-[320px] sm:h-[350px] md:h-[400px]'>
            <div className='h-full border'>
                {
                    contactSlider.map((each, index) => {
                        return <div key={index} className={`flex h-full absolute top-0 ${current === index ? 'left-0' : 'left-[2000%]'} transition-all duration-500 delay-500 w-full`}>
                            <div className='w-full md:w-1/2 relative' data-aos="slide-left">
                                <img src={each.leftImg} alt="left-img" className='h-full w-full' />

                            </div>

                            <div className='md:w-1/2 hidden md:block'data-aos="slide-right">
                                <img src={each.rightImg} alt="right-img" className='h-full w-full'/>
                            </div>
                        </div>
                    })
                }
            </div>

          <div className='w-[60px] h-[60px] absolute top-[50%] right-2 sm:right-11 -translate-y-[50%] flex items-center justify-center rounded-full border cursor-pointer m-3 hover:bg-red-400 text-white border-white z-[50]' onClick={() => dispatch(increase())}><AiOutlineRight /></div>
          <div className='w-[60px] h-[60px] absolute top-[50%] left-2 sm:left-11 -translate-y-[50%] flex items-center justify-center rounded-full border cursor-pointer m-3 hover:bg-red-400 text-white border-white z-[50]' onClick={() => dispatch(decrease())}><AiOutlineLeft /></div>

        </div>
    </main>
  )
}

export default Contact