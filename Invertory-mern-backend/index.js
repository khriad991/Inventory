const app =require("./app");
let PORT = 5000
app.listen(PORT,(err)=>{
    if(err){
        console.log("Application running fail ")
    }else {
        console.log(`Application Running on http://localhost:${PORT}`)
    }
})
