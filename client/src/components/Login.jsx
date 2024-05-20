import React from 'react'
import {useForm} from "react-hook-form"
import axios from "axios";

const Login = () => {

               const {register , handleSubmit , reset} = useForm();
               
      
               const onsubmit = async (data)=>{
                              try{
                                             await axios.post("http://localhost:3000/login",data);
                                             console.log("enter")
                                             reset()
                              }
                              catch (err) {
                                             console.log(`Login frontend error: `, err);
                              }
                              console.log("enter out")
                             
              }
  return (

                              


    <div>
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

export default Login