import React from 'react'

const WorkingProcess = () => {

    let processimg = [
        {
            image: "/Images/step1.png",
            title: "Site Inspection",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore officia consequatur iste soluta odio reprehenderit minima tenetur voluptate, totam incidunt nam at perspiciatis ipsum vel unde  ",
            step: "step1",
            bg: "#F52A85",
            arrow: "/Images/pinkarrow.png"
        },
        {
            image: "/Images/step2.png",
            title: "Site Inspection",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore officia consequatur iste soluta odio reprehenderit minima tenetur voluptate, totam incidunt nam at perspiciatis ipsum vel unde ",
            step: "step2",
            bg: "#F5962A",
            arrow: "/Images/yellowarrow.png"
        }

    ]
    return (

        <div className="max-w-full text-center">
            <h1 className='text-[35px] text-[#18256D] leading-[47.74px] tracking-[1%] font-sans font-black my-[95px]'>Our Working Process</h1>
            <div className="mx-[7a%] grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 h-[60vh]">
                {/* grid 1,2 */}

                {
                    processimg.map((item, index) => {
                        const { image, title, description, bg, arrow } = item
                        return (
                            <div key={index} className=" realtive">
                                <div className=" relative  ">
                                    <div className=" ml-[40%] relative circle rounded-full outline-none w-[150px] h-[150px] bg-[#F8F8F8] flex justify-center items-center">
                                        <img className='relative' src={image} alt="/" />
                                        <div className={`flex justify-center items-center text-center absolute top-[10px] right-[-20px] step1 text-[#FFFFFF] bg-[${bg}] border-[1px] rounded-[17px] w-[69px] h-[34px] text-[15px]`}>Step1</div>
                                        <div className=" absolute right-[-180px] arrow flex justify-center items-center w-[157px]">
                                            <img className='absolute ' src={arrow} alt="/" />
                                        </div>
                                    </div>

                                </div>
                                <div className=" text-cener flex flex-col items-center justify-center">
                                    <p className=' mt-[42px] font-extrabold text-[20px] text-[#18256D] leading-[27.28px] tracking-[1%]'>{title}</p>
                                    <p className=' text-center mt-[29px] font-semibold text-[12px] w-[304px] leading-[19.98px] tracking-[3%] font-sans'>
                                        {description}
                                    </p>
                                </div>



                            </div>

                        )
                    })
                }

                {/* grid 3 */}
                <div className=" realtive">
                    <div className=" relative  ">
                        <div className=" ml-[40%] relative circle rounded-full outline-none w-[150px] h-[150px] bg-[#F8F8F8] flex justify-center items-center">
                            <img className='relative' src="/Images/step3.png" alt="/" />
                            <div className="flex justify-center items-center text-center absolute top-[10px] right-[-20px] step1 text-[#FFFFFF] bg-[#F52A85] border-[1px] rounded-[17px] w-[69px] h-[34px] text-[15px]">Step3</div>

                        </div>

                    </div>
                    <div className=" text-cener flex flex-col items-center justify-center">
                        <p className=' mt-[42px] font-extrabold text-[20px] text-[#18256D] leading-[27.28px] tracking-[1%]'>Site Inspection</p>
                        <p className=' text-center mt-[29px] font-semibold text-[12px] w-[304px] h-[80px] leading-[19.98px] tracking-[3%] font-sans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore officia consequatur
                            iste soluta odio reprehenderit minima tenetur voluptate, totam incidunt nam at perspiciatis ipsum vel unde.
                            Fuga architecto quasi excepturi!</p>
                    </div>



                </div>
            </div>



        </div>


    )
}

export default WorkingProcess
