import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import DarkModeToggle from '@/components/DarkModeToggle'
// import { ThemeProvider } from '@/context/ThemeContext'
import Providers from '@/components/Providers'
import ToggleButton from '@/components/ToggleButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Layo Oguntimehin',
  description: 'My portfolio site',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {/* <DarkModeToggle /> */}
          <ToggleButton />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
