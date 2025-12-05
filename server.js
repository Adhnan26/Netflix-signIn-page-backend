const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors())

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

var email = "adhnan@gmail.com"
var pass = 123

app.post("/login",function(req,res){
    console.log(req.body.email)
    console.log(req.body.password)

    if(email === req.body.email && pass === Number(req.body.password)){
        res.send(true)
    }else{
        res.send(false)
    }
})


app.listen(3000,function(){
    console.log("Server Started....")
})