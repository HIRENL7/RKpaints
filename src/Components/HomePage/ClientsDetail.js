import React from 'react'

const ClientsDetail = () => {
    return (
        <>
            <div className="max-w-full mt-[70px] xl:h-[130vh] lg:h-[130vh]">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
                    {/* first col grid */}
                    <div className="container m-2 text-left p-[15%]">
                        <h1 className='py-6 tracking-[1%] font-[Montserrat] font-black leading-[54.56px] text-[40px]'>It`s The Perfect Time To Paint Your Home</h1>
                        <p className='py-6 tracking-[3%] text-[16px] leading-[30.72px] font-[Montserrat] font-normal '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <button className='bg-[red] h-[49px] w-[199px] rounded-[6px]' type='button'>
                            Learn More
                        </button>
                    </div>
                    {/* 2col grid */}
                    <div className="mx-2 flex justify-center items-center flex-wrap">
                        <div className="flex flex-col text-center text-white items-center ">
                            <div className=" py-4card bg-[#EE3347] rounded-[26px] h-[298px] w-[281px] flex justify-center items-center flex-col">
                                <img className='p-2 h-[85px] w-[85px]' src="procedure1.png" alt="brush" />
                                <p className='p-2'>887+</p>
                                <p className='p-2  text-[20px] tracking-[1%] leading-[27.28px] font-[Nunito] font-medium '>Satisfied Clients</p>
                            </div>
                            <div className="card m-4 bg-[#F5962A] rounded-[26px] h-[298px] w-[281px] flex justify-center items-center flex-col">
                                <img className='p-2 h-[85px] w-[85px]' src="procedure3.png" alt="" />
                                <p className='p-2'>887+</p>
                                <p className='p-2  text-[20px] tracking-[1%] leading-[27.28px] font-[Nunito] font-medium '>Satisfied Clients</p>
                            </div>
                        </div>
                        {/* start of boxcol 2 */}
                        <div className="flex flex-col text-center text-white items-center h-[128vh] ">
                            <div className=" py-4card bg-[#1ECBEA] rounded-[26px] h-[298px] w-[281px] flex justify-center items-center flex-col">
                                <img className='p-2 h-[85px] w-[85px]' src="procedure2.png" alt="" />
                                <p className='p-2'>887+</p>
                                <p className='p-2  text-[20px] tracking-[1%] leading-[27.28px] font-[Nunito] font-medium '>Satisfied Clients</p>
                            </div>
                            <div className="card m-4 bg-[#88206B] rounded-[26px] h-[298px] w-[281px] flex justify-center items-center flex-col">
                                <img className='p-2 h-[85px] w-[85px]' src="procedure4.png" alt="" />
                                <p className='p-2'>887+</p>
                                <p className='p-2  text-[20px] tracking-[1%] leading-[27.28px] font-[Nunito] font-medium '>Satisfied Clients</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative flex justify-center lg:top-[-313px]               ">
                    <img className='transform h-34  lg:left-[161px]  xl:left-[161px]  left-[0px]   relative  transition duration-500 hover:scale-125' src="yellowdots.png" alt="" />
                </div>

            </div>

        </>
    )
}

export default ClientsDetail
