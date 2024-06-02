import React from 'react'
import Singleproduct from './Singleproduct'

const ProductsPage = () => {
  return (
    <div className='w-full h-[250vh] px-5'>
               <div className='w-full h-[220vh] flex flex-wrap pt-16'>
                              <div className='w-full mb-12 flex'>

                              <Singleproduct/>
                              <Singleproduct/>
                              </div>
                              <Singleproduct/>
                              <Singleproduct/>
               </div>
               <div className='w-full flex justify-between items-end h-[30vh] border-b-[2px] border-black'>
               <p className='text-9 uppercase text-[12px]'>words of goodness</p>
               <p className='text-9 uppercase text-[12px]'>message of love & support</p>
               </div>
    </div>
  )
}

export default ProductsPage