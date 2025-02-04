const mongoose = require('mongoose');

const connectionString =process.env.DBConnection

mongoose.connect(connectionString).then((res)=>{
    console.log("Mongodb conntion established ");
    
})
.catch((error)=>{
    console.log(error);
})