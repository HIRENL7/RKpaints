import React from 'react'
import FormContact from './FormContact'

const Contact = () => {

  const array = [
    {
      image: "Images/iconmap.png",
      title: "Address",
      content: "401, Swapnil Complex, Nr.Sardar Patel Bavla, Naranpura Ahmedabad- 380013",
      number: "401, Swapnil Complex,Nr.Sardar Patel Bavla, Naranpura Ahmedabad- 380013"
    },
    {
      image: "Images/email.png",
      title: "Phone",
      content: "rkpaintandservices@gmail.com rkpaintandservices@gmail.com",
    },
    {
      image: "Images/phone.png",
      title: "Address",
      content: "Phone 01 : +91 96628 58708 Phone 02 : +91 81287 71705 Phone 03 : +91 99244 50880"

    }
  ]
  return (
    <>
      <div className='max-w-full my-[3%] overflow-hidden'>
        <div className="relative text-center w-full">
          <p className=' relative text-[35px] text-[#18256D] font-black tracking-[15.74px] leading-[1%] font-sans mt-[15px]'>Contact Details</p>
          <img className='absolute top-[98px] right-[-46px]  transform rotate-[129deg]' src="Images/orangeline.png" alt="/" />

        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2 xl:grid-cols-2  my-[6%] pr-[233px]  ">
          {/* Companies contact detials */}
          <div className="relative overflow-hidden">
            <img className='absolute h-[419px] left-12 transform rotate-[55deg]' src="Images/blueline.png" alt="" />
            <div className=" flex flex-col justify-center items-end pr-[150px] ">
              {
                array.map((item) => {
                  const { image, title, content } = item
                  return (
                    <div className="bg-[white] relative flex   flex-col justify-center items-center p-4 rounded-2xl w-[312px] h-[190px] border-[1px] my-[15px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] ">
                      <div className=" w-full  text-left flex justify-between items-center">
                        <p className=' text-[20px] font-bold tracking-[10.5%] leading-[25.08px]'>{title}</p>
                        <img className=' w-[57px] h-[57px]' src={image} alt="" />                </div>
                      <div className="pt-4"><p className='text-[ 15px] font-sans font-semibold leading-[22.64px] tracking-[5%]'>{content}</p></div>
                    </div>
                  )
                })

              }

            </div>


          </div>
          <FormContact />
        </div>

      </div>
    </>
  )
}

export default Contact
