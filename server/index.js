const express = require("express")
const cors = require("cors")
const jwt = require("jsonwebtoken")
const app = express();

const userModel = require("./Model/User")
app.use(express.json())
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
               const email = payload.email;
               const username = payload.username;
               const password = payload.password;
               try{

                              const user = await userModel.findOne({username:username , email:email , password:password})
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

app.post("/home",verifyToken, (req,res)=>{
              console.log(req.user)
               res.status(200).send("recieved token")
})

function verifyToken(req,res,next){
               const token = req.headers['authorization'].split(" ")[1]
               if(!token){
                              res.status(400).json({msg:"invalid token"})
               }
               else{
                              jwt.verify(token , "123" , (err ,decode)=>{
                                             if(err){
                                                            res.status(400).json({msg:"wrong credentials"})
                                             }
                                             else{
                                                            req.user = decode;
                                                         next()
                                             }
                              })
               }
}


app.listen(3000)