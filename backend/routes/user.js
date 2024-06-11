const { Router } = require("express");
const router=Router();
const zod=require("zod")



const signupBody=zod.object({
    email:zod.string().email(),
    firstName:zod.string(),
    lastName:zod.string(),
    password:zod.string()

})

router.post("/signup",async(res,req)=>{
    const{success}=signupBody.safeparse(req.body);
    if(!success){
        return res.status(411).json({
            message:"Email has already been taken"
        })
    }
    const existingUser=await User.findOne({
        email:req.body.username
    })
    if(existingUser)
    return res.json({
        message:"Email already exists"
    })
    const newUser= await User.createOne({
        email:req.body.email,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        password:req.body.password
    })
    console.log("user created successfully")
})

module.exports=router;

