const DataModel = require("../../models/Categorys/CategorysModel")
const CreateService = require("../../services/common/CreateService");
const UpdateService = require("../../services/common/UpdateService");
const ListService = require("../../services/common/ListService");
const DropDownService = require("../../services/common/DropDownService");




exports.CreateCategory = async(req,res)=>{
  let Result = await CreateService(req,DataModel);
  res.status(200).json(Result);
}


exports.UpdateCategory= async(req,res)=>{
    let Result = await UpdateService(req,DataModel)
    res.status(200).json(Result);
}

exports.CategorysList =async(req,res)=>{
    let SearchRgx = {"$regex": req.params.searchKeyword, "$options": "i"}
    let SearchArray = [{Name:SearchRgx}];
    let Result = await ListService(req,DataModel,SearchArray);
    res.status(200).json(Result)
}

exports.CategoryDropDown = async(req,res)=>{
    let Result = await DropDownService(req,DataModel,{_id:1,Name:1});
    res.status(200).json(Result);
}