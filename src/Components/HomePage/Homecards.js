import React, { useState } from 'react'
import cardsdata from './cardsdata.json'
const Homecards = () => {   
    // eslint-disable-next-line
    const [cards, setCards] = useState(cardsdata)
    return (
        <>
            <div className="max-w-full">
                <div className="painthome text-[#18256D]" >
                    <h1 className='text-5xl'>How To Get Your Home Painted?</h1>
                </div>
                <div className="splash"><img src="bluesplash.png" alt="" /></div>

                <div className="relative top-[-74px] left-[12%] w-[75%] grid grid-cold-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 xxl:grid-cols-4 m-[0% 8%] justify-items-center " >
                    {
                        cards.map((element, index) => {
                            const { id, image, title } = element
                            return (
                                <div className="homecard text-center flex flex-col justify-center align-middle w-[300px] h-[259px]" key={index}>
                                    <div className="maincard">
                                        <img className='mb-4 w-[55px] h-[55px]' src={image} alt={id} />
                                        <h2 className='cardtitle mb-4'>{title}</h2>
                                        <p className='cardpara'>Ametconsectetur adipiscing Lorem <br /> ipsum dolor sit</p>
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

export default Homecards