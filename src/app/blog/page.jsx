import BlogSlider from '@/components/blog/BlogSlider'
import Categories from '@/components/blog/Categories'
import PostWidgets from '@/components/blog/PostWidgets'
import Posts from '@/components/blog/Posts'
import React from 'react'

const page = () => {
  return (
    <main className='pt-24 pb-5 px-10'>
      <div className='px-5 py-10'>
        <BlogSlider />
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='col-span-1 lg:col-span-8'>
          <Posts />
        </div>
        <div className='col-span-1 lg:col-span-4'>
          <div className='relative top-8 lg:sticky'>
            <PostWidgets />
            <Categories />
          </div>
        </div>
      </div>
    </main>
  )
}

export default page
