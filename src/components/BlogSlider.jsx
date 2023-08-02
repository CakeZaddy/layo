'use client'
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Pagination, Navigation } from 'swiper'

const BlogSlider = () => {
  return (
    <div className='font-neuton font-semibold'>
      <Swiper
        // centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        // autoplay={{ delay: 2500, disableOnInteraction: false }}
        navigation={true}
        // loop={true}
        modules={[Pagination, Navigation]}
        className='mySwiper'
        spaceBetween={30}
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
        <SwiperSlide>
          <div className='w-full shadow-xl flex flex-col justify-center items-center rounded-lg hover:scale-105 duration-300 bg-slate-400'>
            <img
              className='w-full md:h-full'
              src='https://res.cloudinary.com/dwgberjxq/image/upload/v1684251270/layo/blog1_gq9xf1.jpg'
              alt='/'
            />
            <div className='text-center mt-4 mx-auto'>
              <p className='mt-2 px-11'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
                voluptas, exercitationem modi earum est quae sint vero.
              </p>
            </div>
            <button className='h-[40px] w-[180px] bg-orange-400 hover:bg-orange-500 font-medium text-lg cursor-pointer font-eczar rounded-full my-8'>
              Read Blog
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full shadow-xl flex flex-col justify-center items-center rounded-lg hover:scale-105 duration-300 bg-slate-400'>
            <img
              className='w-full md:h-full'
              src='https://res.cloudinary.com/dwgberjxq/image/upload/v1684251270/layo/blog5_tak8yx.jpg'
              alt='/'
            />
            <div className='text-center mt-4 mx-auto'>
              <p className='mt-2 px-11'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
                voluptas, exercitationem modi earum est quae sint vero.
              </p>
            </div>
            <button className='h-[40px] w-[180px] bg-orange-400 hover:bg-orange-500 font-medium text-lg cursor-pointer font-eczar rounded-full my-8'>
              Read Blog
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full shadow-xl flex flex-col justify-center items-center rounded-lg hover:scale-105 duration-300 bg-slate-400'>
            <img
              className='w-full md:h-full'
              src='https://res.cloudinary.com/dwgberjxq/image/upload/v1684251270/layo/blog2_ul9ezp.jpg'
              alt='/'
            />
            <div className='text-center mt-4 mx-auto'>
              <p className='mt-2 px-11'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
                voluptas, exercitationem modi earum est quae sint vero.
              </p>
            </div>
            <button className='h-[40px] w-[180px] bg-orange-400 hover:bg-orange-500 font-medium text-lg cursor-pointer font-eczar rounded-full my-8'>
              Read Blog
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full shadow-xl flex flex-col justify-center items-center rounded-lg hover:scale-105 duration-300 bg-slate-400'>
            <img
              className='w-full md:h-full'
              src='https://res.cloudinary.com/dwgberjxq/image/upload/v1684251270/layo/blog4_mom3sl.jpg'
              alt='/'
            />
            <div className='text-center mt-4 mx-auto'>
              <p className='mt-2 px-11'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
                voluptas, exercitationem modi earum est quae sint vero.
              </p>
            </div>
            <button className='h-[40px] w-[180px] bg-orange-400 hover:bg-orange-500 font-medium text-lg cursor-pointer font-eczar rounded-full my-8'>
              Read Blog
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full shadow-xl flex flex-col justify-center items-center rounded-lg hover:scale-105 duration-300 bg-slate-400'>
            <img
              className='w-full md:h-full'
              src='https://res.cloudinary.com/dwgberjxq/image/upload/v1684251270/layo/blog6_xrlwla.jpg'
              alt='/'
            />
            <div className='text-center mt-4 mx-auto'>
              <p className='mt-2 px-11'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
                voluptas, exercitationem modi earum est quae sint vero.
              </p>
            </div>
            <button className='h-[40px] w-[180px] bg-orange-400 hover:bg-orange-500 font-medium text-lg cursor-pointer font-eczar rounded-full my-8'>
              Read Blog
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full shadow-xl flex flex-col justify-center items-center rounded-lg hover:scale-105 duration-300 bg-slate-400'>
            <div>
              <img
                className='w-full md:h-full object-contain'
                src='  https://res.cloudinary.com/dwgberjxq/image/upload/v1684251270/layo/blog3_ljdbfc.jpg'
                alt='/'
              />
            </div>
            <div className='text-center mt-4 mx-auto'>
              <p className='mt-2 px-11'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
                voluptas, exercitationem modi earum est quae sint vero.
              </p>
            </div>
            <button className='h-[40px] w-[180px] bg-orange-400 hover:bg-orange-500 font-medium text-lg cursor-pointer font-eczar rounded-full my-8'>
              Read Blog
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default BlogSlider
