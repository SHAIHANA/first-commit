//1 import mongoose
const mongoose = require("mongoose")

//2 create a connection stroing 
const connection_string = process.env.CONNECTION_STRING

//3 connected to the database
 mongoose.connect(connection_string).then((res)=>{
    console.log("MongoDB connection establishes with pfserver");
    
 }).catch((err)=>{
    console.log("Mongodb connection error:" + err);
    
 })
 