import React from 'react'

const Experience = () => {
    const experience = [
        {
            title: "Residential Painting",
            value: 95,
            color: "#F52A85"
        },
        {
            title: "Construction Painting",
            value: 55,
            color: "#F5962A"
        },
        {
            title: "Exterior Painting",
            value: 65,
            color: "#1C9C96"
        },
        {
            title: "Interior Painting",
            value: 75,
            color: "#88206B"
        },
        {
            title: "Others Painting",
            value: 55,
            color: "#1ECBEA"
        }
    ]
    return (
        <>
            <div className=" ma-w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                    {/* 1st grid  div */}
                    <div className="container m-2 text-left p-[15%]">
                        <h1 className='py-6 tracking-[1%] font-[Montserrat] font-black leading-[54.56px] text-[40px] text-[#18256D]'>Experienced and Creative <br /> Paiters</h1>
                        <p className='py-6 tracking-[3%] text-[16px] leading-[30.72px] font-[Montserrat] font-normal '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <button className='bg-[red] h-[49px] w-[170px] rounded-xl text-[20px] text-[white] leading-[38.4px] tracking-[3%] font-sans font-bold' type='button'>
                            Learn More
                        </button>
                    </div>
                    {/*2nd grid div*/}

                    <div className=" flex justify-center items-center flex-col">
                        {
                            experience.map((item, index) => {
                                const { title, value, color } = item
                                return (
                                    <div key={index} className=" flex flex-col items-start text-center justify-center w-[603px] mt-[35px]">
                                        <p className='text-[20px] text-[#18256D] font-[Nunito] font-black leading-[27.28px] tracking-[1%]'>{title}</p>
                                        <div className=''><i className={`flex justify-center items-center fa-regular fa-message fa-2x outline-0  text-[${color}] `}><span className='relative left-[-27px] bottom-[2px] text-[black]   text-[10px]'>{value} %</span></i></div>
                                        <input className={` appearance-none rounded-md h-[8px] bg-[${color}]  w-[603px] bg-orange-500 mt-[3px]  `} type="range" min="0" max="100" defaultValue={value} name="" id="slider" />
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

export default Experience
