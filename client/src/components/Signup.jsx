import React from 'react'
import {useForm} from "react-hook-form"
import axios from "axios";
import {useNavigate} from "react-router-dom"

const Signup = () => {
               const navigate = useNavigate();
               const {register , handleSubmit , reset} = useForm();
               
      
               const onsubmit = async (data)=>{
                              try{
                                            const res = await axios.post("http://localhost:3000/login",data);
                                            console.log(res.data.status)
                              //               navigate("/home")
                                             reset()

                                         if(res.data.status == "user not found"){
                                             alert("failure")
                                         }
                                         else{
                                             navigate("/home")
                                             
                                         }
                              }
                              catch (err) {
                                             console.log(`Login frontend error: `, err);
                              }
                              console.log("enter out")
                             
              }
  return (

                              


    <div>
               <button onClick={()=>navigate("/")}>login</button>
               <form onSubmit={handleSubmit(onsubmit)}>
                              <input {...register("username")} type="text" name="username"  />
                              <br />
                              <input {...register("email")} type="email" name="email"  />
                              <br />
                              <input {...register("password")} type="password" name="password"  />
                              <br />
                              <input type="submit"  />
               </form>
    </div>
  )
}

export default Signup;