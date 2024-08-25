require('dotenv').config();
const jwt=require("jsonwebtoken")


const middleware=(req,res,next)=>{

    const authHeader=req.headers['authorization']
    if(!authHeader){
        return res.json({message:'no token is present'})
    }
    const token=authHeader.split(' ')[1]
    console.log(token)
    if(token){

        jwt.verify(token,process.env.JWT_SECRET,(err,decoded)=>{
            if(err){
                return res.status(401).json({message:"no token provided"})
            }
        })
        next();
    }
    else{
        
    }

}

module.exports=middleware;