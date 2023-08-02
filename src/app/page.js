import About from '@/components/About'
import Blogs from '@/components/Blogs'
import Hero from '@/components/Hero'
import Quote from '@/components/Quote'
import Services from '@/components/Services'
import Testimonial from '@/components/Testimonial'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className=''>
        <Hero />
        <About />
        <Services />
        <div className=' overflow-hidden'>
          <Testimonial />
        </div>
        <Quote />
        <Blogs />
      </div>
    </main>
  )
}
