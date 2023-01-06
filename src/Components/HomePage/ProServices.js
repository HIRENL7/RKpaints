import React, { useState } from 'react'

const ProServices = () => {
    const [proimages, setProImages] = useState([
        {
            id: 0,
            image: "pro1.png",
        },
        {
            id: 1,
            image: "pro2.png",
        },
        {
            id: 2,
            image: "pro3.png",
        },
        {
            id: 3,
            image: "pro4.png",
        },
        {
            id: 4,
            image: "pro5.png",
        }
    ])
    return (
        <>
            {/* main grid */}
            <div className=' text-center'>
                <p className='text-[35px] leading-[47.74px] text-[#18256D] font-black tracking-[1%] mb-[70px] '>Professional Painting Services</p>

                <div className="grid grid-cols-1 md:gid-cols-2 lg:grid-cols-3 xl:grid-cols-3 px-[20px] w-full">
                    {/* 1st grid div */}
                    <div className="flex flex-col justify-center items-end gap-[5%]">
                        <div className='w-[421px] h-[295px] overflow-hidden '>
                            <img className='object-cover  hover:scale-125 transition duration-500 ease-in-out  hover:transform hover:rotate-[-3.32deg]' src="pro1.png" alt="" />
                        </div>
                        <div className='overflow-hidden  w-[421px] h-[295px] flex justify-center items-center'>
                            <img className=' object-cover ease-in-out hover:scale-125 transition duration-500  hover:rotate-[-3.32deg] hover:transform ' src="pro2.png" alt="" />
                        </div>

                    </div>
                    {/* 2nd grid div */}

                    <div className="w-full flex justify-center">
                        <div className='overflow-hidden w-[496px] h-[628px] flex justify-center items-center'>
                            <img className=' transition duration-500 hover:scale-125  hover:transform hover:rotate-[3.39deg]' src="pro3.png" alt="" />
                        </div>


                    </div>
                    {/* 3rd grid div */}
                    <div className="flex flex-col justify-center items-start gap-[5%]">
                        <div className='overflow-hidden w-[421px] h-[295px]'>
                            <img className=' object-cover  hover:scale-125 transition duration-500   hover:transform hover:rotate-[-3.32deg]' src="pro4.png" alt="" />
                        </div>
                        <div className='overflow-hidden w-[421px] h-[295px]'>
                            <img className='object-cover  hover:scale-125 transition duration-500   hover:transform hover:rotate-[-3.32deg]' src="pro5.png" alt="" />
                        </div>

                    </div>








                </div>

            </div>

        </>
    )
}

export default ProServices
