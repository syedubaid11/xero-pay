const express=require("express")
const rootRouter=require("./routes/index")
const cors=require("cors")
const userRouter=require("./routes/user")
const passport=require("passport");


const app=express();

app.use(cors());

app.use(express.json());

app.use("/user",userRouter)

const PORT=3000;


app.listen(PORT,()=>{
    console.log(`Server is running on PORT :${PORT}`)
});