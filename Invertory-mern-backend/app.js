const express = require('express')
const router = require("./src/routes/api");
const app = new express();
// const bodyParser = require("body-parser");

//security library import
const reteLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors")

//DataBase library import
const mongoose = require("mongoose");

//security middleware implement
app.use(cors());
app.use(hpp());
app.use(xss());
app.use(mongoSanitize());
app.use(helmet());

//this json limit increase very important -->> because default limit iis very low
app.use(express.json({limit:'50mb'}));
// app.use(express.urlencoded({limit:'50mb'}));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// bodyParser implement
// app.use(bodyParser.json());


// set request limimit
const limiter = reteLimit({windowMs:15*60* 1000 , max:3000});
app.use(limiter);

// connect DataBase with mongoose
let URL ="mongodb+srv://<usere>:<pass>@cluster0.am8jyr5.mongodb.net/INVENTORY?retryWrites=true&w=majority"
let OPTION ={user:"testcrud991", pass:"testcrud991" , autoIndex:true};

mongoose.connect(URL,OPTION,(err)=>{
    if(err){
        console.log("Database Connect File", err)
    }else {
        console.log("DataBase Connect successful")
    }
})

// router implement for api
app.use('/api/v1',router)

// implement undefined [404 ] Route
app.use('*',(req,res)=>{
    res.status(404).json({status:'fail', data:'Not Found'})
});


module.exports= app

