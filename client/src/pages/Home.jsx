import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
               const navigate = useNavigate()
               const logout = ()=>{
                              localStorage.clear()
                              navigate("/register")
               }

               useEffect(() => {
                              try{
                                             const token = localStorage.getItem("token");
                                             console.log(token)
                                             axios.post("http://localhost:3000/home",{},{
                                                            headers:{
                                                              'authorization': `Bearer ${token}`
                                                            }
                                             })
                              }
                              catch(err){
                                             console.log(err)
                                             alert("something went wrong")
                                             
                              }
                 
               }, [])
               
  return (
    <div>
               <button onClick={logout}>logout</button>
    </div>

  )
}

export default Home