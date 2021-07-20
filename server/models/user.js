const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:"Name is required"
    },
    email:{
        type:String,
        trim:true,
        required:"email is required",
        unique:true
    },
    password:{
        type:String,
        trim:true,
        required:"password is required",
        min:6,
        max:64
    },
    stripe_account_id:"",
    stripe_seller:{},
    stripeSession:{}
},
{timestamps:true}
)

export default mongoose.model('User',userSchema)