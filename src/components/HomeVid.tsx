import React from 'react'

function HomeVid() {
  return (
      <div className='w-full h-fit relative'>
          <div className="aspect-w-16 aspect-h-7">
            <iframe src="https://www.youtube.com/embed/2UhfF7kVTIA" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title='myFrame' allowFullScreen></iframe>
          </div>

          <div className='absolute hidden lg:block left-16 top-[35%]'>
            <div className='text-white relative text-7xl'>
              <h1>Based on</h1>
              <h1>Experience</h1>
              <div className='absolute w-[3px] h-12 top-3 -left-4 bg-red-500'></div>
            </div>
          </div>

          <div className='hidden lg:flex flex-col justify-between bg-zinc-900 text-white absolute w-[37%] right-12 top-1/2 -translate-y-[50%] h-5/6 px-16 pt-16 pb-20'>
            <p>statistics</p>

            <div>
              <div className='flex justify-between items-center relative pl-4'>
                <div className='absolute w-1 h-[50px] bg-red-600 left-0 top-1/2 -translate-y-[50%]'></div>
                <div className='text-[4rem]'>6<span className='text-zinc-400'>+</span></div>
                <div className='flex flex-col text-red-400'>
                  <span>Years of</span><span>experience</span>
                </div>
              </div>

              <div className='w-full h-[1px] bg-zinc-300 my-5'></div>

              <div className='flex justify-between items-center relative pl-4'>
                <div className='absolute w-1 h-[50px] bg-red-600 left-0 top-1/2 -translate-y-[50%]'></div>
                <div className='text-[4rem]'>5k<span className='text-zinc-400'>+</span></div>
                <div className='flex flex-col text-red-400'>
                  <span>vehicles</span><span>serviced</span>
                </div>
              </div>

            </div>
          </div>
      </div>
  )
}

export default HomeVid