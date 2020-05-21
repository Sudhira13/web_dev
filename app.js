const express = require('express')
const app = express()
const bodyParser = require('body-parser')
var faker = require('faker')
var mongoose = require('mongoose')

const dataschema = new mongoose.Schema({
    name:"String",
    team:"String"
})
var User = mongoose.model("User",dataschema)
//app.use(express.urlencoded()) 
app.use(bodyParser.urlencoded(
    {extended:true}
))
mongoose.connect("mongodb+srv://sudhira:maggie01@cluster0-owtps.mongodb.net/test?retryWrites=true&w=majority",{useUnifiedTopology: true, useNewUrlParser: true}).then(()=>{console.log("db connected")}).catch((err)=>{console.log(err)});

app.use(express.static('views'))
app.get('/',(req, res)=>{
    User.find({},(err,data)=>{
        if(err){
            console.log("cant find data",err)
        }
        else{
            res.render("index.ejs",{user:data})
        }
    })
})
//response to home route
app.post('/test',(req,res)=>{
    var newUser = new User({
        name : req.body.name,
        team : req.body.team
    }).save().then(savedData => console.log("data saved",savedData)).catch(err => console.log(err))
    res.redirect('/')
})
// app.post('/test',(req,res)=>{
//    console.log(req.body)
//    res.redirect('/')
// })
app.listen(8000,()=>{
    console.log("server started")
})//choosing a port

//this is branch 1