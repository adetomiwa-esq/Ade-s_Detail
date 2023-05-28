import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { useSelector } from 'react-redux'
import { RootState } from '../store';

type Prototype = {
    review: {
        imgUrl: string
        initials: string
        clientName: string
        review1: string
        review2: string
        car: string
    },

    index: number
}

function EachReview({review, index}: Prototype) {
    const {current} = useSelector((store: RootState) => store.reviews)
  return (
    <div className={`absolute ${index === current ? 'left-0 relative ' : 'left-[-2000%]'} top-0 flex transition-all duration-500 delay-500 flex-col lg:flex-row px-5`}>
        <div>
            <img className='sm:max-w-[300px] lg:w-[450px] lg:max-w-[450px]' src={review.imgUrl} alt={review.car} />
        </div>

        <div className='lg:ml-12 mt-3 lg:w-6/12 text-sm flex flex-col text-zinc-700'>
            <div className='flex text-3xl items-center mb-9'>
                <p className='text-white bg-red-500 w-[60px] h-[60px] text-lg rounded-full flex items-center justify-center'>{review.initials}</p>
                <p className='text-black ml-5'>{review.clientName}</p>
            </div>
            <p className='leading-7'>{review.review1}</p>
            {review.review2 ? <p className='my-7 leading-7'>{review.review2}</p> : ''}

            <div className=' lg:mt-auto text-lg'>
                <div className='flex text-red-600'>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>
                <p>{review.car}</p>
            </div>
        </div>
    </div>
  )
}

export default EachReview