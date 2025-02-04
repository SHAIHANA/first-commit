const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    title: {
        type: String,
        require: true,

    },
    price: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    quantity: {
        type: Number,
        require: true
    },
    grantTotal:{
        type:Number
    },
    userId: {
        type: String,
        require: true
    }
})


//model creation
const carts = mongoose.model('carts', cartSchema)
//carts export cheyya
module.exports = carts