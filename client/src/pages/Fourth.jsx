import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const Fourth = () => {
  return (
    <div className='w-full h-[335vh] text-white '>
             <div className='w-full relative h-[100vh] object-cover box'>
               <div className='w-full h-full  fixed top-0 z-10'>

               <img className='w-full h-full object-cover' src="https://selemen.liqium.com/img/b1.jpg" alt="not showing" />

                      
                                             <div className='w-full text-center absolute top-[50%] -translate-y-1/2'>
                                                            <h1 className='font1 tracking-tighter text-[3.5rem] uppercase mb-1'>apartments #80</h1>
                                                            <p className='text-[11px] font1 opacity-80'>A cozy space for living and working in the very</p>
                                                            <p className='text-[11px] font1 opacity-80'>center of the city</p>
                                             </div>
               </div>
              

             </div>

             <div className='w-full relative h-[100vh] object-cover  box'>

               <div className='w-full h-full  fixed top-0 z-10'>

               <img className='w-full h-full object-cover' src="https://selemen.liqium.com/img/b2.jpg" alt="not showing" />

                      
                                             <div className='w-full text-center absolute top-[50%] -translate-y-1/2'>
                                                            <h1 className='font1 tracking-tighter text-[3.5rem] uppercase'>Sea of lights</h1>
                                                            <p className='text-[11px] font1 opacity-80'>Comfort surrounded by natural</p>
                                                            <p className='text-[11px] font1 opacity-80'>materials</p>
                                             </div>
               </div>
              

             </div>

             <div className='w-full relative h-[100vh] object-cover  box'>
              
              <div className='w-full h-full  fixed top-0 z-10'>

               <img className='w-full h-full object-cover' src="https://selemen.liqium.com/img/b3.jpg" alt="not showing" />

                      
                                             <div className='w-full text-center absolute top-[50%] -translate-y-1/2'>
                                                            <h1 className='font1 tracking-tighter text-[3.5rem] uppercase'>First number</h1>
                                                            <p className='text-[11px] font1 opacity-80'>An elaborate space in one of the most prestigious</p>
                                                            <p className='text-[11px] font1 opacity-80'>area of the city</p>
                                             </div>
              </div>

             </div>

             <div className='w-full h-[35vh] bg-[#151519] px-3 '>

               <div className='w-full h-1/2 border-b-[1px] border-[#fff]/30 flex  px-3'>
                              <div className='w-1/2 h-full border-r-[1px] border-white/30 flex items-end pb-4'>
                                             <h1 className='flex items-center gap-1 font1 opacity-75 text-[14px]'>All apartments <span> <FaArrowRightLong/></span></h1>
                              </div>
                              <div className='w-1/2 h-full flex items-end justify-end pb-4 '>
                              <h1 className='flex items-center gap-1 font1 opacity-75 text-[14px]'>All premises <span> <FaArrowRightLong/></span></h1>
                              </div>
               </div>

               <div className='w-full h-1/2 border-b-[1px] border-[#fff]/30 flex items-center justify-center'>
                              <div className='text-[#9B9DA7] w-[130px] h-12 rounded-full flex items-center justify-center font1 text-[11.5px] bg-[#35363D] hover:bg-[#24262B] tran'>
                                             Send request
                              </div>
               </div>


             </div>
    </div>
  )
}

export default Fourth