const jwt= require("jsonwebtoken");
const { JWT_Secret }=require("./jwtconfig")

const authMiddleware=(req,res,next)=>{
    const header=req.body.authorisation
}