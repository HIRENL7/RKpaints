import React from 'react'


const PinkPatch = () => {
  // const creatorimg=[
  //   "man1.png",
  //   "man2.png",
  //   "man3.png"
  // ]
  // let countimage =0;
  // const ref =useRef()
  // let changeImage=()=>{
  //   ref.setAttribute("src","Images/"+ creatorimg[countimage]);
  //   countimage++;
  //   if(countimage === creatorimg){
  //     countimage = 0;
  //   }
  // }
  // setInterval(changeImage,2000)
     
  
  return (
    <>


      <div className="max-w-full relative   h-[700px] w-full object-cover bg-no-repeat items-center justify-start flex text-white overflow-hidden">
       
       <img className='relative w-full h-[700px] ' src="pinkpatch.png" alt="" />
        <div className="flex absolute flex-col items-end ml-[12%] ">
          <div className="">
            <h1 className='mt-2  mb-[4%] font-[sans-serif] font-black text-[40px] leading-[55px] tracking-[0.01em] text-left' >Why Our <span className='text-yellow-500'>Painting Service</span>  Is <br />
              Better Than Other</h1>
            <div className="procedure1 mt-2 mb-8 flex  xl:text-[25px]">
              <div className='mt-2 mb-2 pl-[4%]'>
                <p className='text-yellow-500 font-[Nunito] text-[18px] font-medium leading-[24.55px] tracking-[1%] text-left'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam <br /> nonummy nibh euismod nummy nibh euismod Lorem ipsum dolor <br /> sit amet, consectetuer adipiscing elit, sed diam nonummy nibhbr
                 euismod </p>
              </div>
            </div>
          
            <div className="procedure3 mt-2 mb-2 flex xl:text-[25px] ">
              <img className='w-[60px] h-[60px] rounded-full pr-[1%]' src="man1.png" alt="p3" />
              <div className='mt-2 mb-2  pl-[4%]'>
                <p className='text-[#FFCA37] font-bold text-[18px] font-[Nunito] leading-[24.55px] tracking-[1%]'>Visahl Nayak</p>
                <p className='text-[#FFCA37] text-[13px] font-[Nunito] leading-[17.73px] tracking-[1%]'>Art Director</p>
              </div>
            </div>
          </div>
        </div>


      </div>

    </>
  )
}

export default PinkPatch