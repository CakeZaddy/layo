'use client'
import { services } from '@/constants'
import { tiltOptions } from '@/utils'
import Link from 'next/link'
import React from 'react'
import { Tilt } from 'react-tilt'

const ServiceCard = ({ id, image, service, info, index }) => (
  <Tilt options={tiltOptions()}>
    <div className='w-full h-full shadow-lg dark:shadow-slate-500 flex flex-col justify-center items-center rounded-lg  duration-300 bg-slate-300 dark:bg-slate-800'>
      <div className='w-full h-full'>
        <img
          className='w-full h-full'
          src={image}
          alt={`image-of-${service}`}
        />
      </div>
      <div className='text-center mt-4 mx-auto'>
        <h4 className='font-semibold font-eczar'>
          {id}. {service}
        </h4>
        <p className='mt-2 px-11'>{info}</p>
      </div>
      <Link href={'/'}>
        <button className='h-[40px] w-[180px] bg-orange-400 hover:bg-orange-500 font-medium text-lg cursor-pointer rounded-full my-8 font-eczar dark:text-black'>
          Discover More
        </button>
      </Link>
    </div>
  </Tilt>
)

const Services = () => {
  return (
    <div className='w-full py-10 px-10 font-neuton text-lg bg-gray-400 dark:bg-black overflow-hidden'>
      <div className=''>
        <h2 className='text-3xl text-center text-white font-eczar md:font-medium md:text-4xl'>
          How Can I Help You With Your Social Media Strategy?
        </h2>
        <div className='my-10 mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
          {services.map((service, index, id) => (
            <ServiceCard key={service.id} index={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
