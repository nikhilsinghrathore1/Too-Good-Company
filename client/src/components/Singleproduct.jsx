import React from 'react'

const Singleproduct = ({data , key}) => {
  
  return (
    <div className={`w-1/2 h-[111vh] flex flex-col items-center flex-shrink-0 ${data.id <= 2 ? "mb-12":"" }`}>
               <img className='w-[76%] h-[58%] object-cover' src={data.url} alt="not showing" />
               <p className='text-[11.5px] mb-1 mt-[118px] text-[#454545] uppercase font9'>{data.text}</p>
               <p className='text-[11px] font9 text-[#454545]'>{data.price}</p>
    </div>
  )
}

export default Singleproduct