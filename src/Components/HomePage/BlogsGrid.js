import React,{useState} from 'react'

const BlogsGrid = () => {
     // eslint-disable-next-line
    const [blogs, setBlogs] = useState([
        {
            id: 0,
            date: "May 18, 2021",
            worktype: "Exterior",
            tips: "8 Pro Tips for Painting Your Interior navbar",
            object: " Walls",
            image: "blog1.png"
        }, {
            id: 1,
            date: "May 18, 2021",
            worktype: "Exterior",
            tips: "8 Pro Tips for Painting Your Interior navbar",
            object: " Ceil",
            image: "blog2.png"
        },
        {
            id: 2,
            date: "May 18, 2021",
            worktype: "Exterior",
            tips: "8 Pro Tips for Painting Your Interior navbar",
            object: "Floor",
            image: "blog3.png"
        }
    ])
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3  gap-[6.5rem]">
                {
                    blogs.map((item, index) => {
                        const { date, worktype, object, tips, image } = item
                        return (
                            <div key={index} className="mr-4 group  object-cover overflow-hidden  rounded-[20px] h-[512px] w-[400px]">
                                <img className='  hover:scale-125 duration-500 ' src={image} alt="blog1" />

                                <div className=" relative justify-center  text-left w-[400px] bg-[rgba(255,255,255,0.6)] backdrop-filter backdrop-blur h-[40vh] transition  duration-300 ease-in  group-hover:translate-y-[-105px]">
                                    <p className='py-4 pl-[44px] font-bold text-[20px] leading-[27.28px] font-[Nunito] tracking-[1%]' >{date}  • {worktype}</p>
                                    <p className='pl-[44px] font-bold text-[18px] leading-[24.55px] font-[Nunito] tracking-[1%]'>{tips} <br /> {object}</p>
                                </div>
                            </div>
                    )

                    })
                }


            </div>
        </>
    )
}

export default BlogsGrid
