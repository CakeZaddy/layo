'use client'

import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { BiSolidMoon, BiSolidSun } from 'react-icons/bi'

const ToggleButton = () => {
  const { resolvedTheme, setTheme } = useTheme()

  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return null
  }
  return (
    <button
      className='fixed z-[100] top-5 left-5'
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {resolvedTheme === 'dark' ? (
        <BiSolidSun className='h-5 w-5 text-orange-300 ease-in-out duration-300' />
      ) : (
        <BiSolidMoon className='h-5 w-5 text-slate-800 ease-in-out duration-300' />
      )}
    </button>
  )
}

export default ToggleButton
