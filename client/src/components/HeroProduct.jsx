import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const HeroProduct = () => {
  return (
    <div className='w-[32.4%] h-full relative shadow-xl overflow-hidden '>
      <img className=' w-full h-full object-cover' src="https://cdn.sanity.io/images/w8f1ak3c/production/138e191deead80c5c8e9a982c20987f8f83c1f27-5504x8256.jpg/JTG_2919%20copy.jpg?rect=276,0,4952,8256&w=640&h=1067&fit=min&auto=format" alt="not showing" />

      {/* internal div */}
      <div className='absolute top-0 w-full h-full  flex justify-center pt-72'>

      <div className=' relative z-10 w-64 h-12 overflow-hidden hover:h-56 tran origin-center bottom-0 pt-4 bg-[#EDF3FF] rounded-3xl'>
                <div className='top px-7 w-full flex justify-between items-center'>
                  <div className='w-2 h-2 bg-black rounded-full'></div>
                  <p className='font9 uppercase text-[11px]'>shop</p>
                  <p className='font9 uppercase text-[11px] font-bold tracking-wide'>pantry</p>
                  <div>
                  <IoIosArrowForward className='text-[10px]'/>
                  </div>
                </div>

                <div className='flex w-full h-[90%] '>

                  <div className='w-1/2 h-full flex flex-col  pt-5 items-center '>
                    <img className='flex-shrink-0 w-20 h-28 object-cover mb-4' src="https://cdn.sanity.io/images/w8f1ak3c/production/67981d5df16a3773320a12b140c52689e532c068-2000x2000.png/GreyRust.png?w=1024&h=1024&auto=format" alt="not showing"/>
                    <p className='font9 leading-none uppercase text-[10.5px]  '>change the course</p>
                    <p className='font9 uppercase text-[10.5px]  '>cookbook</p>
                  </div>

                  <div className='w-1/2 h-full flex flex-col  pt-5 items-center '>
                    <img className='w-20 h-28 flex-shrink-0 object-cover mb-4' src="https://cdn.sanity.io/images/w8f1ak3c/production/51bed63763d7dd75a8a04a6452d5806f71b43a67-2000x2000.png/WhiteLilac.png?w=1024&h=1024&auto=format" alt="not showing"/>
                    <p className='font9 leading-none uppercase text-[10.5px]  '>change the course</p>
                    <p className='font9 uppercase text-[10.5px]  '>Cook kitt</p>
                  </div>


                  
                </div>

      </div>

      </div>
    </div>
  )
}

export default HeroProduct