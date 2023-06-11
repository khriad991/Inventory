const DataModel = require("../../models/Customers/CustomerModel")
const CreateService = require("../../services/common/CreateService");
const UpdateService = require("../../services/common/UpdateService");
const ListService = require("../../services/common/ListService");
const DropDownService = require("../../services/common/DropDownService");

exports.CreateCustomers = async(req,res)=>{
    let Resutl = await CreateService(req,DataModel);
    res.status(200).json(Resutl);
}

exports.UpdateCustomers = async(req,res)=>{
    let Result = await UpdateService(req,DataModel)
    res.status(200).json(Result);
}

exports.CustomersList =async (req,res)=>{
    let SearchRgx = {"$regex": req.params.searchKeyword, "$options": "i"}
    let SearchArray = [
        {CustomerName:SearchRgx},
        {Name:SearchRgx},
        {Phone:SearchRgx},
        {Email:SearchRgx},
        {Address:SearchRgx}
    ]
    let Result = await ListService(req,DataModel,SearchArray);
    res.status(200).json(Result);
}

exports.CustomerDropDown= async (req,res)=>{
    let Result = await DropDownService(req,DataModel,{_id:1,CustomerName:1});
    res.status(200).json(Result);
}

