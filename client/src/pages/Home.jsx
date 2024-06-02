import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import MainProduct from '../components/MainProduct'
import ProductsPage from '../components/ProductsPage'
import { LandingAtom } from '../Store/Atom'

const Home = () => {
              //  const navigate = useNavigate()
              //  const logout = ()=>{
              //                 localStorage.clear()
              //                 navigate("/register")
              //  }

              //  useEffect(() => {
              //                 try{
              //                                const token = localStorage.getItem("token");
              //                                console.log(token)
              //                                axios.post("http://localhost:3000/home",{},{
              //                                               headers:{
              //                                                 'authorization': `Bearer ${token}`
              //                                               }
              //                                })
              //                 }
              //                 catch(err){
              //                                console.log(err)
              //                                alert("something went wrong")
                                             
              //                 }
                 
              //  }, [])


               
  return (
    <div className='w-full bg-[#F7F7F7]' >
              <Hero/>
              <MainProduct/>
              <ProductsPage/>
              <Footer/>
    </div>

  )
}

export default Home