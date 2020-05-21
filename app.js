const express = require('express')
const app = express()
const bodyParser = require('body-parser')
var faker = require('faker')
//app.use(express.urlencoded()) 
app.use(bodyParser.urlencoded(
    {extended:true}
))

app.use(express.static('views'))
app.get('/',(req, res)=>{
    res.render('index.ejs')
})
//response to home route
app.post('/test',(req,res)=>{
   console.log(req.body)
})
app.listen(8000,()=>{
    console.log("server started")
})//choosing a port