import React from 'react'

const Fifth = () => {
  return (
    <div className='w-full bg-[#18191F] h-[250vh] text-white pt-[200px] relative'>
               <div className='w-full flex items-end gap-4 px-4  justify-between'>
                              <div className='leading-[50px] '>
                                             <p className='font4 text-[44px]'>We will help</p>
                                             <p className='font4 text-[44px] '>you to implement</p>
                              </div>
                              <div className='w-[55%] mb-4 border-b-[1px] border-white/30'></div>
                              <div className='relative top-10 leading-[50px] text-right'>
                                             <p className='font4 text-[44px]'>any design</p>
                                             <p className='font4 text-[44px] opacity-40'>solutions</p>
                              </div>
               </div>

               <div className='w-full flex items-center justify-center px-4   opacity-70 mt-32  font4'>
                        <div>
                              <p>Selemen<span className='inline-block relative -top-1 text-[12px]'>®</span>  — is a company for the construction and</p>
                              <p>decoration of premises. We carry out projects on time,</p>
                              <p>within budget and with an exceptional level of quality.</p>
                        </div>
               </div>

               <div className='marquee w-full flex flex-nowrap h-fit px-4  overflow-hidden mt-10'>
                    <div className='font1 text-[13.9rem] tracking-tighter text-[#4B4C53] flex-shrink-0'>
                      <p > Future by Selemen®</p>
                    </div>
                    <div className='font1 text-[13.9rem] tracking-tighter text-[#4B4C53] flex-shrink-0'>
                      <p > Future by Selemen®</p>
                    </div>
                    <div className='font1 text-[13.9rem] tracking-tighter text-[#4B4C53] flex-shrink-0'>
                      <p > Future by Selemen®</p>
                    </div>
                    <div className='font1 text-[13.9rem] tracking-tighter text-[#4B4C53] flex-shrink-0'>
                      <p > Future by Selemen®</p>
                    </div>
                 
               </div>

               <div className='h-[100vh] absolute bottom-0 w-full bg-red-50'>
                <img className='w-full h-full object-cover' src="https://selemen.liqium.com/img/bg13.jpg" alt="not showing" />
               </div>
    </div>
  )
}

export default Fifth