const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://syedabuubaid:F7sTvPpgu7kn1Xup@cluster0.ymvplll.mongodb.net/xero-pay")

const userSchema=new mongoose.Schema({
    email:String,
    password:String,
    firstName:String,
    LastName:String
    
})



const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

const User=mongoose.model("User",userSchema)
const Account = mongoose.model('Account', accountSchema);

module.exports={
    User,
    Account
};

