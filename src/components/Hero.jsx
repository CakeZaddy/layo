import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div>
      <div
        initial='initial'
        animate='animate'
        className='h-[400px] relative font-eczar flex justify-center items-center bg-local'
      >
        <img
          className='w-full pt-10 lg:pt-0 xl:mt-[-100px] contrast-75 '
          src='https://res.cloudinary.com/dwgberjxq/image/upload/v1684188147/layo/timo-volz-4L_vLcqG3ds-unsplash_e5j8yb.jpg'
          alt='/'
        />
        {/* <div className='absolute inset-0 bg-black opacity-50 h-[400px]'></div> */}
        <div className='absolute w-[70%] xl:w-[45%] flex flex-col gap-8 justify-center items-center'>
          <h1 className='text-2xl font-semibold md:text-5xl md:text-semibold lg:font-bold text-center md:p-5 text-white mt-20 md:mt-[150px] lg:mt-[250px] xl:mt-[350px]'>
            Your Brand Looking For Support With Your Social Media Strategy?
          </h1>
          <Link href='/services'>
            <button className='cursor-pointer w-[200px] md:w-[350px] h-[50px] md:h-[70px] bg-orange-400 hover:bg-orange-500 text-center text-lg md:text-2xl rounded-lg font-medium dark:text-black'>
              View My Services
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
