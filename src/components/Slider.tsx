"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const slides = [
    {
        id: 1,
        title: "Cooking Kit",
        description: "Grad Season Sale! 20% Off All Starter Kits!",
        img: "https://images.pexels.com/photos/6944056/pexels-photo-6944056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        url: "/",
        bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
    },
    {
        id: 2,
        title: "Cleaning Kit",
        description: "Grad Season Sale! 20% Off All Starter Kits!",
        img: "https://images.pexels.com/photos/9462307/pexels-photo-9462307.jpeg?auto=compress&cs=tinysrgb&w=1200",
        url: "/",
        bg: "bg-gradient-to-r from-pink-50 to-yellow-50",
    }
]

const Slider = () => {
    const [current, setCurrent] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const router = useRouter();

    useEffect(()=>{
        if (isHovered) return;

        const interval = setInterval(()=> {
            setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 3000);

        return () => clearInterval(interval);
    }, [isHovered, slides.length]);

    return (
        <div className='h-[calc(100vh+300px)] overflow-hidden'>
            <div className="w-max h-full flex transition-all ease-in-out duration-1000" style={{transform:`translateX(-${current * 100}vw)`}}>
                {slides.map(slide=> (
                    <div className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`} key={slide.id}>
                        {/* TEXT CONTAINER - change */}
                        <div className="xl:w-1/2 h-1/2 p-4 xl:h-full flex items-center justify-center gap-8 flex-col 2xl:gap-12 text-center">
                            <h2 className="text-xl lg:text-3xl 2xl:text-5xl font-bold">{slide.description}</h2>
                            <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">{slide.title}</h1>
                            <Link href="/list?cat=all-products">
                                <button className="rounded-md bg-black text-white p-4 py-3 relative hover:shadow-xl hover:scale-110" 
                                 onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>SHOP NOW</button>
                            </Link>
                        </div>
                        {/* IMAGE CONTAINER - change. relative and 100% mean it takes up the whole space */}
                        <div className="relative h-1/2 xl:w-1/2 xl:h-full">
                            <Image src={slide.img} alt={slide.title} fill sizes="100%" className="object-contain"/>
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute margin-auto left-1/2 bottom-8 flex gap-4">
            {
                slides.map((slide, index) => (
                    <div className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${current === index ? "scale-150" : ""}`} 
                    key={slide.id}
                    onClick={()=>setCurrent(index)}>

                    {current === index && (<div className="w-[6px] h-[6px] rounded-full bg-gray-600"></div>)}
                    </div>
                ))
            }
            </div>
        </div>
    )
  }
  
  export default Slider
