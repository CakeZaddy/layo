import moment from 'moment/moment'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FeaturedBlog = ({ post }) => {
  return (
    <div className='relative h-72'>
      <Link href={`/posts/${post.slug}`}>
        <div
          className='absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72'
          style={{ backgroundImage: `url('${post.mainImage}')` }}
        />
        <div className='absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-72' />
        <div className='flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full'>
          <p className='text-white mb-4 text-shadow font-semibold text-xs'>
            {moment(post._createdAt).format('MMM DD, YYYY')}
          </p>
          <p className='text-white mb-4 text-shadow font-semibold text-2xl text-center'>
            {post.title}
          </p>
          <div className='flex  items-center absolute bottom-5 w-full justify-center'>
            <Image
              unoptimized
              alt={post.author.name}
              height={30}
              width={30}
              className='align-middle drop-shadow-lg rounded-full hover:bg-black'
              src={post.author.image}
            />
            <p className='inline align-middle text-white text-shadow ml-2 font-medium'>
              {post.author.name}
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default FeaturedBlog
