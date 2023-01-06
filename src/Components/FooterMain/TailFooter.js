import React from 'react'

const TailFooter = () => {
    return (
        <footer>
            <div className="p-14 footermain text-gray-200">
                <div className='ml-[-5%] flex mt-[-5%] w-[100%] mb-[1%]'>
                    <img className='whitepatch11 place-items-start object-left relative' src="whitepup.png" alt="" />
                    <img className='w-[5%]' src="Smiley.png" alt="" />
                </div>
                <div className="max-w-full mx-auto">
                    <div className=" mx-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 ">
                        <div className=" mx-4 mb-5 flex  items-base flex-col">
                            <h4 className=' text-3xl alltextfoot text-[25px] text-[] leading-[31px] tracking-[]'>About Company</h4>
                            <p className='mt-3 pb-4 footlist'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.  Ut elit tellus, luctus nec <br /> ullamcorper mattis.</p>
                            <div className='flex justify-start items-center gap-6 mt-4'>
                                <a className='flex items-center justify-center w-10 h-10 rounded-full bg-red-400 mx-1 pt-1  hover:bg-red-600' href="/"><i className="fa-brands fa-facebook"></i></a>
                                <a className='flex items-center justify-center w-10 h-10 rounded-full bg-red-400 mx-1 pt-1  hover:bg-red-600' href="/"><i className="fa-brands fa-instagram"></i></a>
                                <a className='flex items-center justify-center w-10 h-10 rounded-full bg-red-400 mx-1 pt-1  hover:bg-red-600' href="/"><i className="fa-brands fa-youtube"></i></a>
                            </div>
                        </div>
                        <div className="mb-5 mx-4 text-base flex  items-base flex-col ">
                            <h4 className='text-3xl alltextfoot' >Services</h4>
                            <ul className='footlist'>
                                <li className='pb-4'>Paint Spraying</li>
                                <li className='pb-4'>Wallpapering</li>
                                <li className='pb-4'>Fire Protection</li>
                                <li className='pb-4'>Hygenic Coating</li>
                                <li className='pb-4'>Dry Lining</li>
                                <li className='pb-4'>Fire Protection</li>
                            </ul>
                        </div>
                        <div className="mb-5 mx-4 flex  items-base flex-col">
                            <h4 className='text-3xl alltextfoot'>Blogs</h4>
                            <ul className='footlist'>
                                <li className='pb-4'>May 18, 2021  • Exterior</li>
                                <li className='pb-4'>May 18, 2021  • Exterior</li>
                                <li className='pb-4'>May 18, 2021  • Exterior</li>
                                <li className='pb-4'>May 18, 2021  • Exterior</li>
                                <li className='pb-4'>May 18, 2021  • Exterior</li>
                            </ul>
                        </div>
                        <div className="mb-5 mx-4 flex  items-base flex-col">
                            <h4 className='text-3xl alltextfoot'>Newsletter</h4>
                            <p className='pb-4 footlist text-[15px] font-bold leading-[] text-left '>Subcribe to  Our Newsletter for updates</p>
                            <form className='flex flex-row'>
                                <div>
                                    <input className='bg-red-700 rounded-lg m-[16% 0%] p-[4%] w-[125%] ' type="text" placeholder='Email Address' /><br />
                                    <button className='rounded-lg  bg-[#FFFFFFCC] p-[2%] mt-[20px] w-[151px] h-[46px] '><p className='text-[24px] tracking-[12%] font-bold text-[black] font-sans leading-[30.96px]'>Subscribe</p></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="w-full  " style={{ borderTop: "2px solid white" }}>
                    <div className=" mx-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 contentoffoot">
                        <div className=" mx-4 mb-5 flex  items-base flex-col">
                            <img src="orignalrk.png" alt="" />
                        </div>
                        <div className="mb-5 mx-4 text-base flex  items-sase flex-col ">
                            <h4 className='text-3xl alltextfoot' >Call Us</h4>
                            <p>+91 4792874902</p>
                        </div>
                        <div className="mb-5 mx-4 flex  items-base flex-col">
                            <h4 className='text-3xl alltextfoot'>Email Us</h4>
                            <p>dagdyuig@gmail.com</p>
                        </div>
                        <div className="mb-5 mx-4 flex  items-base flex-col">
                            <h4 className='text-3xl alltextfoot'>Chat With Us</h4>
                            <p>24/7 Live Chat Support</p>
                        </div>
                    </div>
                </div>

            </div>


            <div className="relative mt-[-2%] ml-[21%]  ">
                <img src="whitepdown.png" alt="" />

            </div>


        </footer>
    )
}

export default TailFooter