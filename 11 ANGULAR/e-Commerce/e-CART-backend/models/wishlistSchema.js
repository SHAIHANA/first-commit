const mongoose=require('mongoose')
const userSchema=require('../models/userSchema')

const wishlistSchema =new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    title:{
        type:String,
        require:true,
        
    },
    price:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    userId:{
        type:String,
        require:true
    }
})

 
//model creation
const wishlists = mongoose.model('wishlists ',wishlistSchema)
//wishlistine export cheyya
module.exports=wishlists