const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    email:String,
    password:String,
    firstName:String,
    LastName:String
    
})


const User=mongoose.model("User",userSchema)

module.exports={
    User
};
