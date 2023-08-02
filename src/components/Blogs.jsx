import React from 'react'
import BlogSlider from './BlogSlider'

const Blogs = () => {
  return (
    <div className='w-full py-10 px-10'>
      <div className='flex flex-col gap-3'>
        <h2 className='text-3xl text-center md:font-medium md:text-4xl'>
          My Blog Posts
        </h2>
        <p className='text-lg text-center'>Page Is Coming Soon</p>
        {/* <div className='my-10 mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
          <div className='w-full shadow-xl flex flex-col justify-center items-center rounded-lg hover:scale-105 duration-300 bg-slate-400 dark:bg-slate-800'>
            <img
              className='w-full md:h-full'
              src='https://res.cloudinary.com/dwgberjxq/image/upload/v1684227376/layo/brainstorm_kwpdbp.jpg'
              alt='/'
            />
            <div className='text-center mt-4 mx-auto'>
              <p className='mt-2 px-11'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
                voluptas, exercitationem modi earum est quae sint vero.
              </p>
            </div>
            <button className='h-[40px] w-[180px] bg-orange-400 hover:bg-orange-500 font-medium text-lg cursor-pointer rounded-full my-8 dark:text-black'>
              Read Blog
            </button>
          </div>
          <div className='w-full shadow-xl flex flex-col justify-center items-center rounded-lg hover:scale-105 duration-300 bg-slate-400 dark:bg-slate-800'>
            <img
              className='w-full md:h-full'
              src='https://res.cloudinary.com/dwgberjxq/image/upload/v1684227376/layo/brainstorm_kwpdbp.jpg'
              alt='/'
            />
            <div className='text-center mt-4 mx-auto'>
              <p className='mt-2 px-11'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
                voluptas, exercitationem modi earum est quae sint vero.
              </p>
            </div>
            <button className='h-[40px] w-[180px] bg-orange-400 hover:bg-orange-500 font-medium text-lg cursor-pointer rounded-full my-8  dark:text-black'>
              Read Blog
            </button>
          </div>
        </div> */}
        <div className='mx-5 2xl:mx-[100px] mt-10'>{/* <BlogSlider /> */}</div>
      </div>
    </div>
  )
}

export default Blogs
