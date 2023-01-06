import React from 'react'

const OurProTeam = () => {
    // eslint-disable-next-line
    const proteam = [
        {
            img: "/Images/proteam1.png"
        },
        {
            img: "/Images/proteam2.png"
        }
        ,
        {
            img: "/Images/proteam3.png"
        }
    ]
    return (
        <>
            <div className=" flex justify-center flex-col items-center  mt-[38px]">
                <div className=" ">
                    <p className='font-[Nunito] font-black leadinh-[47.74px] tracking-[1%] text-[35px] text-[#18256D]'>Our Professional Team</p>
                </div>
                <div className="mt-[38px] overflow-hidden rounded-3xl">
                    <img className='hover:scale-125 transition-all duration-300' src="/Images/proteam.png" alt="" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3  mt-[30px] gap-6 ">
                    {
                        proteam.map((item, index) => {
                            return (
                                <div key={index} className="group relative w-[402px] h-[468px] cursor-pointer  transition-all overflow-hidden ">
                                    <div className='w-full h-full '>
                                        <img className='w-full object-cover transition-all duration-300 hover:scale-125 hover:rotate-[-3.32deg] ' src={item.img} alt="" />
                                    </div>
                                    <div className='flex h-[100px] flex-col items-center  transition-all duration-300  group-hover:translate-y-[-82px] '>
                                        <div className=' relative w-[309px] h-[84px] bg-[rgba(255,255,255,0.6)] rounded-[20px_20px_0px_0px] text-center '>
                                            <p className='mt-[10px]   text-[20px] leading-[27.28px] tracking-[1%]  text-[#18256D] font-bold font-[Nunito]'>Kimberly Perez</p>
                                            <p className='mt-[10px] text-[15px] text-[#EE3347] tracking-[1%] leading-[20.46px] font-medium' >Team Lead</p>
                                        </div>
                                    </div>
                                </div>

                            )
                        })


                    }
                </div>
                <div></div>
            </div>
        </>
    )
}

export default OurProTeam
