import React from 'react'
import { useRecoilValue } from 'recoil';
import { LandingAtom } from '../Store/Atom';
import HeroProduct from './HeroProduct'

const MainProduct = () => {

  
  const landingdata = useRecoilValue(LandingAtom)
  let arr  = landingdata.mainProducts;

  return (
    <div className='w-full h-[160vh] px-6'>
               <div className='w-full h-[103vh] flex justify-between pt-3'>
                          {arr.map((e,i)=>(
                            <HeroProduct key= {i} data = {e}/>
                          ))}
               </div>

               <div className='w-full h-[57vh] flex justify-between pt-16'>
                  <div className='w-[67%] h-full '>
                    <h1 className='text-[50px] font10 uppercase leading-none '>WE BELIEVE IN PEOPLE,</h1>
                    <h1 className='text-[50px] font10 uppercase leading-none '>until they believe in</h1>
                    <h1 className='text-[50px] font10 uppercase leading-none '>themselves again.</h1>
                  </div>

                  <div className='w-[33%] h-full pl-1'>
                    <p className='font9 text-[15px] w-[70%] mb-7 '>Everything we do is designed to rebuild self worth and independence, in order to break free from the cycle of disadvantage.</p>
                    <p className='font9 text-[15px] w-[80%] mb-7 '>With every purchase you make with us, you're helping to change the course of someone's life; you're walking alongside vulnerable women as they find their way home again.</p>
                    <div className='border-b-[1px] border-black w-fit pb-1'>
                    <p className='font8 text-[11.5px] bg-black w-fit text-white py-[2px]'>SHOP TO SUPPORT</p>
                    </div>
                  </div>
               </div>
    </div>
  )
}

export default MainProduct