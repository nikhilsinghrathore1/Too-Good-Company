import React, { useEffect } from 'react'
import {useNavigate} from "react-router-dom"
import jwt from "jsonwebtoken"


const Home = () => {
const navigate = useNavigate()

useEffect(() => {
               const token = localStorage.getItem("token")
               if(token){
                              const user = jwt.decode(token)
                              if(!user){
                                             localStorage.removeItem(token)
                                             alert("user does not exists")
                                            navigate("/")
                              }
                              else{
                                             console.log("user exists")
                              }
               }
}, [])


  return (

    <div>
               <button onClick={()=>navigate("/")}>logout</button>
               Home
               </div>
  )
}

export default Home