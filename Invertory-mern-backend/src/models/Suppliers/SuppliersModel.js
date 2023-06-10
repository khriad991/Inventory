const mongoose = require("mongoose");

const DataSchema = mongoose.Schema({
    UserEmail:{type:String},
    Name:{type:String},
    Address:{type:String},
    Phone:{type:String},
    Email:{type:String},
    CreateDate:{type:Date, default:Date.now()},
},{versionKey:false})

const SuppliersModel = mongoose.model('supliers',DataSchema)

module.exports= SuppliersModel