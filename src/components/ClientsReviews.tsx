import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import EachReview from './EachReview';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { decrease, increase } from '../features/cart/ReviewSlice';
import 'aos/dist/aos.css'
import * as AOS from 'aos'

function ClientsReviews() {
  const {reviews} = useSelector((store: RootState) => store.reviews)
  const {current} = useSelector((state: RootState) =>  state.reviews)

  const dispatch = useDispatch()

  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])

  return (
    <section className='pt-12 sm:pt-20 lg:pt-36 pb-12 mb-12 lg:px-24 md:px-16' data-aos="slide-left">
      <div className='mb-9 relative'>
        <h1 className='text-[3rem]'>Client's Reviews</h1>
        <div className='w-[3px] h-[2.7rem] absolute -left-12 top-1/2 bg-red-500 -translate-y-[50%]'></div>
      </div>


      <div className='relative'>
        <div className='relative  sm:h-[600px] lg:min-h-[450px]'>
          {reviews.map((review, index) => {
            return <EachReview review={review} key={index} index={index}/>
          })}
        </div>
        <div className='absolute top-0 right-[10px] md:right-[-50px]'>
          <div className='w-[60px] h-[60px] flex items-center justify-center rounded-full border cursor-pointer m-3 hover:bg-red-400 hover:text-white border-zinc-400 bg-red-400 sm:bg-transparent text-white sm:text-black' onClick={() => dispatch(increase())}><AiOutlineRight /></div>
          <div className='w-[60px] h-[60px] flex items-center justify-center rounded-full border cursor-pointer m-3 hover:bg-red-400 hover:text-white border-zinc-400 bg-red-400 sm:bg-transparent text-white sm:text-black' onClick={() => dispatch(decrease())}><AiOutlineLeft /></div>
        </div>

        <div className='flex absolute right-0 xl:bottom-[100px] bottom-5'>
          {
            reviews.map((review, index) => {
              return <div key={index} className={`w-[7px] h-[7px] m-[3px] rounded-full ${current === index ? 'bg-black' : 'bg-zinc-400'} transition-all duration-500 delay-500`}></div>
            })
          }
        </div>
      </div>
    </section>
  )
}

export default ClientsReviews