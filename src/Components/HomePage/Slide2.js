import React from 'react'

const Slide2 = () => {
   
    return (
        <>

            <div className={` container top-[9rem] absolute left-[20rem] flex flex-col text-left screenmain mt-[180px] `} >
                <h1 className='mb-3 profe2'>Professional</h1>
                <h6 className='paintserv'>Painting Services</h6>
                <div className="flex mt-[40px] mb-[20px] ">
                    <div className="icon flex justify-center align-middle mr-3"><i className="text-[red] fa-regular   fa-circle-check mx-2 mt-[6px] "></i><p className='font-semibold tracking-[2px]'>Special Offer</p></div>
                    <div className="icon flex justify-center align-middle  mr-3"><i className=" text-[red] fa-regular fa-circle-check mx-2  mt-[6px] "></i><p className='font-semibold tracking-[2px]'>Professional Workers</p></div>
                </div>
                <p className='mt-4 mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,  <br /> luctus nec ullamcorper mattis.Lorem ipsum dolor sit amet, consectetur <br />
                    adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.

                </p>
                <div className='mt-[20px]'>
                    <button className='text-center border-[1px] p-[4px] border-[#88206B] '>
                        <p className=''>GET STARTED NOW</p>
                    </button>
                </div>
            </div>
            <img src="screen22.png" alt="" />
        </>
    )
}

export default Slide2