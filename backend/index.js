const express=require("express");
const app=express();
const bodyParser=require("body-parser")
const adminRouter=require("./routes/admin")
const userRouter=require("./routes/user")

app.use(bodyParser.json())
app.use('/admin',adminRouter);
app.use('/user',userRouter)


const PORT=1000;

app.listen(PORT,()=>{
    console.log(`The server is running on PORT ${PORT}`)
})