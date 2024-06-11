const express=require("express")
const rootRouter=require("./routes/index")
const cors=require("cors")

const app=express();

app.use(cors());

app.use(express.json());

app.use("/api/v1",rootRouter)

const PORT=3000;


app.listen(PORT,()=>{
    console.log(`Server is running on PORT :${PORT}`)
});