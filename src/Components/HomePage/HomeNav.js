import React from 'react'

import { Link, NavLink } from "react-router-dom";
const HomeNav = () => {
    //  const [showBar, setShowBar] = useState(false)
    return (
        <>
 

            <nav className="nav flex items-center justify-center lg:gap-[2%] flex-wrap h-[130px] md:gap-0  ">
                <Link className="navbar-brand" to="/">
                    <img src="BrandLogo.png" className='w-[98%] h-[12vh]' alt="" ></img>
                </Link>
                <div className=" relative  flex items-center justify-center h-[100%] " >
                    <button className="text-black inline-flex p-3 hover:text-white rounded md: lg:hidden nav-toggler ">
                        <span className="ml-auto">
                            <i className="fa-solid fa-bars"></i>
                        </span>
                    </button>
                    <div className=" h-[100%] text-black overflow-hidden">
                        <ul className="lg:inline-flex h-[100%] text-black">
                            <li className='animate-smart ease-in 300sec h-[100%] '>
                                <NavLink className=" pt-[54px] lg:inline-flex lg:w-auto px-4 mx-4 py-2 rounded font-extrabold font-sans text-base leading-[21.82px] tracking-[1%]  " activeclassname='active h-[80%] ' to="/">Home</NavLink>
                            </li>
                            <li className='animate-smart ease-in 300sec'>
                                <NavLink className="pt-[54px] lg:inline-flex lg:w-auto px-4 mx-4 py-2  font-extrabold font-sans text-base leading-[21.82px] tracking-[1%]   " activeclassname='active' to="/about">ABOUT</NavLink>
                            </li>
                            <li className='animate-smart ease-in 300sec'>
                                <NavLink className=" pt-[54px] lg:inline-flex lg:w-auto px-4 mx-4 py-2  font-extrabold font-sans text-base leading-[21.82px] tracking-[1%]  " activeclassname='active' to="/services">SERVICES</NavLink>
                            </li>
                            <li className='animate-smart ease-in 300sec' >
                                <NavLink className="pt-[54px] lg:inline-flex lg:w-auto px-4 mx-4 py-2  font-extrabold font-sans text-base leading-[21.82px] tracking-[1%]  " activeclassname='active' to="/client">CLIENT</NavLink>
                            </li>
                            <li className='animate-smart ease-in 300sec'>
                                <NavLink className="pt-[54px] lg:inline-flex lg:w-auto px-4 mx-4 py-2  font-extrabold font-sans text-base leading-[21.82px] tracking-[1%] " activeclassname='active' to="/blog">BLOG</NavLink>
                            </li>
                            <li>
                                <NavLink className="pt-[54px] lg:inline-flex lg:w-auto px-4 mx-4 py-2  font-extrabold font-sans text-base leading-[21.82px] tracking-[1%]  " activeclassname='active' to="/team">TEAM</NavLink>
                            </li>
                            <li >
                                <NavLink className="pt-[54px] lg:inline-flex lg:w-auto px-4 mx-4 py-2  font-extrabold font-sans text-base leading-[21.82px] tracking-[1%]  " activeclassname='active' to="/contact">CONTACT</NavLink>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>



        </>
    )
}

export default HomeNav
