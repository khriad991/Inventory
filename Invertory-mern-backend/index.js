const app =require("./app");

app.listen(process.env.PORT,(err)=>{
    if(!err){
        console.log(`Application Running on http://localhost:${process.env.PORT}`)
    }else {
        console.log("Application running fail ")
    }
})
