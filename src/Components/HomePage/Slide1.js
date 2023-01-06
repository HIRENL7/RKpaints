import React from 'react'

const Slide1 = () => {
  return (

    <>
      <div className='relative w-full'>
        <img src="screen1.png" alt="" />
      </div>
      <div className='absolute left-[105px] top-[145px] '><img className='relative' src="/Images/slide1triangles.png" alt="" /></div>
      <div className="container   flex flex-col text-left screenmain left-20 absolute top-[379px] pl-[231px]  items-start " >

        <h6 className='mb-3 '>Splash your dream color</h6>
        <h1 className='mb-2 font-[Montserrat] font-bold leading-[91px]' style={{ fontFamily: "Montserrat", fontSize: "60px", lineHeight: "91px", letterSpacing: "0.03em", textAlign: "left" }}>Bring Your Home To <br /> Liverly Colors</h1>
        <button className='text-left border-[1px] solid border-[#88206B] p-2 ' ><p>GET STARTED NOW</p></button>
      </div>

    </>
  )
}

export default Slide1