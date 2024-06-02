const express = require("express")
const router = express.Router();
const verifyToken = require("../Middlewares/jwtValidation")
const {data , products} = require("./public/homeData");

router.get("/product",(req,res)=>{
               // console.log(storeData);         
               res.status(200).json(data);  
})

router.get("/mainProducts",(req,res)=>{
               res.status(200).json(products)
})

module.exports = router;