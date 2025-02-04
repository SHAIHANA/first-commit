const mongoose=require('mongoose');

//defind the schema
const userSchema = new 
mongoose.Schema({

    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
});


//model creation and export
const users = mongoose.model('users',userSchema);
//usersine export cheyya
module.exports=users;