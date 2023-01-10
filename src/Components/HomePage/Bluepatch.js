import React from 'react'

const Bluepatch = () => {

  return (
    <>
      <div className="max-w-full   h-[700px]  relative bg-no-repeat items-center justify-end flex text-white overflow-hidden">
        <img className=' w-full  h-[700px] relative' src="bluebrush.png" alt="" />
        <div className="flex flex-col items-end mr-[12%] absolute ">
          <div className="">
            <h1 className='mt-2  mb-[4%] font-[sans-serif] font-black text-[40px] leading-[55px] tracking-[0.01em] text-left' >Why Our<span className='text-yellow-500'>Painting Service</span>  Is <br />
              Better Than Other</h1>
            <div className="procedure1 mt-2 mb-8 flex  xl:text-[25px]">
              <img className='w-[65px] h-[59px] pr-[1%]' src="procedure1.png" alt="p1" />
              <div className='mt-2 mb-2 pl-[4%]'>
                <p>Shifting and Protection of home & Furniture</p>
                <p className='text-yellow-500'>Suspendisse gravida ex id diet eget soda tellus</p>
              </div>

            </div>
            <div className="procedure2 mt-2 mb-2 flex xl:text-[25px]">
              <img className='w-[65px] h-[59px] pr-[1%]' src="procedure2.png " alt="p2" />
              <div className='mt-2 mb-8  pl-[4%]' >
                <p>Shifting and Protection of home & Furniture</p>
                <p className='text-yellow-500'>Suspendisse gravida ex id diet eget soda tellus</p>
              </div>
            </div>
            <div className="procedure3 mt-2 mb-2 flex xl:text-[25px] ">
              <img className='w-[65px] h-[59px] pr-[1%]' src="procedure3.png" alt="p3" />
              <div className='mt-2 mb-2  pl-[4%]'>
                <p>Shifting and Protection of home & Furniture</p>
                <p className='text-yellow-500'>Suspendisse gravida ex id diet eget soda tellus</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Bluepatch