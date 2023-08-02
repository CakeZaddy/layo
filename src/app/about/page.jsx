import Services from '@/components/Services'
import Image from 'next/image'
import React from 'react'
import Work from 'public/workwith.jpg'
import Testimonial from '@/components/Testimonial'

const page = () => {
  return (
    <div className='pb-5 overflow-hidden'>
      <div className='bg-[#3b7777] dark:bg-[#163333] green h-24'></div>
      <div className='bg-[#3b7777] dark:bg-[#163333] green text-white text-center text-4xl font-semibold font-eczar px-5 py-10'>
        <h2>About Ebunoluwa Oguntimehin</h2>
      </div>
      <div className='py-7 px-10 md:py-[80px] md:px-[150px]'>
        <p className='font-neuton text-center text-2xl md:text-3xl '>
          I’m an experienced Social Media Consultant specialising in Social
          Media Strategy. I help ambitious small businesses use organic social
          media more effectively and productively, saving time, money and stress
        </p>
      </div>
      <div className='bg-gray-400 dark:bg-black px-10 py-10 lg:px-[100px] lg:py-[60px] lg:grid grid-cols-2 gap-8'>
        <div className=''>
          <h2 className='text-left text-3xl font-neuton pb-10'>
            How I Started Social Media Marketing?
          </h2>
          <div className='flex flex-col gap-6 font-neuton text-xl'>
            <p className=''>
              During my university placement year at Xerox Europe, I was asked
              to join their exciting new social media group. Social media was
              only just starting to grab the attention of businesses, and it was
              here I realised this was my passion and I made it my career. I’ve
              never looked back since!
            </p>
            <p className=''>
              After graduating with a 1st from Bournemouth University, I joined
              De Vere Hotels, where I completely fell in love with the
              hospitality industry. I was a social media team of one, so I was
              kept very busy, and it required lots of self-learning! I developed
              their social media brand guidelines and successfully managed their
              brand-level social media accounts. I also worked with each hotel
              to establish its own on-brand social media presence.
            </p>
            <p className=''>
              I worked at a London-based social media agency before taking the
              bold decision to set up my own freelance business in 2013. It’s
              been a fantastic journey, and I’ve met many wonderful people. I
              enjoy understanding businesses social media challenges, helping to
              simplify and demystifying social media while sharing my insights
              to help others reach their goals.
            </p>
          </div>
        </div>
        <div className='pt-5'>
          <img
            className='w-full'
            src='https://res.cloudinary.com/dwgberjxq/image/upload/v1684767192/layo/82DC857D-4866-4AA8-8E0C-AB5B6464350A_hvguv2.jpg'
            alt=''
          />
        </div>
      </div>
      <div className='px-10 py-10 lg:px-[100px] lg:py-[60px] lg:grid  grid-cols-2 gap-8'>
        <div className='pt-5'>
          <Image className='w-full' src={Work} alt='' />
        </div>
        <div className=''>
          <h2 className='text-left text-3xl font-neuton pb-10'>
            Why Work With Me?
          </h2>
          <div className='flex flex-col gap-6 font-neuton text-xl'>
            <p className=''>
              With my in-house and agency experience, I can personally relate to
              your social media challenges while ensuring you receive a
              professional, efficient service. However, I strive to take things
              a step further. When working with me, there are no tick-box
              exercises or shortcuts. I understand how important and unique you
              are, so I will carefully take the time to get to know your
              business to help find the very best, personalised solutions to fit
              your needs and those of your customers. I give every brand I work
              with the same care and attention I would give to my own.
            </p>
            <p className=''>
              When working with me, I won’t pass you on to anyone else. You’ll
              work with me directly, which means benefiting from my wealth of
              social media experience and expertise.
            </p>
            <p className=''>
              I fully appreciate that seeking external social media support is a
              big decision for any business, and you need to find someone you
              can rely on and trust. So, instead of listening to me explain why
              I’m the perfect fit for you, I will let the wonderful
              recommendations below from my clients speak for themselves.
            </p>
          </div>
        </div>
      </div>
      <Services />
      <Testimonial />
    </div>
  )
}

export default page
