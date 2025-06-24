"use client"

const Promo = () => {
    return (
        <div id="promo" className="fixed top-0 w-full overflow-hidden bg-black h-[30px] flex items-center select-none z-[1100]">
      
            <div className="flex animate-marquee whitespace-nowrap min-w-full gap-16 px-6 lg:px-10 xl:px-16">
                <div className="text-[10px] tracking-widest font-medium text-white justify-center">
                20% OFF EVERYTHING! USE CODE: SAVE20 <a href="/collections/sale" className="underline hover:text-gray-300">Shop Now</a>
                </div>
            </div>

            <div className="flex animate-marquee whitespace-nowrap min-w-full gap-16 px-6 lg:px-10 xl:px-16">
                <div className="text-[10px] tracking-widest font-medium text-white justify-center">
                FREE SHIPPING ON ORDERS OVER $99
                </div>
            </div>

        {/* SECOND LOOP 
            <div className="flex animate-marquee whitespace-nowrap min-w-full gap-16 px-6 lg:px-10 xl:px-16 absolute top-0 left-full">
                <div className="text-[10px] tracking-widest font-medium text-white justify-center">
                20% OFF EVERYTHING! USE CODE: SAVE20 <a href="/collections/sale" className="underline hover:text-gray-300">Shop Now</a>
                </div>

                <div className="text-[10px] tracking-widest font-medium text-white justify-center">
                FREE SHIPPING ON ORDERS OVER $99
                </div>
            </div>
            */}

        </div>
    )
  }
  
  export default Promo;
