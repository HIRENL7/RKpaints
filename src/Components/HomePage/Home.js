import React, { useState, useEffect } from 'react'
import Homecards from './Homecards'
import AfterCards from './AfterCards'
import Bluepatch from './Bluepatch'
import ClientsDetail from './ClientsDetail'
import OurFeaturedService from './OurFeaturedService'
import PinkPatch from './PinkPatch'

import ProServices from './ProServices'
import BlogsHome from './BlogsHome'
import Slide1 from './Slide1'
import Slide2 from './Slide2'
// import TailFooter from '../FooterMain/TailFooter'

const slideimg = [
  {
    id: 0,
    image: "screen1.png"

  },
  {
    id: 1,
    image: "screen22.png"
  }
]
const Home = () => {
  // eslint-disable-next-line
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrent((prevState) => prevState === slideimg.length - 1 ? 0 : prevState + 1);
    }, 3000);

    return () => {
      clearInterval(imageInterval);
    }
  }, [])
  return (
    <>
      <div className={`relative  `}>
        {current === 0 ? <Slide1 /> : <Slide2 />}
        <div className='absolute '>
        </div>
      </div>
      <div className='m-6'>
        <Homecards />
      </div>
      <AfterCards />
      <Bluepatch />
      <ClientsDetail />
      <ProServices />
      <OurFeaturedService />
      <PinkPatch />
      <BlogsHome />

    </>
  )
}

export default Home
