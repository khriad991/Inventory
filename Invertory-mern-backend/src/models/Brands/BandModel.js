const mongoose = require("mongoose");
const DataSchema = mongoose.Schema({
    UserEmail:{type:String},
    Name:{type:String, unique:true},
    createdDate:{type:Date , default:Date.now()}
},{versionKey:false});

const BrandsModel = mongoose.model("Brands", DataSchema);
module.exports = BrandsModel;