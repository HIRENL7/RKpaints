import React, { useState } from 'react'
import AfterCards from '../../Components/HomePage/AfterCards'
import clients from '../../Components/HomePage/clients.json'
import Experience from './Experience'
import OurProTeam from './OurProTeam'

const About = () => {
  const clientss = clients.slice(0, 4)


  // eslint-disable-next-line
  const [servicesBadge, SetServicesvadge] = useState(clientss)

  return (
    <>
      <div className="">
        {/* 1st part */}
        <AfterCards/>
        {/* 2nd part */}
        <OurProTeam />





        {/*3rd part */}
        <div className="max-w-full  h-[700px] w-full object-cover bg-no-repeat items-center justify-end flex text-white">
       
        <img className='relative w-full h-[700px] ' src="aboutimg.png" alt="" />
          <div className="flex absolute flex-col items-end  ">
            <div className="">
              <h1 className='mt-2  mb-[4%] font-[sans-serif] font-black text-[40px] leading-[55px] tracking-[0.01em] text-left text-[#18256D]' >It`s The Perfect Time To Paint <br /> Your Home</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 mt-8 relative ">
                {
                  servicesBadge.map((ele, index) => {
                    const { image, description, title, background } = ele
                    return (
                      <div key={index} className="mx-3   my-3 flex justify-center ">
                        <div className={` w-[66%] md:w-[140px] lg:w-[140px] xl:w-[140px] bg-[url(${background})]  h-[140px]   object-cover bg-no-repeat items-center justify-center flex`}>
                          <img className='w-[65px] h-[65px]' src={image} alt="" />
                        </div>
                        <div className="services pl-[40px] px-4 pt-4">
                          <h6 className='text-[20px] tracking-[1%] leading-[27.28px] font-black font-[Nunito] text-[#18256D]'>{title}</h6>
                          <p className='mt-[16px] text-[12px] tracking-[3%] leading-[19.44px] text-[black] font-semibold'>{description}</p>
                          <a href="/" className=' mt-[15px] text-[#F52A85] tracking-[3%]  font-[12px] leading-[19.44px] font-[bold]'>Read More {">"}</a>
                        </div>
                      </div>
                    )
                  })
                }


              </div>


            </div>
          </div>


        </div>
        {/* 4t part */}
        <Experience />
     

      </div>

    </>
  )
}

export default About
