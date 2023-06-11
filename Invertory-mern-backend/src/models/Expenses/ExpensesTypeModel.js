const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
    UserEmail:{type:String},
    Name:{type:String,unique:true},
    CreatedDate:{type:Date,default:Date.now()}
},{versionKey:false})

const ExpensesTypeModel = mongoose.model("ExpensesType",dataSchema)
module.exports = ExpensesTypeModel;