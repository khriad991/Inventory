const mongoose = require("mongoose");

const OTPSSchema = mongoose.Schema({
    email:{type:String},
    otp:{type:String},
    status:{type:Number,default:0},
    createdDate:{type:Date, default:Date.now()}
},{versionKey:false})

const OTPSModel = mongoose.model("otps", OTPSSchema);
module.exports= OTPSModel;