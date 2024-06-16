const express = require('express');
const userRouter = require("./user");
const adminRouter=require("./admin")

const router = express.Router();


router.use("/user", userRouter)

module.exports = router;