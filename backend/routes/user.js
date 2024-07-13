const { Router } = require("express");
const router=Router();
const zod=require("zod");
const { User } =require("../db");
const { RouterProvider } = require("react-router-dom");



const signupBody=zod.object({
    email:zod.string().email(),
    firstName:zod.string(),
    lastName:zod.string(),
    password:zod.string()

})

const signinBody=zod.object({
    
})

router.post("/signup",async(req,res)=>{
    const{success}=signupBody.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            message:"Email has already been taken"
        })
    }
    const existingUser=await User.findOne({
        email: req.body.email
    })
    if(existingUser)
    return res.json({
        message:"Email already exists"
    })
    else{
    const user= await User.create({
        email:req.body.email,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        password:req.body.password
    })
    res.json({
        message:"Account created successfully"
    })
    }
})

router.post("/signin",async(res,req)=>{
    const {success}=signinBody.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            message:"Cant fetch details "
        })
    
    }

})


router.get('/data', async (req, res) => {
    try {
      const data = await User.find();
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

module.exports=router;

