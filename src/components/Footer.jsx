import Link from 'next/link'
import React from 'react'
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import { links } from '@/constants'

const Footer = () => {
  return (
    <div className='bg-[#3b7777] dark:bg-[#163333] green p-7 text-center grid md:grid-cols-3 xl:px-20 '>
      <div className=''>
        <h2 className='text-xl mb-5 font-medium'>Subscribe To My Newsletter</h2>
        <p className='text-lg'>
          Receive my latest updates, social media news, special offers, events
          and more. I promise not to spam your inbox
        </p>
        <button className='h-[50px] w-[200px] bg-orange-400 hover:bg-orange-500 dark:text-black font-medium text-lg cursor-pointer rounded-full my-8'>
          Subscribe Now!
        </button>
      </div>
      <hr className='mb-5 md:hidden' />
      <div className='mb-8'>
        <h2 className='text-xl mb-5 font-medium'>Connect With Me</h2>
        <div className='flex gap-2 justify-center mb-5'>
          <FaLinkedinIn className='h-5 w-5 hover:scale-125 ease-in-out duration-300 cursor-pointer' />
          <BsTwitter className='h-5 w-5 hover:scale-125 ease-in-out duration-300 cursor-pointer' />
          <BsInstagram className='h-5 w-5 hover:scale-125 ease-in-out duration-300 cursor-pointer' />
        </div>
        <div className=' text-lg text-yellow-500 hover:text-yellow-600 flex flex-col'>
          {links.map((link) => (
            <Link key={link.id} href={link.url} className='hover:text-red-500'>
              {link.title}
            </Link>
          ))}
        </div>
      </div>
      <hr className='mb-5 md:hidden' />
      <div className=''>
        <h2 className='text-xl mb-5 font-medium'>FREE Tips</h2>
        <p className='text-lg'>
          In this free resource, I provide some useful dates to help start your
          social media posting plan for February.
        </p>
        <button className='h-[50px] w-[200px] bg-orange-400 hover:bg-orange-500 dark:text-black font-medium text-lg cursor-pointer rounded-full my-8'>
          Free Post Ideas
        </button>
      </div>
    </div>
  )
}

export default Footer
