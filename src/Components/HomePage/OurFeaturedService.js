import React, { useState } from 'react'
import clients from './clients.json'

const OurFeaturedService = () => {

    // eslint-disable-next-line
    const [servicesBadge, SetServicesvadge] = useState(clients)

    return (
        <>

            <div className="max-w-full flex flex-col justify-center  items-center my-[99px]">

                <h1 className='text-[35px] tracking-[1%] leading-[47.7px] font-[Nunito] text-[#18256D] font-black'>Our Featured Services</h1>

                <div className=' w-full flex  justify-center items-center'>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-8 relative left-[6%]">
                        {
                            servicesBadge.map((ele, index) => {
                                const { image, description, title, background, bgcolor } = ele
                                return (
                                    <div key={index} className='group relative overflow-hidden rounded-lg'>
                                        <div className="relative mx-3 gap-x-[40px] my-3 mb-[120px] flex justify-center overflow-hidden ">
                                            <div className={`relative w-[66%] md:w-[140px] lg:w-[140px] xl:w-[140px] bg-[url(${background})]  h-[140px]   object-cover bg-no-repeat items-center justify-center flex`}>
                                                <img className='w-[65px] h-[65px]' src={image} alt="" />
                                            </div>
                                            <div className="relative services pl-[40px] px-4 pt-4">
                                                <h6 className='text-[20px] tracking-[1%] leading-[27.28px] font-black font-[Nunito] text-[#18256D]'>{title}</h6>
                                                <p className='mt-[16px] mb-[15px]  text-[12px] tracking-[3%] leading-[19.44px] font-semibold'>{description}</p>
                                                <a href="/" className='  text-[#F52A85] tracking-[3%]  font-[12px] leading-[19.44px] font-[bold]'>Read More {">"}</a>
                                            </div>
                                        </div>
                                        {/* hover show */}
                                        <div className={`group-hover:translate-y-[-262px] text-[#FFFFFF] transition-all duration-300 ease-in-out absolute w-[500px] h-[260px] bg-[${bgcolor}]  rounded-xl text-center pt-[42px] px-[80px] `}>
                                            <p className=' text-[20px] font-sans leading-[27.28px] font-black tracking-[1%]  mb-[8px]  '>Professional Process</p><br />
                                            <p className='text-[13px] font-sans leading-[27.28px] font-semibold tracking-[3%]'>Suspendisse gravida nulla diet, eget sodas tellusSuspendisse gravida nulla diet, eget sodas tellusSuspendisse gravida nulla diet, eget sodas tellusSuspendisse gravida nulla diet, eget sodas tellus</p>
                                        </div>
                                    </div>

                                )
                            })
                        }


                    </div>
                </div>
            </div>



        </>
    )
}

export default OurFeaturedService
