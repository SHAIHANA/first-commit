///1 load .env file
require('dotenv').config()

//2 import express
const express =require('express')

//3 import cors
const cors = require ('cors')
//10import router
const router = require ('./Routes/router')

//9  import DB
require('./DB/connection')

//4 create an application using express
const pfServer = express()

//5 use
pfServer.use(cors())
pfServer.use(express.json())
pfServer.use(router)

//6 define port number
const PORT =3000 || process.env.PORT

//7 Define listen
pfServer.listen(PORT,(req,res)=>{
    console.log("pfserver started at port" + PORT);
 
}) 


//8 Define Client request
pfServer.get('/',(req,res)=>{
    res.status(200).send("<h1>Project Fair Server Started....Waiting For the Client Request...</h1>")
})