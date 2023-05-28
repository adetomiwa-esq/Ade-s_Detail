import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from '../images/detail.jpg'

function Navbar() {
  const [mobileNav, setMobileNav] = useState(false)
  function toggleMobileNav(){
    setMobileNav(!mobileNav)
  }

  function removeMobileNav(){
    setMobileNav(false)
  }
  return (
    <nav className='flex items-center justify-between h-[90px] border fixed top-0 left-0 w-full px-8 bg-[rgb(229,231,235)] z-[999]'>
        <Link to='/' className='flex items-center'>
          <div className='w-[45px] h-[45px] rounded-full overflow-hidden'>
            <img src={Logo} alt='logo' className='w-[50px] h-[50px]' />
          </div>
          <div className='text-red-500 font-mono'>etails</div>
        </Link>
        <ul className={`flex flex-col fixed left-0 md:scale-[1] py-3 md:py-0 md:static md:flex-row w-[100%] bg-[rgb(229,231,235)] md:w-[27%] lg:w-[20%] justify-between text-xs z-[999] border items-center ${mobileNav ? 'top-[90px] scale-[1]' : 'top-[-50%] scale-[0]'} transition-all duration-200 delay-200 ease-in-out`}>
            <li onClick={removeMobileNav} className='mb-5'><Link to="/services">Services</Link></li>
            <li onClick={removeMobileNav} className='mb-5'><Link to="/about-us">About</Link></li>
            <li onClick={removeMobileNav} className='mb-5'><Link to="/contact">Contact</Link></li>
            <li className='md:hidden w-full'><Link onClick={removeMobileNav} to="/quote" className='border flex border-red-500 text-sm hover:text-white hover:bg-red-500 w-[70%] max-w-[300px] h-[50px] m-auto items-center justify-center'>Request a Quote</Link></li>
        </ul>
        <div className='md:block hidden'>
            <Link to="/quote" className='border border-red-500 py-4 px-6 text-sm hover:text-white hover:bg-red-500'>Request a Quote</Link>
        </div>
        <div className='md:hidden border border-red-500 p-2 cursor-pointer' onClick={toggleMobileNav}>{mobileNav ? <AiOutlineClose /> :<FaBars />}</div>
    </nav>
  )
}

export default Navbar