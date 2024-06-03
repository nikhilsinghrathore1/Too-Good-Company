const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/GoodCompanyDB");

const userWallet = mongoose.Schema({
               userId : {
                              type:mongoose.Schema.Types.ObjectId,
                              ref:"userModel",
                              required:true
               },
               balance:{
                              type:Number,
                              default:0,
               }
})

module.exports = mongoose.model("userWallet" , userWallet)