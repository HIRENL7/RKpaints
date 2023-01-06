import React, { useState } from 'react'

const QuickContact = () => {
    const [formsection, setFormsection] = useState(
        {
            name: "",
            email: "",
            mobile: "",
            servicetype: "",
            prefereddate: ""
        }
    )

    const handleChange = (event) => {
        setFormsection((prev) => {
            const { name, value } = event.target
            return (
                {
                    ...prev, [name]: value
                }
            )

        })
    }

    return (
        <>
            <div className=' flex flex-col justify-center items-center mt-[54px] mb-[19px]'>
                <div className=" flex justify-center items-center">
                    <p className=' text-[35px] text-[#18256D] font-black tracking-[1%] leading-[47.74px] font-sans '>Qhick Contact</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                    <div className='form flex w-full justify-center items-center  '>
                        <form className='flex w-full flex-col justify-center items-center' action="">
                            <input className='pl-[32px] my-[20px] w-[641px] h-[60px] border-[1px] text-[#C2C2C2]' onChange={handleChange} type="text" name="name" value={formsection.name} placeholder='Name' />
                            <input className='pl-[32px] my-[20px] w-[641px] h-[60px] border-[1px] text-[#C2C2C2]' onChange={handleChange} type="email" name="email" value={formsection.email} placeholder='email' />
                            <input className='pl-[32px] my-[20px] w-[641px] h-[60px] border-[1px] text-[#C2C2C2]' onChange={handleChange} type="text" name="mobile" value={formsection.mobile} placeholder='mobile' />
                            <input className='pl-[32px] my-[20px] w-[641px] h-[60px] border-[1px] text-[#C2C2C2]' onChange={handleChange} type="text" name="servicetype" value={formsection.servicetype} placeholder='ServiceType' />
                            <input className='pl-[32px] my-[20px] w-[641px] h-[60px] border-[1px] text-[#C2C2C2]' onChange={handleChange} type="date" name="prefereddate" value={formsection.prefereddate} placeholder='Prefereddate' />

                        </form>
                    </div>
                    {/* image */}
                    <div className='w-full h-full flex justify-center items-center'>
                        <div className=''>
                            <img className='' src="/Images/quickcontact.png" alt="/" />
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default QuickContact
