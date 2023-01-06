
import React from 'react'

const AfterCards = () => {



    return (
        <>
            {/*w-[24rem] h-[24rem]  */}
            <div className=" mb-[5%] p-8 pr-0 max-w-full flex justify-end xl:mt-[5%] lg:mt-[16%] sm:mt-[32%]">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 w-[100%] relative">
                    <div className="mb-4 flex justify-center lg:justify-end">
                        <div className=" flex ">
                            <div className='overflow-hidden'> <img className='  transition duration-500 hover:scale-125  w-[15rem] h-[17rem] md:w-[24rem] md:h-[24rem] xl:w-[470px] xl:h-[573px] rounded-[8%] ' src="backimage.png" alt="" /></div>
                            <img className='  transition duration-500 hover:scale-125 xl:w-[460px] xl:h-[389px] overflow-hidden w-[13rem] h-[11rem] rounded-[14%] relative top-[22%] right-[9%]' src="frontimage.png" alt="" />

                            <div className='transform h-64  transition duration-500 hover:scale-125  top-[34%] left-[50%] md:top-[47%] lg:top-[76%] lg:left-[25%] xl:top-[83%] xl:left-[25%]  absolute'>
                                <img className='w-[135px] h-[117px] md:w-[170px] md:h-[158px] lg:h-[158px] lg:w-[170px]' src="yellowdots.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="explanation flex justify-between items-center">
                        <div className="exphead text-start flex flex-col">
                            <p className=' pt-5 pb-5 text-2xl leading-8 font-black not-italic tracking-[0.01em] font-[Nunito] text-[40px] text-[#18256D]'>It`s The Perfect Time To
                                Paint Your Home</p>
                            <p className=' pt-5 pb-5 text-[16px] leading-7 font-[Montserrat] font-normal'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Ut elit tellus, luctus nec <br /> ullamcorper mattis.Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.

                            </p>
                            <button className=' bg-red-500 color-white rounded-[6px] w-[50%] md:w-[34%] lg:w-[34%] xl:w-[34%] p-[2%]'>Learn more</button>
                        </div>
                        <div className="img "><img className='' src="yellowbrush.png" alt="" /></div>
                    </div>



                </div>

            </div>
        </>
    )
}

export default AfterCards