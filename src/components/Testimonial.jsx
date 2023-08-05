'use client'
import { testimonials } from '@/constants'
import { tiltOptions } from '@/utils'
import React from 'react'
import { Tilt } from 'react-tilt'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Scrollbar, A11y } from 'swiper/modules'
import 'swiper/css/bundle'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

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
      <div className=''>
        <h2 className='text-3xl mt-5 font-eczar text-center md:font-medium md:text-4xl'>
          Client Testimonials
        </h2>
      </div>
      <div className=' mt-10 h-full'>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={3}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          loop={true}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          {testimonials.map((testimonial, index, id) => (
            <SwiperSlide key={testimonial.id}>
              <div className='p-5'>
                <FeedbackCard
                  key={testimonial.id}
                  index={index}
                  {...testimonial}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
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
