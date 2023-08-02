'use client'
import Image from 'next/image'
import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

import Laptop from 'public/laptoppm.jpg'

const page = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    // lastName: '',
    email: '',
    // phone: '',
    // business: '',
    // service: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target

    setForm({ ...form, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .send(
        'service_lltt8kg',
        'template_fnsaizk',
        {
          from_name: form.name,
          to_name: 'Layo Oguntimehin',
          from_email: form.email,
          to_email: 'zeezat88@gmail.com',
          message: form.message,
        },
        'CFfFpG6K3G_3RKrVm'
      )
      .then(
        () => {
          setLoading(false)
          alert('Message sent, Will get back to you shortly.')

          setForm({
            name: '',
            email: '',
            message: '',
          })
        },
        (error) => {
          setLoading(false)

          console.log(error)

          alert('Not Sent.')
        }
      )
  }

  return (
    <div className='font-neuton overflow-hidden'>
      <div className='bg-[#3b7777] dark:bg-[#163333] green h-24'></div>
      <div className='bg-[#3b7777] dark:bg-[#163333] green text-white text-center text-4xl font-semibold font-eczar px-5 py-10'>
        <h2>Get In Touch</h2>
      </div>
      <div className='lg:grid grid-cols-2'>
        <div className='px-8 font-neuton py-10'>
          <div>
            <p className='text-left text-xl '>
              If you have a query or would like to know more about my social
              media strategy services, please get in touch. I’d love to hear
              from you
            </p>
            <p className='text-left text-xl font-semibold pt-4'>
              Fill in the contact form, or connect with me via social media
            </p>
          </div>
          <div className='flex gap-4 justify-start pt-5 mb-5'>
            <FaLinkedinIn className='h-5 w-5 hover:scale-125 ease-in-out duration-300 cursor-pointer' />
            <BsTwitter className='h-5 w-5 hover:scale-125 ease-in-out duration-300 cursor-pointer' />
            <BsInstagram className='h-5 w-5 hover:scale-125 ease-in-out duration-300 cursor-pointer' />
          </div>
          <Image className='w-full' src={Laptop} alt='' />
        </div>

        <div className='px-5 grid items-center text-xl'>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col gap 8'
          >
            <label className='flex flex-col'>
              <span className='font-semibold mb-4'>Name</span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder='First & Last'
                className='py-4 px-6 dark:placeholder:text-gray-300 placeholder:text-gray-700 rounded-lg font-medium'
              />
            </label>
            {/* <label className='flex flex-col mt-2'>
              <span className='font-medium mb-4'>Last Name</span>
              <input
                type='text'
                name='last name'
                value={form.lastName}
                onChange={handleChange}
                placeholder='Last Name'
                className='py-4 px-6 placeholder:text-gray-700 rounded-lg font-medium'
              />
            </label> */}
            <label className='flex flex-col mt-2'>
              <span className='font-semibold mb-4'>Email</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder='Email'
                className='py-4 px-6 dark:placeholder:text-gray-300 placeholder:text-gray-700 rounded-lg font-medium'
              />
            </label>
            {/* <label className='flex flex-col mt-2'>
              <span className='font-medium mb-4'>Phone Number</span>
              <input
                type='tel'
                name='phone number'
                value={form.phone}
                onChange={handleChange}
                placeholder='Phone Number'
                className='py-4 px-6 placeholder:text-gray-700 rounded-lg font-medium'
              />
            </label> */}
            {/* <label className='flex flex-col mt-2'>
              <span className='font-medium mb-4'>Service Interested In</span>
              <input
                type='text'
                name='Service'
                value={form.service}
                onChange={handleChange}
                placeholder='Service Interested In'
                className='py-4 px-6 placeholder:text-gray-700 rounded-lg font-medium'
              />
            </label> */}
            <label className='flex flex-col mt-2'>
              <span className='font-semibold mb-4'>Message</span>
              <textarea
                rows='7'
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='Messages...'
                className='py-4 px-6 placeholder:text-gray-700 dark:placeholder:text-gray-300 rounded-lg font-medium'
              />
            </label>
            <button
              type='submit'
              className='my-5 py-4 w-[150px] bg-orange-400 font-bold font-eczar text-lg cursor-pointer rounded-full hover:bg-orange-500 dark:text-black'
            >
              {loading ? 'Sending' : 'Send'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default page
