import React from 'react'
import { IoEye } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useFormAction, useNavigate } from 'react-router-dom';
import {useForm} from "react-hook-form"


const Register = () => {
               const navigate = useNavigate()
      

          
  return (
    <div className='w-full h-screen gilroy flex items-center justify-center bg-[#151519]'>
              <div className='w-[90%] h-[95%] flex rounded-[40px] overflow-hidden bg-white'>
               <div className='w-[40%] h-full px-8 pt-8'>
                              {/* logo */}
               <h1 className=' font-bold gilb'>Cherryloves</h1>
                              {/* the register form section */}
               <div className='form w-full mt-[100px] px-10'>
                              <h1 className='text-lg mb-5 gilb'>Register your Account</h1>
                              <form action="">
                                             <div className='flex-col w-full flex gap-1 mb-2'>
                                             <label className='text-[11px] gilb'>Username*</label>
                                             <input className='w-full text-[13px] outline-none bg-[#F8F8F8] p-2 border-zinc-600/50 rounded-sm border-[1px]' type="text" placeholder='username' />
                                             </div>
                                             <div className='flex-col w-full flex gap-1 mb-2'>
                                             <label className='text-[11px] gilb'>E-mail*</label>
                                             <input className='w-full outline-none text-[13px] bg-[#F8F8F8] p-2 border-zinc-600/50 rounded-sm border-[1px]' type="email" placeholder='E-mail' />
                                             </div>
                                             <div className='flex-col w-full flex gap-1 relative'>
                                             <label className='text-[11px] gilb'>password*</label>
                                             <div className='absolute top-[52%] right-4'>
                                                            <IoEye className='text-xl opacity-60'/>
                                             </div>
                                             <input className='w-full text-[13px] outline-none bg-[#F8F8F8] p-2 border-zinc-600/50 rounded-sm border-[1px]' type="password" placeholder='Password' />
                                             </div>
                                             {/* section for the forgot password */}
                                             <div className='w-full flex mt-3 justify-between'>
                                                            <div className='flex items-center gap-1'>

                                                            <div className='w-8 shadow-inner shadow-black/50 h-4 rounded-full p-[1.5px] flex items-center bg-[#dedcdc]'>
                                                                           <div className='w-[13px] shadow-xl shadow-white h-[13px] rounded-full bg-white'></div>
                                                            </div>
                                                                           <h1 className='text-xs opacity-60 gilb'>Remember me</h1>
                                                            </div>

                                                            <div>
                                                                           <h1 className='text-xs gilb'>Forgot password?</h1>
                                                            </div>
                                             </div>

                                             <button onClick={(e)=>e.preventDefault() } className='w-full p-1 bg-[#151519] mt-4 text-white'>Create Your Account</button>
                              </form>

                              <div className='w-full border-t-[1px] mt-5 border-black/30'>
                                             <div className='w-full flex gap-1 mt-4 justify-center'>
                                                            <div className='w-[44%] border-black/20 border-[1px] pl-4 p-[1px] rounded-sm flex gap-1 items-center '>
                                                                           <FcGoogle className='text-xl'/>
                                                                           <p className='text-xs gilb opacity-75'>sign-in with Google</p>
                                                            </div>
                                                            
                                                            <div className='w-[44%] border-black/20 border-[1px] p-[1px] pl-4 rounded-sm flex gap-1 items-center '>
                                                                           <FaGithub className='text-xl'/>
                                                                           <p className='text-xs gilb opacity-75'>sign-in with Github</p>
                                                            </div>
                                                            
                                             </div>

                                             <div className='w-full flex justify-center mt-4'>
                                                            <button onClick={()=>navigate("/login")} className='text-xs text-[#484747] '>Already have a Account?<span className='gilb text-black ml-1'>Login now</span></button>
                                             </div>
                              </div>
               </div>


               </div>
               {/* this is the photos section */}
               <div className='w-[60%] flex justify-between h-full shadow-xl shadow-black/50'>
                              {/* right photos */}
                              <div className='w-[49.5%] h-full'>
                                             <img className='w-full h-[30%] object-bottom object-cover mb-4' src="https://plus.unsplash.com/premium_photo-1664544673662-e80e311da294?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c29hcHxlbnwwfHwwfHx8MA%3D%3D" alt="not showing" />
                                             <img className='w-full h-[68%] object-cover' src="https://plus.unsplash.com/premium_photo-1679064286720-9f28c0f012d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c29hcHxlbnwwfHwwfHx8MA%3D%3D" alt="not showing" />
                              </div>
                              <div className='w-[48%] h-full'>
                                             <img className='w-full h-[58%] object-cover mb-4' src="https://images.unsplash.com/photo-1618840313409-66c0d92d6f26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNvYXB8ZW58MHx8MHx8fDA%3D" alt="not showing" />
                                             <img className='w-full h-[42%] object-cover ' src="https://plus.unsplash.com/premium_photo-1679431062928-bbd83ca870f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNvYXB8ZW58MHx8MHx8fDA%3D" alt="not showing" />
                              </div>
               </div>
              </div>
    </div>
  )
}

export default Register