const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/GoodCompanyDB");

const userModel = mongoose.Schema({
               username : {
                              type : String , 
                              required : true
               },
               email:{
                              type : String , 
                              unique:true, 
                              required: true, 
               }, 
               password: {
                              type:String , 
                              required:true,
               }
})
module.exports = mongoose.model("userModel" , userModel);