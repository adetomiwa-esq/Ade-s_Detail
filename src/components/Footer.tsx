import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='text-white bg-black py-[120px] xl:flex px-5 sm:px-14'>

        <div className='flex flex-col md:flex-row xl:flex-col relative md:items-center xl:items-start xl:pl-16'>
            <div className='w-[4px] h-12 bg-red-500 absolute left-[-15px] xl:h-2/6'></div>
            <p className='text-[3rem] md:ml-[6%] xl:ml-0  leading-[3.1rem] xl:w-10/12'>Ready to care for your car?</p>
            <Link to="/" className='flex items-center justify-center w-52 min-w-52 h-16 text-lg text-white bg-red-500 mt-9 md:mt-0 md:ml-[10%] xl:ml-0 xl:mt-10'>Request a Quote</Link>
        </div>

        <div className='flex flex-col-reverse xl:flex-row xl:w-7/12'>
            <div className='flex h-[400px] xl:w-1/2 flex-col justify-evenly text-zinc-400 mt-28 xl:mt-0'>
                <p>Home</p>
                <p>Paint protection film</p>
                <p>Ceramic coatings</p>
                <p>Paint correction</p>
                <p>Car Detailing</p>
                <p>Window tint</p>
                <p>About</p>
                <p>Contact</p>
                <p>Request a quote</p>
            </div>

            <div className='mt-28 xl:mt-0 xl:w-1/2'>
                <p className='text-3xl mb-7'>Contact us</p>
                <div className='text-red-500 text-lg mb-8'>
                    <p>adetomiwadetails@yahoo.com</p>
                    <p>941-735-5738</p>
                    <p>8233 Blaikie Ct, Sarasota, FL 34240</p>
                </div>
                <div>
                    <p><span className='text-zinc-400'>Mon-Fri: </span>9:00am-5:00pm</p>
                    <p><span className='text-zinc-400'>Sat-Sun: </span>by appointment</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer