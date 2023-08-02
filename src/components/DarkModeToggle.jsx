'use client'
import { ThemeContext } from '@/context/ThemeContext'
import React from 'react'
import { BiSolidMoon, BiSolidSun } from 'react-icons/bi'
import { useContext } from 'react'

const DarkModeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext)
  return (
    <div className='fixed z-[100]'>
      <div className='absolute left-2 top-5'>
        <div
          className='w-[42px] h-[24px] border border-gray-600 flex items-center justify-between p-[2px] rounded-full relative cursor-pointer'
          onClick={toggle}
        >
          <div className='text-xs'>
            <BiSolidSun className='text-yellow-500' />
          </div>
          <div className='text-xs'>
            <BiSolidMoon />
          </div>
          <div
            className='w-[15px] h-[15px] bg-gray-600 rounded-full absolute'
            style={mode === 'dark' ? { left: '2px' } : { right: '2px' }}
          />
        </div>
      </div>
    </div>
  )
}

export default DarkModeToggle
