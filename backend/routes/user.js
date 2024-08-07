const { Router } = require("express");
const router=Router();
const zod=require("zod");
const { User } =require("../db");
const { Account } =require("../db")
const mongoose=require("mongoose")
const jwt=require("jsonwebtoken")
const JWT_SECRET=require("../jwtconfig")




const signupBody=zod.object({
    email:zod.string().email(),
    firstName:zod.string(),
    lastName:zod.string(),
    password:zod.string()

})

const signinBody=zod.object({
    password:zod.string(),
    email:zod.string().email()  
})
const accountBody=zod.object({
    userId:zod.string(),
    balance:zod.string()
})
router.post("/signup",async(req,res)=>{
    const{success}=signupBody.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            message:"Emaill has already been taken"
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


router.post("/signin",async (req,res,next)=>{
    const {success}=signinBody.safeParse(req.body);
    if(!success){
        res.json({
            message:"Invalid Credentials!"
        })
    }
    else{
        const existingUser=User.findOne({
            email:req.body.email,
            password:req.body.password
        })
        if(existingUser){
            const token=jwt.sign({
                userID:existingUser._id
            },JWT_SECRET)
            
        }
        res.json({
            message:"User not found"
        })
        
    }

})

/*middleware add
router.post("/signin",                 async(res,req)=>{
    const {success}=signinBody.safeParse(req.body);
    
})
*/

router.get('/data', async (req, res) => {
    try {
      const data = await User.find();
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

router.get('/account',async(req,res)=>{
    try{
        const data=await Account.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message:error.message});
    }

})  


router.post('/account',async(req,res)=>{
    const success=accountBody.safeParse(req.body);
    if(!success){
        return res.json("Invalid Request")
    }
    const existingUser=User.findOne({
        _id:req.body.userId
    })
    if(existingUser){
        const account=Account.create({
            userId:req.body.userId,
            balance:req.body.balance
        })
        return res.json("Balance has been successfully added to the user")
    }
    else{
        return res.json("Could not find user with that account")
    }
    

})

//fix this 
  
  router.put('/pay/:id', async (req, res) => {
    const { id } = req.params;
    const { balance } = req.body;

    console.log(balance)

      const updatedUser = await updateUserBalance(id, balance);
      if (!updatedUser) {
        return res.status(404).send('User not found');
      }
      else{
        res.send(`User with ID ${id} updated successfully with new balance!`);
      }
   
  });

  const updateUserBalance = async (id, balance) => {
    const userId = new mongoose.Types.ObjectId(id);
      if(userId){
        console.log(userId)
        const user = await Account.findByIdAndUpdate(userId, { balance: balance }, { new: true });
        return user;
      }
      else{
        console.log("ERROR IN UPDATE USER BALANCE")
      }   
  };

module.exports=router;
