const express = require("express")
const cors = require("cors")
const jwt = require("jsonwebtoken")
const app = express();
const wallet = require("./Model/account")
const userModel = require("./Model/User")
app.use(express.json())
const verifytoken = require("./Middlewares/jwtValidation")
app.use(cors())

// need to implement the zod validation for the enterance routes


// this is the register route
app.post("/register",async(req,res)=>{
               const payload = req.body;
               try{

                              const token = jwt.sign(payload , "123")
                              const user = await userModel.create({
                                             username:payload.username,
                                             email:payload.email,                            
                                             password:payload.password
                              })
                              if(user){

                                             wallet.create({
                                                            userId:user._id,
                                                            balance:Math.floor(Math.random()*10000)
                                             }),
                                             res.status(200).json({msg:"done" , token : token})
                              }
                             else{
                              res.status(400).json({msg:"something wrong happened"})
                             }
               }
               catch(err){
                              res.status(400).json({msg:"user with same email already exists"})

               }
});

// this is the login route
app.post("/login", async (req,res)=>{
               const payload = req.body;
               const email = payload.email
               try{

                              const user = await userModel.findOne({email})
                              if(user){
                                             const token = jwt.sign(payload , "123")
                                             res.status(200).json({msg:"done" , token : token})
                              }        
                              else{
                                             res.status(400).json({msg:"user does not exists" })
                                             
                              }      
               }
               catch(err){
                              res.status(401).json({msg:"something went wrong"})
               }
});

app.get("/balance",verifytoken,async(req,res)=>{
               const payload = req.user ; 
               const user = await userModel.findOne({username:payload.username})
               const userid = user._id
               // console.log(userid);
             const data = await wallet.findOne({userId:userid})
             console.log(data);
             res.status(200).json({msg:`your account has ${data.balance} money`})
})
app.listen(3000)