import React from 'react'
import AboutCompany from '../components/AboutCompany'

const Sixth = () => {
  return (
               <>
    <div className='w-full h-[285vh] bg-[#151519] pl-5  text-white pt-[400px] '>
               <div className='w-full h-[98%]  relative overflow-hidden text-[8.5rem] tracking-tighter  leading-none font1'>
                              <p>
                              {'Selemen®'.split("").map((char, index) => (
                                <span className='opacity-30 z-10 relative' key={index}>{char}</span>
                               ))}

                              </p>
                              <p>
                              {'provides a full'.split("").map((e, i) => (
                                            e==" "? <span>&nbsp;</span>:<span className='opacity-30 z-10 relative'>{e}</span>
                               ))}

                              </p>
                              <p>
                              {'range of services'.split("").map((e, i) => (
                                            e==" "? <span>&nbsp;</span>:<span className='opacity-30 z-10 relative'>{e}</span>
                               ))}
                                            
                              </p>
                              <p>
                              {'for interior'.split("").map((e, i) => (
                                            e==" "? <span>&nbsp;</span>:<span className='opacity-30 z-10 relative'>{e}</span>
                               ))}   
                                            
                              </p>
                              <p>
                              {'decoration'.split("").map((e, i) => (
                                            e==" "? <span>&nbsp;</span>:<span className='opacity-30 z-10 relative'>{e}</span>
                               ))}   
                                        
                              </p>
                              <p>
                              {'and construction'.split("").map((e, i) => (
                                            e==" "? <span>&nbsp;</span>:<span className='opacity-30 z-10 relative'>{e}</span>
                               ))} 
                                          
                              </p>
                              <p>
                              {'solutions turnkey'.split("").map((e, i) => (
                                            e==" "? <span>&nbsp;</span>:<span className='opacity-30 z-10 relative'>{e}</span>
                               ))}
                                            
                              </p>
                              <p>
                              {'for residential'.split("").map((e, i) => (
                                            e==" "? <span>&nbsp;</span>:<span className='opacity-30 z-10 relative'>{e}</span>
                               ))}
                                             
                              </p>
                              <p>
                              {'and commercial'.split("").map((e, i) => (
                                            e==" "? <span>&nbsp;</span>:<span className='opacity-30 z-10 relative'>{e}</span>
                               ))}               
                              </p>
                              <p>
                              {'construction'.split("").map((e, i) => (
                                            e==" "? <span>&nbsp;</span>:<span className='opacity-30 z-10 relative'>{e}</span>
                               ))}  
                              </p>

                              <div className='w-64 h-[440px] absolute top-16 right-[25.3%] z-[1]'>
                                             <img className='object-cover h-full ' src="https://selemen.liqium.com/img/lt1.jpg" alt="not showing" />
                              </div>
                              <div className='w-[40%] h-[60%] absolute top-[50%] -right-[144px]'>
                                             <img className='h-full object-cover' src="https://selemen.liqium.com/img/lt2.jpg" alt="not showing" />
                              </div>
                              <div className='w-64 h-[440px] absolute -bottom-[30%] left-[0px]'>
                                             <img className='h-full object-cover' src="https://selemen.liqium.com/img/lt3.jpg" alt="not showing" />
                              </div>
               </div>
               <div>
                              <p className='font2 text-[14px] opacity-75'>Advantages and facts</p>
               </div>
    </div>
    <AboutCompany/>
    </>
  )
}

export default Sixth