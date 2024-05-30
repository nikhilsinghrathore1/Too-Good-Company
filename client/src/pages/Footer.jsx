import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-[105vh] bg-[#151519] text-white'>
               <div className='w-full h-[55%] flex '>
                              <div className='w-1/2 h-full font5 pl-10 pt-20 text-lg  border-r-[1px] border-white/20'>
                                             <p className='opacity-50'>More than 20 years</p>
                                             <p className='opacity-50'>of successful work</p>
                              </div>
                              <div className='w-1/2 h-full'></div>
               </div>

               <div className='w-full h-[37%] leading-none overflow-hidden  '>
                              <h1 className='text-[21.7rem] font1 leading-none -translate-y-[80px] text-[#333338] tracking-tighter'>Selemen®</h1>
               </div>

               <div className='w-full h-[8%] flex px-7'>
                              <div className=' items-end pb-2 w-full h-full border-t-[1px] border-white/20 flex justify-between'>
                                             <p className='text-[#71717c] font1'>©2024</p>
                                             <p className='font1 text-[#71717c]'>Made by <span className='opacity-100 text-white/70'>nikhil</span></p>
                              </div>
               </div>
    </div>
  )
}

export default Footer