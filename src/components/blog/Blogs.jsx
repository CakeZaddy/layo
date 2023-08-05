import React from 'react'
import BlogSlider from './BlogSlider'
import Link from 'next/link'

const Blogs = () => {
  return (
    <div className='w-full py-10 px-10'>
      <div className='flex flex-col gap-3'>
        <h2 className='text-3xl text-center md:font-medium md:text-4xl pb-5'>
          My Blog Posts
        </h2>
        <BlogSlider />
        <div className='flex justify-center items-center pt-5'>
          <Link href={'/blog'}>
            <button className='h-[50px] w-[230px] bg-orange-500 hover:bg-orange-600 font-semibold text-lg cursor-pointer font-eczar rounded-full dark:text-black'>
              View Blogs
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Blogs
