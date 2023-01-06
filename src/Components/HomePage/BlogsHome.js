import React  from 'react'
import BlogsGrid from './BlogsGrid'

const BlogsHome = () => {
 
   
    return (
        <>
            <div className="max-w-full  text-center">
                <h1 className='mb-[82px] mt-[10px] font-black text-[#18256D] text-[35px] leading-[47.74px] tracking-[1%] font-[Nunito]'>Latest News From The Blog</h1>
                <div className="p-4 flex justify-center items-center mb-[147px]">
                  <BlogsGrid/>
                </div>
            </div>
        </>
    )
}

export default BlogsHome