import React from 'react'
import { getPost } from '../../../../sanity/client'
import PostWidgets from '@/components/blog/PostWidgets'
import Categories from '@/components/blog/Categories'
import PostDetail from '@/components/blog/PostDetail'
import Author from '@/components/blog/Author'

async function page({ params }) {
  const slug = params.post
  const post = await getPost(slug)
  return (
    <div className='container mx-auto pt-24 px-2 lg:px-10 mb-8'>
      <div className='grid grid-cols-1 pt-5 lg:grid-cols-12 gap-12'>
        <div className='col-span-1 lg:col-span-8'>
          <PostDetail post={post} />
          <Author author={post.author} />
          {/* <CommentsForm slug={post.slug} /> */}
          {/* <Comments slug={post.slug} /> */}
        </div>
        <div className='col-span-1 lg:col-span-4'>
          <PostWidgets slug={post.slug} />
          <Categories />
        </div>
      </div>
    </div>
  )
}

export default page
