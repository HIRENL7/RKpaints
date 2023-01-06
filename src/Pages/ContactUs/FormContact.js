import React from 'react'

const formdetails = [
    {
        image: "Images/contactname.png",
        placeholder: "First Name"
    },
    {
        image: "Images/contactname.png",
        placeholder: "Last Name"
    },
    {
        image: "Images/phoneicon.png",
        placeholder: "Phone Number"
    },
    {
        image: "Images/mailicon.png",
        placeholder: "Your Email"
    },

]
const FormContact = () => {

    return (
        <>
            <div className='relative overflow-hidden'>
            
                <div className=" flex flex-col ">
                    <div className=" mb-[43px]  text-left">
                        <p className='text-[20px] text-[#18256D] font-extrabold leading-[25.08px] tracking-widest'>Get In Touch With Us</p>
                        <p className='mt-[17px] text-[15px] text-[#C2C2C2] font-normal leading-[18.81px] '>If you have any question, plase don`t hesitate to send us a message</p>
                    </div>
                    <form action="">
                        <div className=" grid grid-cols-2 ">
                            {
                                formdetails.map((item) => {
                                    const { image, placeholder } = item
                                    return (
                                        <div className='flex mt-[37px] '>
                                            <div className=" flex  relative border-[1px] border-[#C2C2C2] bg-[white] w-[400px] h-[55px] ">
                                                <div className='flex justify-center items-center'>
                                                    <input className='p-4 font-normal text-[15px] w-[360px] outline-none leading-[18.81px] text-[#323030]  ' type="text" id='name' placeholder={placeholder} />
                                                    <img className='w-[22px] h-[22px]' src={image} alt="" />
                                                </div>
                                            </div>

                                        </div>
                                    )

                                })
                            }
                        </div>

                        <textarea className='p-4 mt-[30px] border-[1px] border-[#C2C2C2] outline-none ' name="" id="" cols="105" rows="10" placeholder='Your Message'></textarea>


                        <div className=' w-full flex justify-start items-center mt-[44px]'>
                            <button className=' text-center  text-[18px] w-[122px] rounded-lg h-[55px] text-[#FFFFFF] tracking-[0.5rem] leading-[22.57px] font-bold pl-[2px] bg-[#C81E30] '>SEND</button>
                        </div>

                    </form>
                </div>

            </div>



        </>
    )
}

export default FormContact
