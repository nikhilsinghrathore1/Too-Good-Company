var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken")

const userModal = require("../modals/user")


mongoose.connect("mongodb://localhost:27017/too_good_company")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("hello");
});



router.post("/login",async (req,res)=>{
  try{
    const user = await userModal.findOne({username:req.body.username,password:req.body.password})
    if(user){
        const token = jwt.sign({
          email:user.email,
          username:user.username,
        },"secret124")
      console.log(user)
      res.json({status:"user found" , user:token})
    }
    else{
      res.json({status:"user not found"})

    }
  }
  catch(err){
    res.json({status:"user not found"})
  }
})

router.post("/register",async (req,res, next)=>{
  try{
    await userModal.create({
      username:req.body.username,
      email:req.body.email,
      password:req.body.password
    })
    res.json({status: "done"});

    console.log(req.body)
  }
  catch(err){
    res.json({status:"error"})
    console.log(err)
  }
})
module.exports = router;
