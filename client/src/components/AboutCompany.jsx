import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const AboutCompany = () => {
  return (
    <div className='w-full h-[40vh] bg-[#151519]  px-5 text-white font2 pb-1'>
               <div className='w-full  border-b-[1px]  border-t-[1px] h-full border-white/30 flex text-[14px]'>
                              <div className='w-1/2 h-full border-r-[1px] border-white/20 flex items-end'>
                                             <p className='flex pb-2 gap-3 items-center opacity-65 '>About company <span className='pt-1 opacity-70'><FaArrowRightLong/></span></p>
                              </div>
                              <div className='w-1/2 h-full flex justify-end items-end '>

                                             <p className='flex gap-3 pb-2 items-center opacity-65 '>Services<span className='pt-1 opacity-70'><FaArrowRightLong/></span></p>
                              </div>
               </div>
    </div>
  )
}

export default AboutCompany