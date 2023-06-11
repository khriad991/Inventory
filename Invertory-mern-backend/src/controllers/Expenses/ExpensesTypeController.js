const DataModel = require("../../models/Expenses/ExpensesTypeModel");
const CreateService = require("../../services/common/CreateService");
const UpdateService = require("../../services/common/UpdateService");
const ListService = require("../../services/common/ListService");
const DropDownService = require("../../services/common/DropDownService");


exports.CreateExpenses = async (req,res)=>{
    let Result = await CreateService(req,DataModel);
    res.status(200).json(Result)
}

exports.UpdateExpensesType = async (req,res)=>{
    let Result = await UpdateService(req,DataModel);
    res.status(200).json(Result)
}


exports.ExpensesTypeList = async (req,res)=>{
    let searchRgx = {"$regex":req.params.searchKeyword,"$options":"i"};
    let searchArray = [{Name:searchRgx }]
    let Result = await ListService(req,DataModel, searchArray);
    res.status(200).json(Result)
}

exports.ExpensesTypeDropDown = async (req,res)=>{
    let Result =await DropDownService(req,DataModel,{_id:1,Name:1})
    res.status(200).json(Result);
}