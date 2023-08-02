'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai'
import { links } from '@/constants'

const Navbar = ({ params }) => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  const pathname = usePathname()
  function pathMatch(route) {
    if (route === pathname) {
      return true
    }
  }

  return (
    <div className='fixed flex font-eczar justify-between w-full items-center h-24 mx-auto z-[100] bg-gray-300 dark:bg-black lg:px-[50px] xl:px-[100px] shadow-md shadow-slate-700 dark:shadow-slate-500'>
      <Link
        href='/'
        className='w-full text-3xl md:text-4xl font-semibold font-chivo text-center inline-block lg:text-left'
      >
        Ebunoluwa Oguntimehin
      </Link>
      <div className='lg:flex justify-center items-center gap-8 hidden'>
        <ul className='flex justify-center gap-3 xl:gap-5 items-center hover:text-gray-500 font-medium text-lg'>
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className={` cursor-pointer con hover:text-black dark:hover:text-white ${
                pathMatch(link.url) && 'border-b-2 border-b-red-500'
              }`}
            >
              {link.title}
            </Link>
          ))}
        </ul>
        <div className='flex gap-3 justify-center mb-2'>
          <FaLinkedinIn className='h-6 w-6 hover:scale-125 ease-in-out duration-300 cursor-pointer' />
          <BsTwitter className='h-6 w-6 hover:scale-125 ease-in-out duration-300 cursor-pointer' />
          <BsInstagram className='h-6 w-6 hover:scale-125 ease-in-out duration-300 cursor-pointer' />
        </div>
        <div className='flex justify-center items-center'>
          <button className='h-[40px] w-[150px] bg-orange-400 font-medium text-lg cursor-pointer rounded-full hover:bg-orange-500 dark:text-black'>
            Free Tips
          </button>
        </div>
      </div>
      <div
        className='fixed right-2 top-1 lg:hidden p-1 z-[51] cursor-pointer'
        onClick={handleNav}
      >
        {nav ? (
          <AiOutlineMenuFold size={30} />
        ) : (
          <AiOutlineMenuUnfold size={30} />
        )}
      </div>
      <div
        className={
          nav
            ? 'fixed lg:hidden left-0 top-0 w-full h-full bg-gray-300 dark:bg-black ease-in-out duration-700 border-r border-black z-50'
            : 'fixed left-[-100%] lg:hidden top-0 w-[85%] h-full bg-gray-300 dark:bg-black ease-in-out duration-700 border-r border-black z-50'
        }
      >
        <h1 className='text-center mt-10 text-3xl md:text-4xl font-chivo font-semibold'>
          Ebunoluwa Oguntimehin
        </h1>
        <ul className='text-center text-gray-500 font-semibold text-5xl pt-10'>
          {links.map((link) => (
            <li key={link.id}>
              <Link
                onClick={handleNav}
                href={link.url}
                className={` p-4 hover:text-black dark:hover:text-white con inline-block cursor-pointer ${
                  pathMatch(link.url) &&
                  'text-gray-400 border-b-4 inline-block border-b-red-500'
                }`}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className='flex gap-5 justify-center mt-10'>
          <FaLinkedinIn className='h-8 w-8 hover:scale-125 ease-in-out duration-300 cursor-pointer' />
          <BsTwitter className='h-8 w-8 hover:scale-125 ease-in-out duration-300 cursor-pointer' />
          <BsInstagram className='h-8 w-8 hover:scale-125 ease-in-out duration-300 cursor-pointer' />
        </div>
        <div className='flex justify-center items-center mt-10'>
          <button className='h-[50px] w-[200px] bg-orange-400 font-semibold text-xl cursor-pointer rounded-full hove:bg-orange-500 dark:text-black'>
            Free Tips
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
