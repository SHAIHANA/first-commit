require('dotenv').config()


//Imports
const express =require('express')
const cors = require('cors')
const router=require('./Router/router')

require('./Connection/db')



//create an app using express
const  CartServer=express();

CartServer.use(cors())
CartServer.use(express.json())
CartServer.use(router)


const PORT =3000 || process.env.PORT
 
CartServer.listen(PORT,()=>{
    console.log("Listen on the port" + PORT);
    
})

CartServer.get('/',(req,res)=>{
    res.send("E cart server is Started...")
})