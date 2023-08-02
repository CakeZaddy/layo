'use client'
import { testimonials } from '@/constants'
import { tiltOptions } from '@/utils'
import React from 'react'
import { Tilt } from 'react-tilt'

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <Tilt options={tiltOptions()}>
    <div className='w-[300px] shadow-xl flex flex-col justify-center items-center rounded-lg  bg-slate-400 font-neuton'>
      <img
        className='rounded-full w-[180px] my-5'
        src={image}
        alt={`feedback-by-${name}`}
      />
      <div className='text-center mt-4 dark:text-black mx-auto px-5 mb-8'>
        <h4 className='font-semibold text-lg'>{testimonial}</h4>
        <p className='mt-2 px-11'>{name}</p>
        <p className=' px-11'>
          {designation} of {company}
        </p>
      </div>
    </div>
  </Tilt>
)

const Testimonial = () => {
  return (
    <div className=''>
      <div className='py-10 '>
        <h2 className='text-3xl font-eczar text-center md:font-medium md:text-4xl'>
          Client Testimonials
        </h2>
      </div>
      <div className='mx-5  flex gap-3 mt-10 h-full'>
        {testimonials.map((testimonial, index, id) => (
          <FeedbackCard key={testimonial.id} index={index} {...testimonial} />
        ))}
      </div>
      <div className='flex justify-center items-center'>
        <button className='h-[50px] w-[220px] bg-orange-400 hover:bg-orange-500 dark:text-black font-medium text-lg cursor-pointer font-eczar rounded-full my-8'>
          Full Testimonials
        </button>
      </div>
    </div>
  )
}

export default Testimonial
