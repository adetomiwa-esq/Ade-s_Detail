import React from 'react'
import ClientsReviews from '../components/ClientsReviews'
import ComplexServices from '../components/ComplexServices'
import HomeTop from '../components/HomeTop'
import HomeVid from '../components/HomeVid'

function Home() {
  return (
    <main>
      <h1 className='absolute top-[50%] w-full -translate-y-1/2 z-[-1] text-[6rem] lg:text-[300px] text-white overflow-hidden whitespace-nowrap opacity-60'>Ade's Detail</h1>
      <HomeTop />
      <HomeVid />
      <ComplexServices />
      <ClientsReviews />
    </main>
  )
}

export default Home