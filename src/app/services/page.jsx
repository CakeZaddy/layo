import Testimonials from '@/components/Testimonials'
import { services } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Laptop from 'public/service-laptop.jpg'

const Service = ({ id, title, service, info, image }) => (
  <div className='py-5 lg:grid grid-cols-2 md:px-[150px] xl:px-[250px]  gap-7'>
    <img className='w-full' src={image} alt={`pic-of-${title}`} />
    <div className=''>
      <h2 className='font-bold text-lg md:text-xl lg:text-2xl py-5'>{title}</h2>
      <h2 className='font-bold pb-5 md:text-lg lg:text-xl'>
        {id}. {service}
      </h2>
      <p className='text-lg pb-5 lg:text-xl'>{info}</p>
      <Link href={'/contact'}>
        <button className='py-2 w-[350px] bg-orange-400 font-semibold text-xl cursor-pointer rounded-full hover:bg-orange-500 dark:text-black'>
          Know More
        </button>
      </Link>
    </div>
  </div>
)

const page = () => {
  return (
    <div className='font-neuton overflow-hidden'>
      <div className='bg-[#3b7777] dark:bg-[#163333] green h-24'></div>
      <div className='bg-[#3b7777] dark:bg-[#163333] green text-white text-center text-4xl font-semibold font-eczar py-10'>
        <h2>My Social Media Services</h2>
      </div>
      <div className='bg-gray-400 dark:bg-black text-center py-10 px-5 lg:grid grid-cols-2 md:px-[150px] xl:px-[250px]  gap-7'>
        <div className=''>
          <h2 className='text-2xl font-eczar py-5 px-5 md:px-10 md:text-2xl'>
            Want To Get More From Your Social Media Activities?
          </h2>
          <p className='text-xl pb-4'>
            It’s my mission to help small businesses like yours use social media
            more effectively, so you get the results you deserve. It shouldn’t
            feel overwhelming either, so I want to share my years of experience
            and expertise with you so you can use social media more efficiently.
            After all, everyone leads busy lives.
          </p>
          <p className='text-xl pb-4'>
            Whether you’re looking for someone to create your social media
            strategy, or you need some initial guidance, I’m here to help, with
            high-quality services to fit a range of budgets and requirements.
          </p>
        </div>
        <Image className='w-full  py-5' src={Laptop} alt='laptop' />
      </div>
      <div className='px-5 py-10'>
        <h2 className='font-eczar text-2xl lg:text-3xl text-center px-5 pb-5'>
          Here Are Some Of My Services
        </h2>
        {services.map((service, index) => (
          <Service key={service.service} index={index} {...service} />
        ))}
      </div>
      <div className='bg-[#3b7777] dark:bg-[#163333] flex green py-10 flex-col justify-center items-center '>
        <p className='text-xl lg:text-2xl text-center pb-5 px-[50px] md:px-[100px] lg:px-[150px] xl:px-[300px] '>
          If you’re looking for something slightly different to the above,
          please do still get in touch and I’d be happy to discuss how I may be
          able to help.
        </p>
        <Link href={'/contact'}>
          <button className='py-2 w-[250px] bg-orange-400 font-semibold text-xl cursor-pointer rounded-full hover:bg-orange-500 dark:text-black'>
            Contact Me
          </button>
        </Link>
      </div>
      {/* <Testimonials /> */}
    </div>
  )
}

export default page
