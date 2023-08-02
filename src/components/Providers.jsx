'use client'

import React from 'react'
import { ThemeProvider } from 'next-themes'

const Providers = ({ children }) => {
  return (
    <ThemeProvider attribute='class'>
      {/* {children} */}
      <div className={`theme`}>{children}</div>
    </ThemeProvider>
  )
}

export default Providers
