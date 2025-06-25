"use client"

import Link from "next/link"
import { useState } from "react"

const Menu = () => {

    const [open, setOpen] = useState(false)

    return (
      <div className='absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10'>
        <img 
            src="/menu.png" 
            alt="" 
            width={28} 
            height={28} 
            className="cursor-pointer" 
            onClick={() => setOpen((prev) => !prev)}
        /> {
            open && (
                <div className="">
                    <Link href="/">Home</Link> 
                    <Link href="/">Shop</Link>
                    <Link href="/">Cart</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Logout</Link>
                </div>
            )
        }
      </div>
    )
  }
  
  export default Menu
