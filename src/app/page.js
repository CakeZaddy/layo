import About from '@/components/About'
import Blogs from '@/components/blog/Blogs'
import Hero from '@/components/Hero'
import Quote from '@/components/Quote'
import Services from '@/components/Services'
import Testimonial from '@/components/Testimonial'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className='overflow-hidden'>
        <Hero />
        <About />
        <Services />
        <Testimonial />
        <Quote />
        <Blogs />
      </div>
    </main>
  )
}
