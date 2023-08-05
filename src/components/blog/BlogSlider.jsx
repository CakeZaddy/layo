'use client'

// import { blogs } from '@/constants'
import FeaturedBlog from './FeaturedBlog'
import React, { useEffect, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Scrollbar, A11y } from 'swiper/modules'
import 'swiper/css/bundle'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { getPosts } from '../../../sanity/client'

const BlogSlider = () => {
  const [posts, setPosts] = useState([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await getPosts()
      setPosts(fetchedPosts)
      setMounted(true)
    }

    fetchPosts()
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className=''>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={3}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
      >
        {posts.map((post) => (
          <SwiperSlide>
            <FeaturedBlog post={post} key={post.id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default BlogSlider
