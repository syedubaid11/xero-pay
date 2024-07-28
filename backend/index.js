const express=require("express")
const cors=require("cors")
const userRouter=require("./routes/user")


const app=express();

app.use(cors({
    origin:["https://xero-pay-frontend.vercel.app"],
    methods:["POST,GET"],
    credentials:true
}));

app.use(express.json());

app.use("/user",userRouter)

const PORT=3000;


app.listen(PORT,()=>{
    console.log(`Server is running on PORT :${PORT}`)
});