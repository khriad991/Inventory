const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
    UserEmail:{type:String},
    Email:{type:String,unique:true},
    CreatedDate:{type:Date,default:Date.now()}
})

const ExpensesTypeModel = mongoose.model("ExpensesType",dataSchema)
module.exports = ExpensesTypeModel;