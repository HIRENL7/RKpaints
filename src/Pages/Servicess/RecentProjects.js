import React from 'react'

const RecentProjects = () => {

    const projectimge = [
        {
            image: "Images/recentprojects1.png",
            title: 'Resident painting',

        },
        {
            image: "Images/recentprojects1.png",
            title: 'Resident painting',

        },
        {
            image: "Images/recentprojects1.png",
            title: 'Resident painting',

        },
        {
            image: "Images/recentprojects1.png",
            title: 'Resident painting',

        }, {
            image: "Images/recentprojects1.png",
            title: 'Resident painting',

        }, {
            image: "Images/recentprojects1.png",
            title: 'Resident painting',

        }
    ]



    return (
        <>

            <div className=" max-w-full mx-[350px] mb-24">

            <div className='w-full flex justify-center text-center  mb-[62px]'><p className='text-[#18256D] leading-[47.74px] font-black tracking-[1%] text-[35px] '>Recent Projects</p></div>
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 justify-center items-center">



                    {
                        projectimge.map((item,index) => {
                            const { title, image } = item

                            return (
                                <div key={index} className='flex justify-center items-center '>
                                    <div className="group relative  overflow-hidden w-[434px] h-[275px]  ">
                                        <div className='w-full  '>
                                            <img className='relative w-full transition-all group-hover:scale-125  object-cover' src={image} alt="/" />
                                        </div>
                                        <div className='flex justify-center items-center transition-all duration-300 translate-y-[20px] group-hover:translate-y-[-254px]'>
                                            <div className="pl-[10px] pb-[15px] flex flex-col  justify-end items-start w-[341px] h-[240px] bg-[#00000099] outline-none ">
                                                <p className='text-[#FFFFFF] leading-[29.97px] tracking-[3%] text-[18px] font-[Nunito]'>{title}</p>
                                                <hr className=' text-[#FFFFFF] border-[2px] w-[114px]' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )


                        })


                    }

                </div>
            </div>
        </>
    )
}

export default RecentProjects
