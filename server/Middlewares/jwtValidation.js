const jwt = require("jsonwebtoken")


function verifyToken(req,res,next){
               const token = req.headers['authorization'].split(" ")[1]
               console.log(token)
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

module.exports = verifyToken;
