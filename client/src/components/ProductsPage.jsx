import React from 'react'
import { useRecoilValue } from 'recoil'
import { mainProducts } from '../Store/Atom'
import Singleproduct from './Singleproduct'

const ProductsPage = () => {

  const mainProduct = useRecoilValue(mainProducts)
  return (
    <div className='w-full h-[250vh] px-5'>
               <div className='w-full h-[220vh] flex flex-wrap pt-16'>
                              {mainProduct.map((e,i)=>(
                                 <Singleproduct data = {e} key={i} />
                              ))}

                      
               </div>
               <div className='w-full flex justify-between items-end h-[30vh] border-b-[2px] border-black'>
               <p className='text-9 uppercase text-[12px]'>words of goodness</p>
               <p className='text-9 uppercase text-[12px]'>message of love & support</p>
               </div>
    </div>
  )
}

export default ProductsPage