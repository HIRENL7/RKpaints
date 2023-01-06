import React from 'react'
import BlogsGrid from '../../Components/HomePage/BlogsGrid'

const Blog = () => {
  return (
    <>
      <div className='text-center'>
        <p className='text-[35px] text-[#18256D] font-black leading-[47.74px] tracking-[0.2rem] mb-[47px] '>Blogs</p>
        <div className="grid grid-cols-1 mx-[293px] gap-2 mb-[42px]">
          <div className='mb-[10px]'><BlogsGrid /></div>
          <div className='mt-[10px]'><BlogsGrid /></div>
        </div>
      </div>
    </>
  )
}

export default Blog
