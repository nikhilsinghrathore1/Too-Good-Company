import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const HeroProduct = ({data}) => {
  // console.log(data.Insideimages[0])
  return (
    <div className='w-[32.4%] h-full relative shadow-xl overflow-hidden '>
      <img className=' w-full h-full object-cover' src={data.mainImg} alt="not showing" />

      {/* internal div */}
      <div className='absolute top-0 w-full h-full  flex justify-center pt-72'>

      <div className={` relative z-20 w-[275px] h-12 overflow-hidden hover:h-56 bg-[${data.color}] tran1 origin-center bottom-0 pt-4  rounded-3xl`}>
                <div className='top px-7 w-full flex justify-between items-center'>
                  <div className='w-2 h-2 bg-black rounded-full'></div>
                  <p className='font9 uppercase text-[11px]'>shop</p>
                  <p className='font9 uppercase text-[11px] font-bold tracking-wide'>{data.text}</p>
                  <div>
                  <IoIosArrowForward className='text-[10px]'/>
                  </div>
                </div>

                <div className='flex w-full h-[90%] '>

                  <div className='w-1/2 h-full flex flex-col  pt-5 items-center '>
                    <img className='flex-shrink-0 w-20 h-28 object-cover mb-4' src={data.Insideimages[0]} alt="not showing"/>
                    <p className='font9 leading-none uppercase text-[10.5px]  '>{data.Insidetext[0]}</p>
                    <p className='font9 uppercase text-[10.5px]  '>{data.Insidetext[1]}</p>
                  </div>

                  <div className='w-1/2 h-full flex flex-col  pt-5 items-center '>
                    <img className='w-20 h-28 flex-shrink-0 object-cover mb-4' src={data.Insideimages[1]} alt="not showing"/>
                    <p className='font9 leading-none uppercase text-[10.5px]  '>{data.Insidetext[2]}</p>
                    <p className='font9 uppercase text-[10.5px]  '>{data.Insidetext[3]}</p>
                  </div>


                  
                </div>

      </div>

      </div>
    </div>
  )
}

export default HeroProduct